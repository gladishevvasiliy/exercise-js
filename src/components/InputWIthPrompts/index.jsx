import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input, List } from '../../containers'
/* eslint-disable */
export default class InputWithPrompts extends Component {
  /* eslint-enable */

  render() {
    // TODO if spaces delete
    const { options, onChange } = this.props
    return (
      <React.Fragment>
        <Input onChange={onChange} />
        <List list={options} />
      </React.Fragment>
    )
  }
}

InputWithPrompts.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func,
}
