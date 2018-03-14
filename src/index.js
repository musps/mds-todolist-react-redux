import React from 'react';
import ReactDOM from 'react-dom';

// ---> Components
import App from './App';
import './styles/app.css';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'


// ---> Stores
import todoListStore from './stores/todoListStore'

ReactDOM.render(
  <Provider store={todoListStore}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)