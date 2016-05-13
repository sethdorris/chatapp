const initialState = {username: '', messages: [], users: []};
export const reducer = (state = initialState, action) => {
    if (typeof state == 'undefined') {
        return {}
    } 

    switch (action.type) {
        case 'SET_USERNAME':
            return {
                ...state,
                username: action.username
            }
        case 'SOCKET_CONNECT_INIT':
            return {
                ...state,
                connecting: true,
                connected: false,
                hostname: action.hostname
            }
        case 'SOCKET_ON_OPEN':
            return {
                ...state,
                connecting: false,
                connected: true
            }
        case 'SEND_MESSAGE':
            return {
                ...state, 
                messages: state.messages.concat(action.message)
            }
        case 'FROMSERVER_USERCONNECTED':
            return {
                ...state,
                users: action.users,
                messages: state.messages.concat({content: action.username + " has connected.", sentby: "Server", timestamp: action.timestamp})
            }
        case 'FROMSERVER_NEWMESSAGE':
            return {
                ...state,
                messages: state.messages.concat({content: action.content, sentby: action.sentby, timestamp: action.timestamp})
            }
        case 'FROMSERVER_USERDISCONNECT':
            return {
                ...state,
                messages: state.messages.concat({content: action.content, sentby: action.sentby, timestamp: action.timestamp}),
                users: action.onlineusers
            }
        default:
            return state;
    }
}

