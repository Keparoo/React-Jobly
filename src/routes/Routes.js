import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import CompanyList from '../companies/CompanyList';
import CompanyDetails from '../companies/CompanyDetails';
import JobList from '../jobs/JobList';
import SignupForm from '../auth/SignupForm';
import LoginForm from '../auth/LoginForm';
import Profile from '../profiles/ProfileForm';
import Homepage from '../homepage/Homepage';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/companies">
				<CompanyList />
			</Route>
			<Route exact path="/companies/:company">
				<CompanyDetails />
			</Route>
			<Route exact path="/jobs">
				<JobList />
			</Route>
			<Route exact path="/signup">
				<SignupForm />
			</Route>
			<Route exact path="/login">
				<LoginForm />
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
