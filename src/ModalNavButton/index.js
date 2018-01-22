import React from 'react'
import PropTypes from 'prop-types'
import NavButtonContainer from './NavButtonContainer'

const ModalNavButton = (props) => {
  return (
    <NavButtonContainer onClick={props.changeView}>
      {props.viewName}
    </NavButtonContainer>
  )
}

export default ModalNavButton
