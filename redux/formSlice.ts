import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
	step: 1,
	formData: {
		fullName: '',
		email: '',
		phone: '',
		street: '',
		city: '',
		zip: '',
		username: '',
		password: '',
	},
};

export const formSlice = createSlice({
	name: 'form',
	initialState,
	reducers: {
		setStep: (state, action: PayloadAction<number>) => {
			state.step = action.payload;
		},
		setFormData: (state, action: PayloadAction<any>) => {
			state.formData = { ...state.formData, ...action.payload };
		},
		resetForm: () => initialState,
	},
});

export const { setStep, setFormData, resetForm } = formSlice.actions;
export default formSlice.reducer;
