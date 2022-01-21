import React from 'react';
import useForm from '../hooks/useForm';
import './SearchForm.css';

/* Search form

    Called by CompanyList and JobList as a search filter

    The searchFor prop in the parent component does the searching
    This component renders the form and calls the searhFor method

    CompanyList, Joblist call SearchForm
*/

const SearchForm = ({ setQuery }) => {
	console.debug('SearchForm', 'searchFor=', typeof setQuery);

	// Custom hook to takecare to set formData state, handleChange in form and reset form
	// useForm takes the initialValue/resetValue of form as a prop
	const [ formData, handleChange, resetForm ] = useForm({ query: '' });

	// Call parent search method after trimming white space
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
