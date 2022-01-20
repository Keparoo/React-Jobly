import React from 'react';
import useForm from '../hooks/useForm';
import './SearchForm.css';

const SearchForm = ({ setQuery }) => {
	const [ formData, handleChange, resetForm ] = useForm({ query: '' });

	const handleSubmit = (e) => {
		e.preventDefault();
		setQuery(formData.query.trim() || undefined);
		resetForm();
	};

	return (
		<div className="SearchForm mb-4 mt-2">
			<form className="form-inline" onSubmit={handleSubmit}>
				<input
					className="form-control form-control-lg flex-grow-1"
					type="text"
					name="query"
					placeholder="Please enter a search term..."
					value={formData.query}
					onChange={handleChange}
				/>
				<button type="submit" className="btn btn-lg btn-primary">
					Search
				</button>
			</form>
		</div>
	);
};

export default SearchForm;
