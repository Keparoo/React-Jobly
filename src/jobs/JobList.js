import React, { useState, useEffect } from 'react';
// import './JobList.css';
import JoblyApi from '../api/api';
import SearchForm from '../SearchForm';
import JobCard from './JobCard';
import Spinner from '../Spinner';

const JobList = () => {
	const [ jobs, setJobs ] = useState([]);

	useEffect(() => {
		async function getJobs() {
			let jobs = await JoblyApi.getJobs();
			setJobs(jobs);
		}

		getJobs();
	}, []);

	const search = async (query) => {
		let jobs = await JoblyApi.getJobs(query);
		setJobs(jobs);
	};

	if (!jobs) return <Spinner />;

	return (
		<div className="JobList col-md-8 offset-md-2">
			<SearchForm setQuery={search} />
			<div className="CompanyList-list">
				{jobs.map((j) => (
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

export default JobList;
