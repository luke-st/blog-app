import bloggersReducer from '../../reducers/bloggers'

test('should set entry', () => {
    const action = {
        type:'SET_BLOGGERS',
        bloggers:[{
            uid: 'testUID',
            name: 'John Smith',
            posts: 1
        }]
    }
    const state = bloggersReducer(undefined, action)
    expect(state).toBe(action.bloggers)
})