import { SET_DATA, REMOVE_DATA, CHANGE_FORM } from '../res/constants'

// form actions

export const changeForm = value => ({ type: CHANGE_FORM, payload: value })

// list actions

export const setData = value => ({ type: SET_DATA, payload: value })
export const removeData = () => ({ type: REMOVE_DATA })
