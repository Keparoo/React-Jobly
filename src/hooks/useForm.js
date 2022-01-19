import { useState } from 'react';

const useForm = (initialState) => {
	const [ formData, setFormData ] = useState(initialState);

	const handleChange = (e) => {
		// e.persist();
		setFormData((formData) => ({
			...formData,
			[e.target.name]: e.target.value
		}));
	};

	const resetFormData = () => {
		setFormData(initialState);
	};
	return [ formData, handleChange, resetFormData ];
};

export default useForm;
