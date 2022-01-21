import React from 'react';
import UserContext from './auth/UserContext';

// Set up a user object for testing
const demoUser = {
	username: 'testuser',
	first_name: 'testfirst',
	last_name: 'testlast',
	email: 'test@test.net',
	photo_url: null
};

// Set up a UserContext for testing
const UserProvider = ({
	children,
	currentUser = demoUser,
	hasAppliedToJob = () => false
}) => (
	<UserContext.Provider value={{ currentUser, hasAppliedToJob }}>
		{children}
	</UserContext.Provider>
);

export { UserProvider };
