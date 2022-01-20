import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../auth/UserContext';

/* Replaces <Route> component in Routes
    This component checks if there is a currentUser and
    only routes the user if this is true otherwise it 
    redirects to the login form
*/

const LoggedInRoute = ({ exact, path, children }) => {
	const { currentUser } = useContext(UserContext);

	console.debug(
		'LoggedInRoute',
		'exact=',
		exact,
		'path=',
		path,
		'currentUser=',
		currentUser
	);

	if (!currentUser) {
		return <Redirect to="/login" />;
	}

	return (
		<Route exact={exact} path={path}>
			{children}
		</Route>
	);
};

export default LoggedInRoute;
