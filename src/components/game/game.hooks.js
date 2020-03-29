/*eslint-disable */
import { useEffect, useState } from "react";
import { fetchGameDataMaster, fetchGameDataUser, fetchGameDataRoles } from "../../services/game.service";

export const gameDataUserHook = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        async function getData() {
            try {
                const data = await fetchGameDataUser().then(response => response.data);
                setData(data);

            } catch (err) {
                alert(err);
            }
        }
        getData();
    }, []);

    return data;
}

export const gameDataMasterHook = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        async function getData() {
            try {
                const data = await fetchGameDataMaster().then(response => response.data);
                setData(data);

            } catch (err) {
                alert(err);
            }
        }
        getData();
    }, []);

    return data;
}

export const gameDataRoleHook = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        async function getData() {
            try {
                const data = await fetchGameDataRoles().then(response => response.data);
                setData(data);

            } catch (err) {
                alert(err);
            }
        }
        getData();
    }, []);

    return data;
}