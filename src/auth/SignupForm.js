import React from 'react';
import useForm from '../hooks/useForm';
import { useHistory } from 'react-router-dom';
// import './SignupForm.css';

const SignupForm = ({ signup }) => {
	const history = useHistory();
	const [ formData, handleChange, resetForm ] = useForm({
		username: '',
		password: '',
		firstName: '',
		lastName: '',
		email: ''
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		let result = await signup(formData);
		if (result.success) {
			history.pushState('/companies');
		} else {
			console.log(result.errors);
		}
		resetForm();
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
						</form>
						<button
							type="submit"
							className="btn btn-lg btn-primary float-right"
						>
							Submit
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignupForm;
