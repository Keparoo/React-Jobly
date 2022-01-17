import React from 'react';
// import './JobList.css';
import SearchForm from '../SearchForm';
import JobCardList from './JobCardList';

const JobList = () => {
	return (
		<div className="JobList">
			<h1>Jobs</h1>
			<SearchForm />
			<JobCardList />
		</div>
	);
};

export default JobList;
