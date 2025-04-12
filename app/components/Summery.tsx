'use client';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { resetForm, setStep } from '../../redux/formSlice';
import { useSubmitFormMutation } from '../../redux/formApi';
import { useEffect, useState } from 'react';

export default function Summary() {
	const { formData } = useSelector((state: RootState) => state.form);
	const dispatch = useDispatch();
	const [submitForm, { isLoading, isSuccess, isError }] =
		useSubmitFormMutation();

	const [countdown, setCountdown] = useState(3);

	const handleSubmit = async () => {
		try {
			console.log('Submitted Data:', formData);
			await submitForm(formData).unwrap();
		} catch (err) {
			console.error('Submission failed:', err);
		}
	};

	const goBack = () => {
		dispatch(setStep(3));
	};

	// Start countdown on success
	useEffect(() => {
		if (isSuccess) {
			const timer = setInterval(() => {
				setCountdown((prev) => prev - 1);
			}, 1000);
			return () => clearInterval(timer);
		}
	}, [isSuccess]);

	// Redirect when countdown reaches 0
	useEffect(() => {
		if (countdown === 0) {
			dispatch(resetForm());
			dispatch(setStep(1));
		}
	}, [countdown, dispatch]);

	return (
		<div className='max-w-md mx-auto space-y-6'>
			<h2 className='text-2xl font-semibold'>Step 4: Summary</h2>

			<div className='bg-gray-100 dark:bg-gray-800 p-4 rounded'>
				{Object.entries(formData).map(([key, value]) => (
					<p key={key}>
						<span className='font-medium capitalize'>
							{key.replace(/([A-Z])/g, ' $1')}:
						</span>{' '}
						{key.toLowerCase().includes('password')
							? '••••••'
							: value}
					</p>
				))}
			</div>

			<div className='flex justify-between'>
				<button
					onClick={goBack}
					className='bg-gray-400 hover:bg-gray-500 text-white font-medium py-2 px-6 rounded'
				>
					Previous
				</button>
				<button
					onClick={handleSubmit}
					disabled={isLoading}
					className='bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded'
				>
					{isLoading ? 'Submitting...' : 'Submit'}
				</button>
			</div>

			{isSuccess && (
				<p className='text-green-600 mt-4 text-center font-medium'>
					✅ Data submitted successfully. Redirecting in {countdown}
					...
				</p>
			)}

			{isError && (
				<p className='text-red-600 mt-4 text-center font-medium'>
					❌ Something went wrong. Please try again.
				</p>
			)}
		</div>
	);
}
