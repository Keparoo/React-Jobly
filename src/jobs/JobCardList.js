import React from 'react';
// import './JobCardList.css';
import JobCard from './JobCard';

/* Render a list of job cards

  Called by Joblist and CompanyDetail

  Joblist calls JobCardList, JobCardList calls JobCard
  CompanyDetail Calls JobCardList, JobCardList calls JobCard
*/

const JobCardList = ({ jobs }) => {
	console.debug('JobCardList', 'jobs=', jobs);

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
