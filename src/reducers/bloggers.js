const bloggersReducerDefaultState = []

const bloggersReducer = (state = bloggersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_BLOGGERS':
            return action.bloggers
        default:
            return state
    }
}

export default bloggersReducer