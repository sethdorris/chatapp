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

export const socketOnOpen = () => {
    return {
        type: 'SOCKET_ON_OPEN'
    }
}

export const sendMessage = (message) => {
    return {
        type: 'SEND_MESSAGE',
        message
    }
}

export const passWSS = (server) => {
    return {
        type: 'PASS_WSS',
        server
    }
}

