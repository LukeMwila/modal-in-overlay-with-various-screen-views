import React, { Component } from 'react'
import Overlay from './Overlay'
import Modal from './Modal'
import './App.css'

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Overlay>
          <Modal />
        </Overlay>
      </div>
    );
  }
}

export default App;
