import React from 'react';
import { render } from '@testing-library/react';
import CompanyCardList from './CompanyCardList';

it('renders without crashing', function() {
	render(<CompanyCardList companies={[]} />);
});

it('matches snapshot', function() {
	const { asFragment } = render(<CompanyCardList companies={[]} />);
	expect(asFragment()).toMatchSnapshot();
});
