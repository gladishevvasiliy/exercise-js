import React from 'react'
import PropTypes from 'prop-types'

const Input = props => (
  <React.Fragment>
    <h1>Input</h1>
    <input onChange={() => props.actions.getData('lol')} />
  </React.Fragment>
)

export default Input

Input.propTypes = {
  actions: PropTypes.object,
}
