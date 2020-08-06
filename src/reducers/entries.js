const entriesReducerDefaultState = []

const entriesReducer = (state = entriesReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_ENTRIES':
            return action.entries
        case 'RESET_ENTRIES':
            return entriesReducerDefaultState
        default:
            return state
    }
}

export default entriesReducer