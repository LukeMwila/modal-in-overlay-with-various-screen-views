import React, { Component } from 'react'
import ModalContainer from './ModalContainer'
import ModalButtonContainer from './ModalButtonContainer'
import ModalNavButton from '../ModalNavButton'
import ModalView from '../ModalView'
import {
  FIRST_VIEW,
  SECOND_VIEW,
  THIRD_VIEW,
  DEFAULT_VIEWS,
  UNSET_DEFAULT_VIEWS
} from '../constants'

class Modal extends Component {
  constructor () {
    super()
    this.state = {
      views: DEFAULT_VIEWS
    }
    this.changeView = this.changeView.bind(this)
  }

  changeView (chosenView) {
    let views = {
      'First': false,
      'Second': false,
      'Third': false
    }
    views[chosenView] = !views.chosenView
    this.setState({ views: views })
  }

  render () {
    return (
      <ModalContainer>
        <h1>Modal with different views</h1>
        <ModalButtonContainer>
          <ModalNavButton viewName={FIRST_VIEW} changeView={() => { this.changeView(FIRST_VIEW) }} />
          <ModalNavButton viewName={SECOND_VIEW} changeView={() => { this.changeView(SECOND_VIEW) }} />
          <ModalNavButton viewName={THIRD_VIEW} changeView={() => { this.changeView(THIRD_VIEW) }} />
        </ModalButtonContainer>
        <ModalView showView={this.state.views.First}>
          View one
        </ModalView>
        <ModalView showView={this.state.views.Second}>
          View Two
        </ModalView>
        <ModalView showView={this.state.views.Third}>
          View three
        </ModalView>
      </ModalContainer>
    )
  }
}

export default Modal
