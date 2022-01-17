import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Companies from '../companies/CompanyList';
import CompanyCard from '../companies/CompanyCard';
import JobList from '../jobs/JobList';
import SignupForm from '../auth/SignupForm';
import LoginForm from '../auth/LoginForm';
import Profile from '../profiles/ProfileForm';
import Homepage from '../homepage/Homepage';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/companies">
				<Companies />
			</Route>
			<Route exact path="/companies/:company">
				<CompanyCard />
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
