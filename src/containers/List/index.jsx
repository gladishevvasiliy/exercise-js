import React from 'react'
import PropTypes from 'prop-types'

const List = props => (
  <div>
    {props.list.length === 0 ? 'Подходящих не найдено' : null}
    {props.list.map(item => (
      <li key={item.numericCode}>{item.name}</li>
    ))}
  </div>
)

export default List

List.propTypes = {
  list: PropTypes.array,
}
