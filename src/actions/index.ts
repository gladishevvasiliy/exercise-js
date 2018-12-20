import { SET_DATA } from '../res/constants'

// list actions
const setData = (value: Array<Object>) => ({ type: SET_DATA, payload: value })

export { setData }
