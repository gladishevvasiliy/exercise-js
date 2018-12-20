import * as React from 'react'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { trim, isNil } from 'lodash'

import InputWithPrompts from '../components/InputWithPrompts'
import { setData } from '../actions/index'
import fetchData from '../utils/fetch' // функция, которая делает fetch к API
import { API } from '../res/constants' // url api (его статическая часть, без {name})
import { Item } from '../res/Models'

/* Main - абстактная страница, на которой размещен InputWithPrompts - компонент для ввода
значений с подсказками. К странице Main подключен редакс где есть хранилище list (хранит
список подходящих элементов к введенному в поле), и экшены setData (добавление в стор элементов
полученных из API), и removeData (удаление из стора элементов)
*/

type Props = StateProps & DispatchProps

interface State {
  formValue: string
}

class Main extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      formValue: '',
    }
  }

  componentDidUpdate(prevProps: any, prevState: State): void {
    if (prevState.formValue === this.state.formValue) return
    const { actions } = this.props
    const { formValue } = this.state

    // если введены пробелы, то store очищается (нехорошо, т. к при каждом нажатии пробела экшен)
    if (!trim(formValue)) {
      actions.setData([])
      return
    }
    // формируем ссылки из статичной части, и изменяемой {name}
    const urlForFetch = `${API}${formValue}`
    // выполняем функцию, которая делает fetch к API (вынес в отдельный файл в папке utils)
    fetchData(urlForFetch).then((data: Array<Object>) => {
      // к сожалению, лучшего способа пока не нашел. Если вернулись undefined, то тогда removeData
      if (isNil(data)) {
        actions.setData([])
        return
      }
      actions.setData(data)
    })
  }

  // метод, который обрабатывает изменения в input
  onChange = (value: string): void => {
    this.setState({ formValue: value })
  }
  render() {
    const { list } = this.props
    // передаем InputWithPrompts список полученный от сервера и функцию, реагирующую на изменения
    return (
      <div>
        <InputWithPrompts options={list} onChange={this.onChange} />
      </div>
    )
  }
}

interface StateProps {
  list: Array<Object>
}

interface DispatchProps {
  actions: { setData: typeof setData }
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return { actions: bindActionCreators({ setData }, dispatch) }
}

const mapStateToProps = (state: StateToProps): StateProps => {
  console.log(state)
  return { list: state.list }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main)

type StateToProps = {
  list: Array<Object>
}
