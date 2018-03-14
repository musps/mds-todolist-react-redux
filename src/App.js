import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Home from './components/homeComponent'
import ItemAlone from './components/itemAloneComponent'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Route path='/' exact component={Home} />
        <Route path='/item/:id' component={ItemAlone} />
      </div>
    );
  }

}

export default App
