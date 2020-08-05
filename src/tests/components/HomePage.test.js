import React from 'react'
import { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import database from '../../firebase/firebase'
import HomePage from '../../components/HomePage'
import { startSetBloggers } from '../../actions/bloggers'
import defaultStoreData from '../fixtures/store'

const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
    const store = createMockStore({auth: {}, entries: {}, entry: {}, bloggers: {}, filters: {} })
    database.ref('/').set(defaultStoreData).then(done())
    store.dispatch(startSetBloggers())
})

test('Should render HomePage correctly', () => {
    const store = createMockStore({auth: {}, entries: {}, entry: {}, bloggers: {}, filters: {} })
    const wrapper = shallow(<HomePage store={store} />)
    expect(wrapper).toMatchSnapshot()
})
