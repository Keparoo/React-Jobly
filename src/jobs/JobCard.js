import React from 'react';
import './JobCard.css';

const JobCard = ({ title, salary, equity, company }) => {
	return (
		<div className="JobCard card">
			<div className="card-body">
				<h5>{title}</h5>
				<p>
					<small>{equity}</small>
				</p>
				<p>{company}</p>
			</div>
		</div>
	);
};

export default JobCard;
