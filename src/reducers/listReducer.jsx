import { isNil } from 'lodash'
import { SET_DATA, REMOVE_DATA } from '../res/constants'

const initialState = {
  list: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    // помещает в store.list передаваемые ему значения (в нашем случае, список стран от API)
    case SET_DATA: {
      if (isNil(action.payload)) return state
      return {
        ...state,
        list: action.payload,
      }
    }

    // очищает store.list
    case REMOVE_DATA: {
      return {
        ...state,
        list: [],
      }
    }

    default: {
      return state
    }
  }
}
