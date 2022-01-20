import React from 'react';
// import './JobCardList.css';
import JobCard from './JobCard';

const JobCardList = ({ jobs }) => {
	return (
		<div className="JobCardList">
			{jobs.map((j) => (
				<JobCard
					key={j.id}
					id={j.id}
					title={j.title}
					salary={j.salary}
					equity={j.equity}
					company={j.companyName}
					handle={j.companyHandle}
				/>
			))}
		</div>
	);
};

export default JobCardList;
