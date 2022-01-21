import React, { useState, useEffect } from 'react';
// import './CompanyList.css';
import JoblyApi from '../api/api';
import SearchForm from '../common/SearchForm';
import CompanyCardList from './CompanyCardList';
import Spinner from '../common/Spinner';

/*  Render page with list of companies and filter search form

    On mount, renders list of all companies in API
    On reload, if search is not undefined, filter search with search term

    Routed to /companies

    Routes calls CompanyList
    CompanyList calls CompanyCardList, SearchForm, Spinner
*/

const CompanyList = () => {
	console.debug('CompanyList');

	const [ companies, setCompanies ] = useState([]);

	useEffect(() => {
		console.debug('CompanyList useEffect on Mount');
		search();
	}, []);

	// Run on search form submit: reloads companies with filtered results
	const search = async (query) => {
		let companies = await JoblyApi.getCompanies(query);
		setCompanies(companies);
	};

	if (!companies) return <Spinner />;

	return (
		<div className="CompanyList col-md-8 offset-md-2">
			<SearchForm setQuery={search} />
			{companies.length ? (
				<CompanyCardList companies={companies} />
			) : (
				<p className="lead">Sorry, no results were found!</p>
			)}
		</div>
	);
};

export default CompanyList;
