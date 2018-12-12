import { GET_DATA } from '../res/constants'

const initialState = {
  list: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA: {
      console.log('fetching to api...') // eslint-disable-line
      return state
    }
    default: {
      return state
    }
  }
}
