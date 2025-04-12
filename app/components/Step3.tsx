'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useDispatch } from 'react-redux';
import { setFormData, setStep } from '../../redux/formSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Stepper from './Stepper';

const schema = z
	.object({
		username: z.string().min(4, 'Username must be at least 4 characters'),
		password: z.string().min(6, 'Password must be at least 6 characters'),
		confirmPassword: z.string().min(1, 'Confirm Password is required'),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Passwords do not match',
		path: ['confirmPassword'],
	});

type FormData = z.infer<typeof schema>;

export default function Step3() {
	const dispatch = useDispatch();
	const { formData } = useSelector((state: RootState) => state.form);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(schema),
		defaultValues: {
			...formData,
		},
	});

	const onSubmit = (data: FormData) => {
		dispatch(setFormData(data));
		dispatch(setStep(4)); //summery
	};

	const goBack = () => {
		dispatch(setStep(2)); //address
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='max-w-md mx-auto space-y-6'
		>
			<Stepper />

			<div>
				<label className='block mb-1 font-medium'>Username</label>
				<input
					type='text'
					{...register('username')}
					className='w-full px-4 py-2 border rounded'
				/>
				{errors.username && (
					<p className='text-red-600 text-sm mt-1'>
						{errors.username.message}
					</p>
				)}
			</div>

			<div>
				<label className='block mb-1 font-medium'>Password</label>
				<input
					type='password'
					{...register('password')}
					className='w-full px-4 py-2 border rounded'
				/>
				{errors.password && (
					<p className='text-red-600 text-sm mt-1'>
						{errors.password.message}
					</p>
				)}
			</div>

			<div>
				<label className='block mb-1 font-medium'>
					Confirm Password
				</label>
				<input
					type='password'
					{...register('confirmPassword')}
					className='w-full px-4 py-2 border rounded'
				/>
				{errors.confirmPassword && (
					<p className='text-red-600 text-sm mt-1'>
						{errors.confirmPassword.message}
					</p>
				)}
			</div>

			<div className='flex justify-between'>
				<button
					type='button'
					onClick={goBack}
					className='bg-gray-400 hover:bg-gray-500 text-white font-medium py-2 px-6 rounded'
				>
					Previous
				</button>
				<button
					type='submit'
					className='bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded'
				>
					Next
				</button>
			</div>
		</form>
	);
}
