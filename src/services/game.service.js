import instance from './instance';

function fetchGameDataMaster(id, masterKey) {
    console.log('fetchGameDataMaster', `/game${id}/master?key=${masterKey}`)
    return instance({
        method: 'get',
        url: `/game/${id}/master?key=${masterKey}`,
    });
}

function fetchGameDataUser(id) {
    return instance({
        method: 'get',
        url: `/game/${id}`,
    });
}

function openGameCard(id, cardNumber, masterKey) {
    return instance({
        method: 'put',
        url: `/game/${id}/master/open/${cardNumber}?key=${masterKey}`
    })
}

function createGame() {
    return instance({
        method: 'post',
        url: '/game',
    });
}

export default {
    createGame,
    fetchGameDataUser,
    fetchGameDataMaster,
    openGameCard
}