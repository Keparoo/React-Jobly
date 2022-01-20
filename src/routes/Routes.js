import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Homepage from '../homepage/Homepage';
import SignupForm from '../auth/SignupForm';
import LoginForm from '../auth/LoginForm';
import CompanyList from '../companies/CompanyList';
import CompanyDetails from '../companies/CompanyDetails';
import JobList from '../jobs/JobList';
import Profile from '../profiles/ProfileForm';
import LoggedInRoute from './LoggedInRoute';

/* Routes for site

  Routes wrapped in LoggedInRoute require user to be logged in else
  redirect to login page

  Non-existant routes route to homepage

*/

const Routes = ({ login, signup }) => {
	console.debug(
		'Routes',
		`login=${typeof login}`,
		`register=${typeof register}`
	);

	return (
		<Switch>
			<Route exact path="/">
				<Homepage />
			</Route>

			<Route exact path="/signup">
				<SignupForm signup={signup} />
			</Route>

			<Route exact path="/login">
				<LoginForm login={login} />
			</Route>

			<LoggedInRoute exact path="/companies">
				<CompanyList />
			</LoggedInRoute>

			<LoggedInRoute exact path="/companies/:handle">
				<CompanyDetails />
			</LoggedInRoute>

			<LoggedInRoute exact path="/jobs">
				<JobList />
			</LoggedInRoute>

			<LoggedInRoute exact path="/profile">
				<Profile />
			</LoggedInRoute>

			<Redirect to="/" />
		</Switch>
	);
};

export default Routes;
