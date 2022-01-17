import React from 'react';
import useForm from './hooks/useForm';
import './SearchForm.css';

const SearchForm = () => {
	const [ formData, handleChange, resetForm ] = useForm({ query: '' });

	const handleSubmit = (e) => {
		e.preventDefault();
		resetForm();
	};

	return (
		<form className="SearchForm" onSubmit={handleSubmit}>
			<input
				type="text"
				name="query"
				value={formData.query}
				onChange={handleChange}
			/>
			<button>Search</button>
		</form>
	);
};

export default SearchForm;
