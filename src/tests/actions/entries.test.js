import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { setEntries, resetEntries, getBloggerEntries } from '../../actions/entries'

const createMockStore = configureMockStore([thunk])

test('should create set entries action object', () => {
    const entries = {
        uid: '12p93rhfg8ebvwoepf',
        id: '1o2i3hefgivfs',
        title: 'This is a test title',
        subtitle: 'This is a test subtitle'
    }
    const action = setEntries(entries)
    expect(action).toEqual({
        type: 'SET_ENTRIES',
        entries
    })
})

test('should create reset entries object', () => {
    const action = resetEntries()
    expect(action).toEqual({
        type: 'RESET_ENTRIES'
    })
})