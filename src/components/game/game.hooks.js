/*eslint-disable */
import { useEffect, useState, useContext } from "react";

import gameService from "../../services/game.service";
import notificationService from "../../services/notification.service";
import { CredentialsContext } from "../../facilities/authentication/credentials.context";
import { isUser, isMaster } from "../../facilities/authorization/authorization.utils";

export const useGameData = (role) => {
    const [gameVersion, setGameVersion] = useState(0);
    const [gameData, setGameData] = useState({});

    const { credentials } = useContext(CredentialsContext);

    useEffect(() => {
        if (isUser(role)) {
            const { id } = credentials;
            async function getUserGameData() {
                try {
                    const { data } = await gameService.fetchGameDataUser(id, gameVersion);
                    setGameData(data);

                } catch (err) {
                    alert(err);
                }
            }
            getUserGameData();
        } else if (isMaster(role)) {
            const { id, secretKey } = credentials;
            async function getMaterGameData() {
                try {
                    const { data } = await gameService.fetchGameDataMaster(id, secretKey, gameVersion);
                    setGameData(data);

                } catch (err) {
                    alert(err);
                }
            }
            getMaterGameData();
        }
    }, [gameVersion]);

    const getGameData = (version) => {
        setGameVersion(version);
    }

    return { gameData, getGameData };
}

export const useGameCard = () => {
    const { credentials } = useContext(CredentialsContext);
    const { id, secretKey } = credentials;
    const [cardNumberToOpen, openCard] = useState(-1);

    const openCardWrapper = (number) => {
        console.log("open wrapper", number);
        openCard(number);
    };

    useEffect(() => {
        function getData(cardNumber) {
            try {
                gameService.openGameCard(id, cardNumber, secretKey).then(response => response.status);
            } catch (err) {
                alert(err);
            }
        }
        if (cardNumberToOpen !== -1) {
            getData(cardNumberToOpen);
        }
    }, [cardNumberToOpen]);

    return { openCard: openCardWrapper };
}

export const useGameNotifications = (id) => {
    const [gameVersion, setGameVersion] = useState(0);
    useEffect(() => {
        const connection = notificationService.getGameNotifications(id);
        connection.onopen = () => { console.log("Notification connection is opened"); };
        connection.onmessage = (message) => {
            const { data } = message;
            const { gameVersionId } = JSON.parse(data);
            setGameVersion(gameVersionId);
        };
        connection.onclose = () => {
            connection.close();
        };
        // TODO: close websocket
        // return () => {
        //     console.log("Notification connection is closed"); 
        //     connection.close();
        // };
    }, []);
    return { gameVersion }
}
