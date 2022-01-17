import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	return (
		<nav className="Navbar navbar navbar-expand-md">
			<Link className="navbar-brand" to="/">
				Jobly
			</Link>
		</nav>
	);
};

export default Navbar;
