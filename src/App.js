import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Routes from './Routes';

function App() {
	return (
		<div className="App">
			<h1>React Jobly</h1>
			<Navbar />
			<Routes />
		</div>
	);
}

export default App;
