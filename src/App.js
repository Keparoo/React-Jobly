import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import JoblyApi from './api/api';
import './App.css';
import Navbar from './routes/Navbar';
import Routes from './routes/Routes';
import UserContext from './auth/UserContext';
import Spinner from './Spinner';
import jwt from 'jsonwebtoken';
import useLocalStorage from './hooks/useLocalStorage';

const App = () => {
	const [ infoLoaded, setInfoLoaded ] = useState(false);
	const [ token, setToken ] = useState(null);
	const [ currentUser, setCurrentUser ] = useLocalStorage('jobly-token');

	useEffect(
		function loadUserData() {
			const getCurrentUser = async () => {
				if (token) {
					try {
						let { username } = jwt.decode(token);
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

	if (!infoLoaded) return <Spinner />;

	return (
		<BrowserRouter>
			<UserContext.Provider value={{ currentUser, setCurrentUser }}>
				<div className="App">
					<Navbar logout={logout} />
					<Routes signup={signup} login={login} />
				</div>
			</UserContext.Provider>
		</BrowserRouter>
	);
};

export default App;
