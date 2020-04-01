/*eslint-disable */
import { useEffect, useState } from "react";
import gameService from "../../services/game.service";

export const getUserGameData = (id) => {
    const [data, setData] = useState({});
    useEffect(() => {
        async function getData() {
            try {
                const data = await gameService.fetchGameDataUser(id).then(response => response.data);
                setData(data);

            } catch (err) {
                alert(err);
            }
        }
        getData();
    }, []);

    return data;
}

export const getMasterGameData = (id, masterKey) => {
    const [data, setData] = useState({});
    useEffect(() => {
        async function getData() {
            try {
                const data = await gameService.fetchGameDataMaster(id, masterKey).then(response => response.data);
                setData(data);

            } catch (err) {
                alert(err);
            }
        }
        getData();
    }, []);

    return data;
}

export const startGame = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        async function getData() {
            try {
                const data = await gameService.startGame().then(response => response.data);
                setData(data);

            } catch (err) {
                alert(err);
            }
        }
        getData();
    }, []);

    return data;
}

export const useOpenGameCard = (id, masterKey) => {
    const [openedCardNumber, openCard] = useState(-1);
    const [data, setData] = useState({});

    useEffect(() => {
        async function getData(cardNumber) {
            try {
                const data = await gameService.openGameCard(id, cardNumber, masterKey).then(response => response.data);
                setData(data);

            } catch (err) {
                alert(err);
            }
        }
        if (openedCardNumber !== -1) {
            getData(openedCardNumber);
        }
    }, [openedCardNumber]);

    return { data, openCard };
}