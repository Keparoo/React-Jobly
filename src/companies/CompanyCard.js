import React from 'react';
import './CompanyCard.css';

const CompanyCard = ({ name, description, numEmployees, logoUrl }) => {
	return (
		<div className="CompanyCard card">
			<div className="card-body">
				<h5 className="card-title">
					{name}
					{logoUrl && (
						<img src={logoUrl} alt={''} className="float-right ml-5" />
					)}
				</h5>
				<p>
					<small>
						Num Employees: <strong>{numEmployees}</strong>
					</small>
				</p>
				<p>
					<small>{description}</small>
				</p>
			</div>
		</div>
	);
};

export default CompanyCard;
