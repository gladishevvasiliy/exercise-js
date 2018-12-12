import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import InputWithPrompts from './components/'
import rootReducer from './reducers'
import './styles.less'

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
/* eslint-enable */

const App = () => (
  <Provider store={store}>
    <InputWithPrompts />
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))
