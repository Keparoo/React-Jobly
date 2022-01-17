import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	return (
		<nav className="Navbar navbar navbar-expand-md">
			<Link className="navbar-brand" to="/">
				Jobly
			</Link>
			<ul className="navbar-nav ml-auto">
				<li className="nav-item mr-4">
					<NavLink className="nav-link" to="/companies">
						Companies
					</NavLink>
				</li>
				<li className="nav-item mr-4">
					<NavLink className="nav-link" to="/jobs">
						Jobs
					</NavLink>
				</li>
				<li className="nav-item mr-4">
					<NavLink className="nav-link" to="/profile">
						Profile
					</NavLink>
				</li>
				<li className="nav-item mr-4">
					<NavLink className="nav-link" to="/login">
						Login
					</NavLink>
				</li>
				<li className="nav-item mr-4">
					<NavLink className="nav-link" to="/signup">
						Signup
					</NavLink>
				</li>
				<li className="nav-item mr-4">
					<NavLink className="nav-link" to="/logout">
						Logout
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
