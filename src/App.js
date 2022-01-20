import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import './App.css';

import JoblyApi from './api/api';
import useLocalStorage from './hooks/useLocalStorage';
import UserContext from './auth/UserContext';

import Navbar from './routes/Navbar';
import Routes from './routes/Routes';
import Spinner from './Spinner';

// Local storage key name for token: log in persistence
export const TOKEN_STORAGE_ID = 'jobly-token';

/* Jobly application

  currentUser: user obj from API. If not null, user is logged in
  token: authentication JWT for logged in users. Required for LoggedInRoutes
  token is synced with local storage for login persistence

  App calls Navbar and Routes

*/

const App = () => {
	const [ infoLoaded, setInfoLoaded ] = useState(false);
	const [ currentUser, setCurrentUser ] = useState(null);
	const [ token, setToken ] = useLocalStorage(TOKEN_STORAGE_ID);
	const [ jobsAppliedIds, setJobsAppliedIds ] = useState(new Set([]));

	// Load currentUser from API
	// Reruns when the token changes: user logs in or user logs out

	useEffect(
		() => {
			console.debug('App useEffect loadUserInfo', 'token=', token);

			const getCurrentUser = async () => {
				if (token) {
					try {
						let { username } = jwt_decode(token);
						JoblyApi.token = token; // Save token to API class for use in API calls

						let currentUser = await JoblyApi.getCurrentUser(username);
						setCurrentUser(currentUser);

						// Load job ids applied for from user API
						setJobsAppliedIds(new Set(currentUser.applications));
					} catch (err) {
						console.error(
							'App useEffect getCurrentUser: Error loading user data',
							err
						);
						setCurrentUser(null);
					}
				}
				setInfoLoaded(true);
			};

			// Info not loaded yet: return spinner
			setInfoLoaded(false);
			getCurrentUser();
		},
		[ token ]
	);

	// Log out user sitewide
	const logout = () => {
		setToken(null);
		setCurrentUser(null);
	};

	// Sitewide login: check success===true &  await this function
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

	// Sitewide signup: check success===true &  await this function
	// Automatically logs in user and sets token
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

	// Checks if user has applied to job
	const hasAppliedToJob = (id) => {
		return jobsAppliedIds.has(id);
	};

	// Apply to job: send job id to API and update jobsAppliedIds
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
