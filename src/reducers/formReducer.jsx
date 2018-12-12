import CHANGE_FORM from '../res/constants'

const initialState = {
  form: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FORM: {
      console.log('CHANGE_FORM') // eslint-disable-line
      return {
        ...state,
        form: action.payload,
      }
    }

    default: {
      return state
    }
  }
}
