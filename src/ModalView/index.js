import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const ModalView = (props) => {
  let classes = classnames({
    'floatLeft fullWidth': true,
    'hideMe': !(props.showView)
  })
  return (
    <div className={classes}>
      {props.children}
    </div>
  )
}

ModalView.propTypes = {
  showView: PropTypes.bool,
  children: PropTypes.any.isRequired
}

export default ModalView
