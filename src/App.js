import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Header from './components/headerComponent'
import ListComponent from './components/listComponent'
import Item from './components/itemComponent'


class App extends Component {

  render () {
    return (
      <div className="App">
        <Header />

        <div className="containerApp">
          <div className="left">
            <ListComponent />
          </div>
          <div className="right">
            <Route path='/item/:id' component={Item} />
          </div>
        </div>

      </div>
    );
  }

}

export default App
