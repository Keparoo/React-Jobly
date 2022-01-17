import React from 'react';
import './CompanyCard.css';

const CompanyCard = ({ name, description, numEmployees, logoUrl }) => {
	return (
		<div className="CompanyCard">
			<h3>{name}</h3>
			<p>{description}</p>
			<p>{numEmployees}</p>
			<p>{logoUrl}</p>
		</div>
	);
};

export default CompanyCard;
