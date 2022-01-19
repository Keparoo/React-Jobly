import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import CompanyList from '../companies/CompanyList';
import CompanyDetails from '../companies/CompanyDetails';
import JobList from '../jobs/JobList';
import SignupForm from '../auth/SignupForm';
import LoginForm from '../auth/LoginForm';
import Profile from '../profiles/ProfileForm';
import Homepage from '../homepage/Homepage';
import LoggedInRoute from './LoggedInRoute';

const Routes = ({ login, signup }) => {
	return (
		<Switch>
			<LoggedInRoute exact path="/companies">
				<CompanyList />
			</LoggedInRoute>
			<LoggedInRoute exact path="/companies/:handle">
				<CompanyDetails />
			</LoggedInRoute>
			<LoggedInRoute exact path="/jobs">
				<JobList />
			</LoggedInRoute>
			<Route exact path="/signup">
				<SignupForm signup={signup} />
			</Route>
			<Route exact path="/login">
				<LoginForm login={login} />
			</Route>
			<LoggedInRoute exact path="/profile">
				<Profile />
			</LoggedInRoute>
			<Route exact path="/">
				<Homepage />
			</Route>

			<Redirect to="/" />
		</Switch>
	);
};

export default Routes;
