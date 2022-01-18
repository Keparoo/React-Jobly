import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import './CompanyList.css';
import JoblyApi from '../api/api';
import SearchForm from '../SearchForm';
import CompanyCard from './CompanyCard';

const CompanyList = () => {
	const [ isLoading, setIsLoading ] = useState(false);
	const [ companies, setCompanies ] = useState([]);

	useEffect(() => {
		async function getCompanies() {
			let companies = await JoblyApi.getCompanies();
			setCompanies(companies);
			setIsLoading(false);
		}

		getCompanies();
	}, []);

	const search = async (query) => {
		let companies = await JoblyApi.getCompanies(query);
		setCompanies(companies);
	};

	if (isLoading) {
		return <p>Loading &hellip;</p>;
	}
	// console.log('In Company', query);

	return (
		<div className="CompanyList col-md-8 offset-md-2">
			<SearchForm setQuery={search} />
			<div className="CompanyList-list">
				{companies.map((c) => (
					<Link key={c.handle} to={`/companies/${c.handle}`}>
						<CompanyCard
							key={c.handle}
							name={c.name}
							description={c.description}
							numEmployees={c.numEmployees}
							logoUrl={c.logoUrl}
						/>
					</Link>
				))}
			</div>
		</div>
	);
};

export default CompanyList;
