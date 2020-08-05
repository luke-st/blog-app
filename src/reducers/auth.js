export default (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                uid: action.uid,
                displayname: action.displayname
            }
        case 'LOGOUT':
            return {}
        default:
            return state
    }
}