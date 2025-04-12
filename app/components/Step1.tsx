'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useDispatch } from 'react-redux';
import { setFormData, setStep } from '../../redux/formSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Stepper from './Stepper';

const schema = z.object({
	fullName: z.string().min(1, 'Full Name is required'),
	email: z.string().email('Invalid email'),
	phone: z
		.string()
		.min(10, 'Phone number must be at least 10 digits')
		.regex(/^\d+$/, 'Only digits allowed'),
});

type FormData = z.infer<typeof schema>;

export default function Step1() {
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
	console.log(errors, 'errors');

	const onSubmit = (data: FormData) => {
		dispatch(setFormData(data));
		dispatch(setStep(2));
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='max-w-md mx-auto space-y-6'
		>
			<Stepper />

			<div>
				<label className='block mb-1 font-medium'>Full Name</label>
				<input
					type='text'
					{...register('fullName')}
					className='w-full px-4 py-2 border rounded'
				/>
				{errors.fullName && (
					<p className='text-red-600 text-sm mt-1'>
						{errors.fullName.message}
					</p>
				)}
			</div>

			<div>
				<label className='block mb-1 font-medium'>Email</label>
				<input
					type='email'
					{...register('email')}
					className='w-full px-4 py-2 border rounded'
				/>
				{errors.email && (
					<p className='text-red-600 text-sm mt-1'>
						{errors.email.message}
					</p>
				)}
			</div>

			<div>
				<label className='block mb-1 font-medium'>Phone Number</label>
				<input
					type='text'
					{...register('phone')}
					className='w-full px-4 py-2 border rounded'
				/>
				{errors.phone && (
					<p className='text-red-600 text-sm mt-1'>
						{errors.phone.message}
					</p>
				)}
			</div>

			<button
				type='submit'
				className='bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded'
			>
				Next
			</button>
		</form>
	);
}
