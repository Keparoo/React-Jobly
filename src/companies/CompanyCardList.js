import React from 'react';
import { Link } from 'react-router-dom';
// import './CompanyCardList.css';
import CompanyCard from './CompanyCard';

/* Render a list of cards containing CompanyCards

    Called by CompanyList, Calls CompanyCard
*/

const CompanyCardList = ({ companies }) => {
	console.debug('CompanyCardList');

	return (
		<div className="CompanyCardList">
			{companies.map((c) => (
				<Link key={c.handle} to={`/companies/${c.handle}`}>
					<CompanyCard
						key={c.handle}
						name={c.name}
						description={c.description}
						numEmployees={c.numEmployees}
						logoUrl={c.logoUrl}
					/>
				</Link>
			))}
		</div>
	);
};

export default CompanyCardList;
