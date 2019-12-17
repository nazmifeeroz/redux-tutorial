import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store, { initialiseSagaMiddleware } from '@reduxStore'
import App from '@components/App'
import apiSaga from '../src/js/sagas/api-saga'

initialiseSagaMiddleware.run(apiSaga)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
