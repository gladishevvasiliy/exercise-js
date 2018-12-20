import * as React from 'react'
import PropTypes from 'prop-types'
import { Item } from '../../res/Models'

type Props = {
  list: Array<any>
}

const List = (props: Props) => (
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
