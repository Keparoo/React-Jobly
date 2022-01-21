import React from 'react';
import { render } from '@testing-library/react';
import JobCardList from './JobCardList';

it('renders without crashing', function() {
	render(<JobCardList jobs={[]} />);
});

it('matches snapshot with no jobs', function() {
	const { asFragment } = render(<JobCardList jobs={[]} />);
	expect(asFragment()).toMatchSnapshot();
});
