import React from 'react'
import PropTypes from 'prop-types'
import { Input, List } from '../../containers'

const InputWithPrompts = props => (
  <React.Fragment>
    <Input onChange={props.onChange} />
    <List list={props.options} />
  </React.Fragment>
)

export default InputWithPrompts

InputWithPrompts.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func,
}
