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
  console.log('state', state)
  return { articles: state.remoteArticles.slice(0, 10) }
}

const ConnectedList = ({ articles }) => {
  useEffect(() => {
    getData()
  }, [])
  return articles ? (
    <ul>
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
