import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import database from '../../firebase/firebase'
import defaultStoreData from '../fixtures/store'
import { setBloggers, startSetBloggers } from '../../actions/bloggers'

const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
    database.ref('/').set(defaultStoreData).then(done())
})

test('should setup set bloggers action object', () => {
    const bloggers = [{
        uid: '10',
        name: 'John',
        posts: 45
    }, {
        uid: '50',
        name: 'Eli',
        posts: 2
    }]
    const action = setBloggers(bloggers)
    expect(action).toEqual({
        type: 'SET_BLOGGERS',
        bloggers
    })
})

test('should setup bloggers in store from database', (done) => {
    const store = createMockStore()
    store.dispatch(startSetBloggers()).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'SET_BLOGGERS',
            bloggers: expect.any(Array)
        })
        done()
    })
})
