import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App';
import './styles/app.css';

import todoListStore from './stores/todoListStore'

ReactDOM.render(
  <Provider store={todoListStore}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
