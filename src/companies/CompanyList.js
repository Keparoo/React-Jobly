import React, { useState, useEffect } from 'react';
// import './CompanyList.css';
import JoblyApi from '../api/api';
import SearchForm from '../common/SearchForm';
import CompanyCardList from './CompanyCardList';
import Spinner from '../common/Spinner';

const CompanyList = () => {
	const [ companies, setCompanies ] = useState([]);

	useEffect(() => {
		async function getCompanies() {
			let companies = await JoblyApi.getCompanies();
			setCompanies(companies);
		}

		getCompanies();
	}, []);

	const search = async (query) => {
		let companies = await JoblyApi.getCompanies(query);
		setCompanies(companies);
	};

	if (!companies) return <Spinner />;

	return (
		<div className="CompanyList col-md-8 offset-md-2">
			<SearchForm setQuery={search} />
			<div className="CompanyList-list">
				<CompanyCardList companies={companies} />
			</div>
		</div>
	);
};

export default CompanyList;
