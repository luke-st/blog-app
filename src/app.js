import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/configureStore'
import { login, logout, accountCheck } from './actions/auth'
import LoadingPage from './components/LoadingPage'
import 'react-dates/lib/css/_datepicker.css'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import { firebase } from './firebase/firebase'
import { startSetBloggers } from './actions/bloggers'
import { getEntry } from './actions/entry'

const store = configureStore()

const jsx = (
    <Provider store={store}>
    <AppRouter />
    </Provider>
)

let hasRendered = false
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'))
        hasRendered = true
    }
}

ReactDOM.render(<LoadingPage />, document.getElementById('app'))

store.dispatch(startSetBloggers())

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid, user.displayName.split(' ')))
        accountCheck(user.uid, user.displayName)
        renderApp()
        if (history.location.pathname.includes('/edit') && history.action === 'POP') {
            history.push('/')
        }
    } else {
        store.dispatch(logout())
        renderApp()
    }
})
