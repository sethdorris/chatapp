import actions from '../actions/index';

const reducer = (state, action) => {
    if (typeof state == 'undefined') {
        return {}
    } 

    switch (action.type) {
        case 'SET_USERNAME':
            return {
                username: action.value
            }
        default:

    }
}

export default reducer;