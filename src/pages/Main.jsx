import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { trim, isNil } from 'lodash'

import InputWithPrompts from '../components'
import { setData, removeData } from '../actions'
import fetchData from '../utils/fetch' // функция, которая делает fetch к API
import { API } from '../res/constants' // url api (его статическая часть, без {name})

/* Main - абстактная страница, на которой размещен InputWithPrompts - компонент для ввода
значений с подсказками. К странице Main подключен редакс где есть хранилище list (хранит
список подходящих элементов к введенному в поле), и экшены setData (добавление в стор элементов
полученных из API), и removeData (удаление из стора элементов)
*/
class Main extends Component {
  // метод, который обрабатывает изменения в input
  onChange = (value) => {
    const { actions } = this.props

    // если введены пробелы, то store очищается (нехорошо, т. к при каждом нажатии пробела экшен)
    if (!trim(value)) {
      actions.removeData()
      return
    }
    // формируем ссылки из статичной части, и изменяемой {name}
    const urlForFetch = `${API}${value}`
    // выполняем функцию, которая делает fetch к API (вынес в отдельный файл в папке utils)
    fetchData(urlForFetch).then((data) => {
      // к сожалению, лучшего способа пока не нашел. Если вернулись undefined, то тогда removeData
      if (isNil(data)) {
        actions.removeData()
        return
      }

      actions.setData(data)
    })
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
