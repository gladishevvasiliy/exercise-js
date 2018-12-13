import { SET_DATA, REMOVE_DATA } from '../res/constants'

// list actions
export const setData = value => ({ type: SET_DATA, payload: value })
export const removeData = () => ({ type: REMOVE_DATA })
