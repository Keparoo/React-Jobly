import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import './CompanyDetails.css';
import JoblyApi from '../api/api';
import JobCard from '../jobs/JobCard';
import CompanyCard from './CompanyCard';

const CompanyDetails = () => {
	console.log('Company Details');
	const { handle } = useParams();
	const [ company, setCompany ] = useState(null);

	console.log(handle);

	useEffect(
		() => {
			async function getCompany() {
				let company = await JoblyApi.getCompany(handle);
				setCompany(company);
			}

			getCompany();
		},
		[ handle ]
	);

	console.log('company', company);

	return (
		<div className="JobList col-md-8 offset-md-2">
			{company && (
				<CompanyCard
					name={company.name}
					description={company.description}
					numEmployees={company.numEmployees}
					logoUrl={company.logoUrl}
				/>
			)}
			<h3 className="mt-4 mb-4">Jobs</h3>
			<div className="CompanyList-list">
				{company &&
					company.jobs.map((j) => (
						<JobCard
							key={j.id}
							title={j.title}
							equity={j.equity}
							company={j.companyName}
							handle={j.companyHandle}
						/>
					))}
			</div>
		</div>
	);
};

export default CompanyDetails;
