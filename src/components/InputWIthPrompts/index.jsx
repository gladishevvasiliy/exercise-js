import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Input, List } from '../../containers'

import { getData } from '../../actions'
/* eslint-disable */
class InputWithPrompts extends Component {
  /* eslint-enable */
  render() {
    // TODO if spaces delete
    const { actions, list, form } = this.props
    return (
      <React.Fragment>
        <Input form={form} actions={{ getData: actions.getData }} />
        <List actions={{ getData }} list={list} />
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getData }, dispatch),
})

const mapStateToProps = state => ({
  list: state.list.list,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InputWithPrompts)

InputWithPrompts.propTypes = {
  actions: PropTypes.object,
  list: PropTypes.string,
  form: PropTypes.string,
}
