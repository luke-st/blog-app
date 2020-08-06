import entriesReducer from '../../reducers/entries'

test('should set entry', () => {
    const action = {
        type:'SET_ENTRIES',
        entries:[{
            title: 'this is a test Title',
            subtitle: 'this is a test Subtitle',
            body: 'this is a test Body',
        }]
    }
    const state = entriesReducer(undefined, action)
    expect(state).toBe(action.entries)
})

test('should reset entry', () => {
    const action = {
        type:'RESET_ENTRIES'
    }
    const state = entriesReducer(undefined, action)
    expect(state).toEqual([])
})