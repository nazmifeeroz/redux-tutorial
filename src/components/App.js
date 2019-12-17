import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Form from '@components/Form'
import { getData } from '../js/actions/index'

const App = () => {
  console.log('rendering app')
  return (
    <>
      <div>
        <h2>Articles</h2>
        <List />
      </div>
      <div>
        <h2>Add a new article</h2>
        <Form />
      </div>
    </>
  )
}

const select = state => {
  return {
    remoteArticles: state.remoteArticles.slice(0, 10),
    articles: state.articles,
  }
}

const ConnectedList = ({ articles, remoteArticles, getData }) => {
  useEffect(() => {
    getData()
  }, [])
  return remoteArticles ? (
    <ul>
      {remoteArticles.map((el, i) => (
        <li key={`el-${i}`}>{el.title}</li>
      ))}
      {articles.map((el, i) => (
        <li key={`el-${i}`}>{el.title}</li>
      ))}
    </ul>
  ) : (
    <div>no articles</div>
  )
}

const List = connect(select, { getData })(ConnectedList)

export default App
