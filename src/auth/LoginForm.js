import React, { useState } from 'react';
import useForm from '../hooks/useForm';
import { useHistory } from 'react-router-dom';
// import './LoginForm.css';
import Alert from '../common/Alert';

/* Login Form

  Displays login form uses useForm hook to manage form state
  On submit: calls login function prop, redirects to /companies route

  Routes calls LoginForm, LoginForm calls Alert
  Routed as /login
*/

const LoginForm = ({ login }) => {
	const history = useHistory();
	// custom hook handles state, handleChange and resetForm
	// useForm takes the form initial/reset state as a prop
	const [ formData, handleChange, resetForm ] = useForm({
		username: '',
		password: ''
	});
	const [ formErrors, setFormErrors ] = useState([]);

	console.debug(
		'LoginForm',
		'login=',
		typeof login,
		'formData=',
		formData,
		'formErrors',
		formErrors
	);

	// Calls login function prop, if success redirect to /companies
	const handleSubmit = async (e) => {
		e.preventDefault();
		let result = await login(formData);

		if (result.success) {
			history.push('/companies');
		} else {
			resetForm();
			setFormErrors(result.errors);
		}
	};

	return (
		<div className="SignupForm">
			<div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
				<h2 className="mb-3">Login</h2>
				<div className="card">
					<div className="card-body">
						<form onSubmit={handleSubmit}>
							<div className="form-group">
								<label className="float-left">Username</label>
								<input
									autoFocus
									className="form-control"
									type="text"
									name="username"
									// hardcode value for dev
									// value=""
									value={formData.username}
									onChange={handleChange}
								/>
							</div>
							<div className="form-group">
								<label className="float-left">Password</label>
								<input
									className="form-control"
									type="password"
									name="password"
									// hardcode value for dev
									// value=""
									value={formData.password}
									onChange={handleChange}
								/>
							</div>

							{formErrors.length ? (
								<Alert type="danger" messages={formErrors} />
							) : null}

							<button
								type="submit"
								className="btn btn-lg btn-primary float-right"
							>
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginForm;
