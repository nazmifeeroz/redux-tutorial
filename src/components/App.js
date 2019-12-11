import React from 'react';
import {connect} from 'react-redux';

const App = () => (
	<div>
		<h2>Articles</h2>
		<List />
	</div>
);

const select = state => {
	return {articles: state.articles};
};

const ConnectedList = ({articles}) => (
	<ul>
		{articles.map(el => (
			<li key={el.id}>{el.title}</li>
		))}
	</ul>
);

const List = connect(select)(ConnectedList);

export default App;
