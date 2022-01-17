import React, { useState, useEffect } from 'react';
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

	if (isLoading) {
		return <p>Loading &hellip;</p>;
	}

	return (
		<div className="CompanyList col-md-8 offset-md-2">
			<SearchForm />
			<div className="CompanyList-list">
				{companies.map((c) => (
					<CompanyCard
						key={c.handle}
						name={c.name}
						description={c.description}
						numEmployees={c.numEmployees}
						logoUrl={c.logoUrl}
					/>
				))}
			</div>
		</div>
	);
};

export default CompanyList;
