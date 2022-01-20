import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import JoblyApi from './api/api';
import './App.css';
import Navbar from './routes/Navbar';
import Routes from './routes/Routes';
import UserContext from './auth/UserContext';
import Spinner from './Spinner';
import jwt_decode from 'jwt-decode';
import useLocalStorage from './hooks/useLocalStorage';

const App = () => {
	const [ infoLoaded, setInfoLoaded ] = useState(false);
	const [ currentUser, setCurrentUser ] = useState(null);
	const [ token, setToken ] = useLocalStorage('jobly-token');
	const [ jobsAppliedIds, setJobsAppliedIds ] = useState(new Set([]));

	useEffect(
		function loadUserData() {
			const getCurrentUser = async () => {
				if (token) {
					try {
						let { username } = jwt_decode(token);
						JoblyApi.token = token;
						let currentUser = await JoblyApi.getCurrentUser(username);
						setCurrentUser(currentUser);
					} catch (err) {
						console.error('Error loading user data', err);
						setCurrentUser(null);
					}
				}
				setInfoLoaded(true);
			};
			setInfoLoaded(false);
			getCurrentUser();
		},
		[ token, setCurrentUser ]
	);

	const logout = () => {
		setToken(null);
		setCurrentUser(null);
	};

	const login = async (loginData) => {
		try {
			let token = await JoblyApi.login(loginData);
			setToken(token);
			return { success: true };
		} catch (errors) {
			console.error('Login error', errors);
			return { success: false, errors };
		}
	};

	const signup = async (userData) => {
		try {
			let token = await JoblyApi.signup(userData);
			setToken(token);
			return { success: true };
		} catch (errors) {
			console.error('Signup error', errors);
			return { success: false, errors };
		}
	};

	const hasAppliedToJob = (id) => {
		return jobsAppliedIds.has(id);
	};

	const applyToJob = (id) => {
		if (hasAppliedToJob(id)) return;
		JoblyApi.applyToJob(currentUser.username, id);
		setJobsAppliedIds(new Set([ ...jobsAppliedIds, id ]));
	};

	if (!infoLoaded) return <Spinner />;

	return (
		<BrowserRouter>
			<UserContext.Provider
				value={{
					currentUser,
					setCurrentUser,
					hasAppliedToJob,
					applyToJob
				}}
			>
				<div className="App">
					<Navbar logout={logout} />
					<Routes signup={signup} login={login} />
				</div>
			</UserContext.Provider>
		</BrowserRouter>
	);
};

export default App;
