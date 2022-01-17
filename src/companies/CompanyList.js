import React from 'react';
// import './CompanyList.css';
import SearchForm from '../SearchForm';
import CompanyCard from './CompanyCard';

const CompanyList = () => {
	return (
		<div className="CompanyList.css">
			<h1>Companies Page</h1>
			<SearchForm />
			<CompanyCard />
		</div>
	);
};

export default CompanyList;
