import instance from './instance';

function fetchCredentials() {
    return instance({
        method: 'post',
        url: '/game',
    });
}

export default {
    fetchCredentials,
}