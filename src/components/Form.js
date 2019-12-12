import React, {Component, useState} from 'react';
import {connect} from 'react-redux';
import {addArticle} from '@reduxActions';

const mapDispatchToProps = dispatch => ({
	addArticle: article => dispatch(addArticle(article)),
});

const initialField = {
	title: '',
};

const ConnectedForm = ({addArticle}) => {
	const [formFields, setFormFields] = useState(initialField);

	const handleChange = e => setFormFields({[e.target.id]: e.target.value});
	const handleSubmit = e => {
		e.preventDefault();
		const {title} = formFields;
		addArticle({title});
		setFormFields(initialField);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="title">Title</label>
				<input
					type="text"
					id="title"
					value={formFields.title}
					onChange={handleChange}
				/>
			</div>
			<button type="submit">SAVE</button>
		</form>
	);
};

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;
