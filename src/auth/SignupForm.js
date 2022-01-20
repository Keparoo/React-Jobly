import React, { useState } from 'react';
import useForm from '../hooks/useForm';
import { useHistory } from 'react-router-dom';
// import './SignupForm.css';
import Alert from '../common/Alert';

/* Signup Form

  Renders form and uses useForm hook to maintain state
  On submit: calls signup function prop and redirects to /companies

  Routes call SignupForm, SignupForm calls Alert, useForm hook
  Routed as /signup
*/

const SignupForm = ({ signup }) => {
	const history = useHistory();

	// useForm custom hook manages state, handleChange and resetForm
	// initialState/resetState is passed in to useForm as prop
	const [ formData, handleChange, resetForm ] = useForm({
		username: '',
		password: '',
		firstName: '',
		lastName: '',
		email: ''
	});
	const [ formErrors, setFormErrors ] = useState([]);

	console.debug(
		'SignupForm',
		'signup=',
		typeof signup,
		'formData=',
		formData,
		'formErrors=',
		formErrors
	);

	// Calls signup function prop, if successful redirects to /companies
	const handleSubmit = async (e) => {
		e.preventDefault();
		let result = await signup(formData);
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
				<h2 className="mb-3">Sign up!</h2>
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
									value={formData.password}
									onChange={handleChange}
								/>
							</div>
							<div className="form-group">
								<label className="float-left">First Name</label>
								<input
									className="form-control"
									type="text"
									name="firstName"
									value={formData.firstName}
									onChange={handleChange}
								/>
							</div>
							<div className="form-group">
								<label className="float-left">Last Name</label>
								<input
									className="form-control"
									type="text"
									name="lastName"
									value={formData.lastName}
									onChange={handleChange}
								/>
							</div>
							<div className="form-group">
								<label className="float-left">Email</label>
								<input
									className="form-control"
									type="email"
									name="email"
									value={formData.email}
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

export default SignupForm;
