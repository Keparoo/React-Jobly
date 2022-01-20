import React, { useContext, useEffect, useState } from 'react';
import './JobCard.css';
import UserContext from '../auth/UserContext';

const JobCard = ({ id, title, salary, equity, company }) => {
	const { hasAppliedToJob, applyToJob } = useContext(UserContext);
	const [ applied, setApplied ] = useState(false);

	useEffect(
		function updateApplied() {
			setApplied(hasAppliedToJob(id));
		},
		[ id, hasAppliedToJob ]
	);

	const handleApply = async (e) => {
		if (hasAppliedToJob(id)) return;
		applyToJob(id);
		setApplied(true);
	};

	function formatSalary(salary) {
		const digitsRev = [];
		const salaryStr = salary.toString();

		for (let i = salaryStr.length - 1; i >= 0; i--) {
			digitsRev.push(salaryStr[i]);
			if (i > 0 && i % 3 === 0) digitsRev.push(',');
		}

		return digitsRev.reverse().join('');
	}

	return (
		<div className="JobCard card">
			{' '}
			{applied}
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p>{company}</p>
				{salary && (
					<div>
						<small>Salary: ${formatSalary(salary)}</small>
					</div>
				)}
				{equity && (
					<div>
						<small>Equity: {equity}</small>
					</div>
				)}

				<button
					className="btn btn-danger font-weight-bold text-uppercase float-right"
					onClick={handleApply}
					disabled={applied}
				>
					{applied ? 'Applied' : 'Apply'}
				</button>
			</div>
		</div>
	);
};

export default JobCard;
