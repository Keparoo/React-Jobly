import React, { useState, useEffect } from 'react';
// import './JobList.css';
import JoblyApi from '../api/api';
import SearchForm from '../common/SearchForm';
import JobCardList from './JobCardList';
import Spinner from '../common/Spinner';

/* Render page with list of job cards

    On mount load all jobs from API
    On search: reload jobs filtered by search

    Routes call JobList, Joblist Calls JobCardList, JobCardList calls JobCard

    Routed to /jobs
*/

const JobList = () => {
	console.debug('JobList');

	const [ jobs, setJobs ] = useState([]);

	useEffect(() => {
		console.debug('JobList useEffect getAllJobsOnMount');
		search();
	}, []);

	// On search query API for jobs filtered by query
	const search = async (query) => {
		let jobs = await JoblyApi.getJobs(query);
		setJobs(jobs);
	};

	if (!jobs) return <Spinner />;

	return (
		<div className="JobList col-md-8 offset-md-2">
			<SearchForm setQuery={search} />
			{jobs.length ? (
				<JobCardList jobs={jobs} />
			) : (
				<p className="lead">Sorry, no results were found!</p>
			)}
		</div>
	);
};

export default JobList;
