import instance from './instance';

function fetchGameDataMaster(id, masterKey, versionId) {
    console.log('fetchGameDataMaster', `/game${id}/master?key=${masterKey}&versionId=${versionId}`)
    return instance({
        method: 'get',
        url: `/game/${id}/master?key=${masterKey}`,
    });
}

function fetchGameDataUser(id, versionId) {
    return instance({
        method: 'get',
        url: `/game/${id}?versionId=${versionId}`,
    });
}

function openGameCard(id, cardNumber, masterKey) {
    return instance({
        method: 'put',
        url: `/game/${id}/master/open/${cardNumber}?key=${masterKey}`
    })
}

export default {
    fetchGameDataUser,
    fetchGameDataMaster,
    openGameCard
}