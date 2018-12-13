import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { trim, isNil } from 'lodash'

import InputWithPrompts from '../components'
import { setData, removeData } from '../actions'
import fetchData from '../utils/fetch'
import { API } from '../res/constants'

class Main extends Component {
  onChange = value => {
    const { actions } = this.props
    if (!trim(value)) {
      actions.removeData()
      return
    }
    const urlForFetch = `${API}${value}`
    fetchData(urlForFetch).then(data => {
      if (isNil(data)) return actions.removeData()
      actions.setData(data)
    })
  }
  render() {
    const { list } = this.props
    return (
      <div>
        <InputWithPrompts options={list} onChange={this.onChange} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ setData, removeData }, dispatch),
})

const mapStateToProps = state => ({
  list: state.list.list,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main)

Main.propTypes = {
  actions: PropTypes.object,
  list: PropTypes.array,
}
