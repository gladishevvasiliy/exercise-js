import React from 'react'
import PropTypes from 'prop-types'

const List = props => (
  <React.Fragment>
    <div>
      {props.list.length === 0 ? 'Подходящих не найдено' : null}
      {props.list.map(item => (
        <li key={item.numericCode}>{item.name}</li>
      ))}
    </div>
  </React.Fragment>
)

export default List

List.propTypes = {
  list: PropTypes.array,
}
