import { setEntry } from '../../actions/entry'

test('should dispatch setEntry action object', () => {
    const entry = {
        title: 'this',
        subtitle: 'that',
        body: 'the other'
    }
    const action = setEntry(entry)
    expect(action).toEqual({
        type: 'SET_ENTRY',
        entry
    })
})