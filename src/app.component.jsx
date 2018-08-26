import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'

import reducers from './main/main.reducers'
import Main from './main/main.component'

const store = applyMiddleware(promise)(createStore)(reducers)
ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>
, document.getElementById('app'))