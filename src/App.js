import React from 'react';
import './App.css';
import Navbar from './routes/Navbar';
import Routes from './routes/Routes';

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
