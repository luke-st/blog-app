const entryReducerDefaultState = []

const entryReducer = (state = entryReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_ENTRY':
            return action.entry
        case 'RESET':
            return entryReducerDefaultState
        default:
            return state
    }
}

export default entryReducer