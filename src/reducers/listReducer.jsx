import { isNil } from 'lodash'
import { SET_DATA, REMOVE_DATA } from '../res/constants'

const initialState = {
  list: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA: {
      if (isNil(action.payload)) return state
      return {
        ...state,
        list: action.payload,
      }
    }

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
