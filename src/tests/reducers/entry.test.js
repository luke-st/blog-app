import entryReducer from '../../reducers/entry'

test('should set entry', () => {
    const action = {
        type:'SET_ENTRY',
        entry:{
            title: 'this is a test Title',
            subtitle: 'this is a test Subtitle',
            body: 'this is a test Body',
        }
    }
    const state = entryReducer(undefined, action)
    expect(state).toBe(action.entry)
})

test('should reset entry', () => {
    const action = {
        type:'RESET'
    }
    const state = entryReducer(undefined, action)
    expect(state).toEqual([])
})