import { isNil } from 'lodash'
import { SET_DATA } from '../res/constants'
import { AnyAction } from 'redux'

const initialState = {
  list: [],
}

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    // помещает в store.list передаваемые ему значения (в нашем случае, список стран от API)
    case SET_DATA: {
      if (isNil(action.payload)) return state
      return {
        ...state,
        list: action.payload,
      }
    }

    default: {
      return state
    }
  }
}
