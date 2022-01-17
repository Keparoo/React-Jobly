import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './routes/Navbar';
import Routes from './routes/Routes';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<h1>React Jobly</h1>
				<Routes />
			</div>
		</BrowserRouter>
	);
}

export default App;
