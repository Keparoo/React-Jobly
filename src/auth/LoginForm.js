import React, { useState } from 'react';
import useForm from '../hooks/useForm';
import { useHistory } from 'react-router-dom';
// import './LoginForm.css';
import Alert from '../common/Alert';

const LoginForm = ({ login }) => {
	const history = useHistory();
	const [ formData, handleChange, resetForm ] = useForm({
		username: '',
		password: ''
	});
	const [ formErrors, setFormErrors ] = useState([]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		let result = await login(formData);
		// let result = await login({ username: 'testuser', password: 'password' });

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
									// value="testuser"
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
									// value="password"
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
