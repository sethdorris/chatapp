export const reducer = (state, action) => {
    if (typeof state == 'undefined') {
        return {}
    } 

    switch (action.type) {
        case 'SET_USERNAME':
            return {
                ...state,
                username: action.username
            }
        default:
            return state;
    }
}

