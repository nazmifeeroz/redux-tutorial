import React from 'react';
import {connect} from 'react-redux';
import Form from '@components/Form';

const App = () => {
	console.log('rendering app');
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
	);
};

const select = state => {
	return {articles: state.articles};
};

const ConnectedList = ({articles}) =>
	articles ? (
		<ul>
			{articles.map((el, i) => (
				<li key={`el-${i}`}>{el.title}</li>
			))}
		</ul>
	) : (
		<div>no articles</div>
	);

const List = connect(select)(ConnectedList);

export default App;
