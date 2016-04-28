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
        default:
            return state;
    }
}

