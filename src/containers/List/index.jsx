import React from 'react'
import PropTypes from 'prop-types'

const List = props => (
  <React.Fragment>
    <h1>List</h1>
    <div>{props.list}</div>
  </React.Fragment>
)

export default List

List.propTypes = {
  list: PropTypes.string,
}
