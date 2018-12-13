import React from 'react'
import PropTypes from 'prop-types'

const Input = props => (
  <React.Fragment>
    <h1>Input</h1>
    <input onChange={e => props.onChange(e.target.value)} />
  </React.Fragment>
)

export default Input

Input.propTypes = {
  onChange: PropTypes.function,
}
