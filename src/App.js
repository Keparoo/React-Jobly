import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import jwt from 'jsonwebtoken';

import JoblyApi from './api/api';
import './App.css';
import Navbar from './routes/Navbar';
import Routes from './routes/Routes';

function App() {
	const [ token, setToken ] = useState(null);

	console.log(token);

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

	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<Routes signup={signup} />
			</div>
		</BrowserRouter>
	);
}

export default App;
