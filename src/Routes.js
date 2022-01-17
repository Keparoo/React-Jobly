import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Companies from './CompanyList';
import CompanyCard from './CompanyCard';
import JobList from './JobList';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import Profile from './ProfileForm';
import Homepage from './Homepage';

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
