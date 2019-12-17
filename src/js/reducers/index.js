import { ADD_ARTICLE } from '@reduxConstants/action-types'

const initialState = {
  articles: [],
  remoteArticles: [],
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload),
      })
    case 'DATA_LOADED':
      return Object.assign({}, state, {
        remoteArticles: state.remoteArticles.concat(action.payload),
      })
    default:
      return state
  }
}

export default rootReducer
