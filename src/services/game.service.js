import instance from './instance';

export function fetchGameDataMaster() {
    return instance({
        method: 'get',
        url: '/game/4234324/master?key=dfsdfsdfsdfsdf',
    });
}

export function fetchGameDataUser() {
    return instance({
        method: 'get',
        url: '/game/4234324',
    });
}

export function fetchGameDataRoles() {
    return instance({
        method: 'post',
        url: '/game',
    });
}