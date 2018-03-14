import React, { Component } from 'react';

import Header from './headerComponent'
import List from './listComponent'

class Home extends Component {

  render() {
    return (
      <div>
        <Header />
        <List />
      </div>
    );
  }

}

export default Home
