import React from 'react';
// import './JobCardList.css';
import JobCard from './JobCard';

const JobCardList = ({ jobs }) => {
	return (
		<div className="JobCardList">
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
	);
};

export default JobCardList;
