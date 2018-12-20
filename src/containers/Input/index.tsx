import React from 'react'
import PropTypes from 'prop-types'

interface InputProps {
  onChange: Function
}

const Input = ({ onChange }: InputProps) => (
  <React.Fragment>
    <h1>Input</h1>
    <input onChange={e => onChange(e.target.value)} />
  </React.Fragment>
)

export default Input

Input.propTypes = {
  onChange: PropTypes.func,
}
