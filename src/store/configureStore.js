import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import authReducer from '../reducers/auth'
import entriesReducer from '../reducers/entries'
import entryReducer from '../reducers/entry'
import filtersReducer from '../reducers/filters'
import bloggersReducer from '../reducers/bloggers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
    const store = createStore(
        combineReducers({
            auth: authReducer,
            entries: entriesReducer,
            entry: entryReducer,
            bloggers: bloggersReducer,
            filters: filtersReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    )
    return store
}
