import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
// import './CompanyDetails.css';
import JoblyApi from '../api/api';
import JobCardList from '../jobs/JobCardList';
import CompanyCard from './CompanyCard';
import Spinner from '../Spinner';

const CompanyDetails = () => {
	const { handle } = useParams();
	const history = useHistory();
	const [ company, setCompany ] = useState(null);

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

	if (!company) return <Spinner />;

	return (
		<div className="JobList col-md-8 offset-md-2">
			<CompanyCard
				name={company.name}
				description={company.description}
				numEmployees={company.numEmployees}
				logoUrl={company.logoUrl}
			/>
			<h3 className="mt-4 mb-4">Jobs</h3>
			<JobCardList jobs={company.jobs} />
			<button
				onClick={() => history.goBack()}
				className="btn btn-primary font-weight-bold"
			>
				Back
			</button>
		</div>
	);
};

export default CompanyDetails;
