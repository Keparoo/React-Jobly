import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import './CompanyList.css';
import JoblyApi from '../api/api';
import SearchForm from '../SearchForm';
import CompanyCard from './CompanyCard';
import Spinner from '../Spinner';

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
