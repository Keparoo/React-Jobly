import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import CompanyList from '../companies/CompanyList';
import CompanyDetails from '../companies/CompanyDetails';
import JobList from '../jobs/JobList';
import SignupForm from '../auth/SignupForm';
import LoginForm from '../auth/LoginForm';
import Profile from '../profiles/ProfileForm';
import Homepage from '../homepage/Homepage';
import JoblyApi from '../api/api';

const Routes = ({ login, signup }) => {
	return (
		<Switch>
			<Route exact path="/companies">
				<CompanyList />
			</Route>
			<Route exact path="/companies/:handle">
				<CompanyDetails />
			</Route>
			<Route exact path="/jobs">
				<JobList />
			</Route>
			<Route exact path="/signup">
				<SignupForm signup={signup} />
			</Route>
			<Route exact path="/login">
				<LoginForm login={login} />
			</Route>
			<Route exact path="/profile">
				<Profile />
			</Route>
			<Route exact path="/">
				<Homepage />
			</Route>

			<Redirect to="/" />
		</Switch>
	);
};

export default Routes;
