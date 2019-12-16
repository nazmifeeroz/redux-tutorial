import { ADD_ARTICLE } from '@reduxConstants/action-types'

const forbiddenWords = ['spam', 'money']

export const forbiddenWordsMiddleware = ({ dispatch }) => {
  return next => {
    return action => {
      if (action.type === ADD_ARTICLE) {
        const foundWord = forbiddenWords.filter(word =>
          action.payload.title.includes(word)
        )
        if (foundWord.length) {
          return dispatch({
            type: 'FOUND_BAD_WORD',
          })
        }
      }
      return next(action)
    }
  }
}
