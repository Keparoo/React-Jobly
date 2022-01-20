import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { UserProvider } from '../testUtils';
import LoggedInRoute from './LoggedInRoute';

it('renders without crashing', function() {
	render(
		<MemoryRouter>
			<UserProvider>
				<LoggedInRoute />
			</UserProvider>
		</MemoryRouter>
	);
});

it('matches snapshot', function() {
	const { asFragment } = render(
		<MemoryRouter>
			<UserProvider>
				<LoggedInRoute />
			</UserProvider>
		</MemoryRouter>
	);
	expect(asFragment()).toMatchSnapshot();
});

it('matches snapshot when logged out', function() {
	const { asFragment } = render(
		<MemoryRouter>
			<UserProvider currentUser={null}>
				<LoggedInRoute />
			</UserProvider>
		</MemoryRouter>
	);
	expect(asFragment()).toMatchSnapshot();
});
