import { GET_DATA, CHANGE_FORM } from '../res/constants'

// form actions

export const changeForm = value => ({ type: CHANGE_FORM, payload: value })

// list actions

export const getData = value => ({ type: GET_DATA, payload: value })
