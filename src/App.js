import React, { Component } from 'react'
import Overlay from './Overlay'
import Modal from './Modal'

class App extends Component {

  render() {
    return (
      <div>
        <Overlay>
          <Modal />
        </Overlay>
      </div>
    );
  }
}

export default App;
