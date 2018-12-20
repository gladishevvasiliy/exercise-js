import React from 'react'
import { Input, List } from '../../containers'
import { Item } from '../../res/Models'

type InputWithPromptsProps = {
  onChange(value: String): void
  options: Array<Object>
}

const InputWithPrompts = ({ onChange, options }: InputWithPromptsProps) => (
  <React.Fragment>
    <Input onChange={onChange} />
    <List list={options} />
  </React.Fragment>
)

export default InputWithPrompts
