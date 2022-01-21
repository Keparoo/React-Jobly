import React, { useState, useContext } from 'react';
import Alert from '../common/Alert';
import JoblyApi from '../api/api';
import UserContext from '../auth/UserContext';
// import './ProfileForm.css';

/* User Profile editigin form

    Displays the values of the current user profile in a form
    Submitting the form calls the API to update data and triggers
    reload of info throughout the site

    If confirmed successful, an alert indicates success

    Routed as /profile
    Routes call ProfileForm, ProfileForm calls Alert
*/

const ProfileForm = () => {
	const { currentUser, setCurrentUser } = useContext(UserContext);
	const [ formData, setFormData ] = useState({
		firstName: currentUser.firstName,
		lastName: currentUser.lastName,
		email: currentUser.email,
		username: currentUser.username,
		password: ''
	});

	const [ formErrors, setFormErrors ] = useState([]);
	const [ saveConfirmed, setSaveConfirmed ] = useState(false);

	console.debug(
		'ProfileForm',
		'currentUser=',
		currentUser,
		'formData=',
		formData,
		'formErrors=',
		formErrors,
		'saveConfirmed=',
		saveConfirmed
	);

	// On submit, attempt to save to API and report any errors
	// If success: clear previous error messages and password
	//    show save confirmed message
	//    set current user info throughout the site

	const handleSubmit = async (e) => {
		e.preventDefault();

		let profileData = {
			firstName: formData.firstName,
			lastName: formData.lastName,
			email: formData.email,
			password: formData.password
		};

		let username = formData.username;
		let updatedUser;

		try {
			updatedUser = await JoblyApi.updateProfile(username, profileData);
		} catch (errors) {
			setFormErrors(errors);
			return;
		}

		setFormData((form) => ({ ...form, password: '' }));
		setFormErrors([]);
		setSaveConfirmed(true);

		// Trigger reloadin of user info throughout site
		setCurrentUser(updatedUser);
	};

	// Handle state change of form fields
	const handleChange = (evt) => {
		const { name, value } = evt.target;
		setFormData((f) => ({
			...f,
			[name]: value
		}));
		setFormErrors([]);
	};

	return (
		<div className="SignupForm">
			<div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
				<h2 className="mb-3">User Profile</h2>
				<div className="card">
					<div className="card-body">
						<form onSubmit={handleSubmit}>
							<div className="form-group">
								<label className="float-left">Username</label>
								<p className="form-control-plaintest">{formData.username}</p>
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
							<div className="form-group">
								<label className="float-left">
									Confirm password to make changes:
								</label>
								<input
									className="form-control"
									type="password"
									name="password"
									value={formData.password}
									onChange={handleChange}
								/>
							</div>

							{formErrors.length ? (
								<Alert type="danger" messages={formErrors} />
							) : null}

							{saveConfirmed ? (
								<Alert type="success" messages={[ 'Updated successfully.' ]} />
							) : null}

							<button
								type="submit"
								className="btn btn-lg btn-primary float-right"
							>
								Save Changes
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileForm;
