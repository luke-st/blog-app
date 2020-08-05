const entriesReducerDefaultState = []

const entriesReducer = (state = entriesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_ENTRY':
            return [
                ...state,
                action.entry
            ]
        case 'REMOVE_ENTRY':
            return state.filter((entry) => entry.id !== action.id)
        case 'EDIT_ENTRY':
            return state.map((entry) => {
                if (entry.id === action.id) {
                    return {
                        ...entry,
                        ...action.updates
                    }
                } else {
                    return entry
                }
            })
        case 'SET_ENTRIES':
            return action.entries
        case 'RESET_ENTRIES':
            return entriesReducerDefaultState
        default:
            return state
    }
}

export default entriesReducer