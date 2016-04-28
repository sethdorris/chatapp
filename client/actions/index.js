export const setUsername = (username) => {
    return {
        type: 'SET_USERNAME',
        username
    }
}

export const socketConnectInit = (hostname) => {
    return {
        type: 'SOCKET_CONNECT_INIT',
        hostname,
    }
}

