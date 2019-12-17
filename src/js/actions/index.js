import { ADD_ARTICLE } from '@reduxConstants/action-types'

export const addArticle = payload => {
  return {
    type: ADD_ARTICLE,
    payload,
  }
}

export const getData = () => {
  return {
    type: 'DATA_REQUESTED',
  }
}
