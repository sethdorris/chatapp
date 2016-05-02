const initialState = {username: ''};
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
        case 'SEND_MESSAGE' {
            return {
                ...state, 
                messages: action.message
            }
        }
        default:
            return state;
    }
}

