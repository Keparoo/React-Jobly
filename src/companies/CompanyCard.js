import React from 'react';
import './CompanyCard.css';

const CompanyCard = ({ name, description, numEmployees, logoUrl }) => {
	return (
		<div className="CompanyCard card">
			<div className="card-body">
				<h6 className="card-title">
					{name}
					{logoUrl && (
						<img src={logoUrl} alt={''} className="float-right ml-5" />
					)}
				</h6>
				<p>Num Employees: {numEmployees}</p>
				<p>
					<small>{description}</small>
				</p>
			</div>
		</div>
	);
};

export default CompanyCard;
