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
	street: z.string().min(1, 'Street Address is required'),
	city: z.string().min(1, 'City is required'),
	zip: z
		.string()
		.min(5, 'Zip Code must be at least 5 digits')
		.regex(/^\d+$/, 'Only numbers allowed'),
});

type FormData = z.infer<typeof schema>;

export default function Step2() {
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
		dispatch(setStep(3));
	};

	const goBack = () => {
		dispatch(setStep(1));
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='max-w-md mx-auto space-y-6'
		>
			<Stepper />

			<div>
				<label className='block mb-1 font-medium'>Street Address</label>
				<input
					type='text'
					{...register('street')}
					className='w-full px-4 py-2 border rounded'
				/>
				{errors.street && (
					<p className='text-red-600 text-sm mt-1'>
						{errors.street.message}
					</p>
				)}
			</div>

			<div>
				<label className='block mb-1 font-medium'>City</label>
				<input
					type='text'
					{...register('city')}
					className='w-full px-4 py-2 border rounded'
				/>
				{errors.city && (
					<p className='text-red-600 text-sm mt-1'>
						{errors.city.message}
					</p>
				)}
			</div>

			<div>
				<label className='block mb-1 font-medium'>Zip Code</label>
				<input
					type='text'
					{...register('zip')}
					className='w-full px-4 py-2 border rounded'
				/>
				{errors.zip && (
					<p className='text-red-600 text-sm mt-1'>
						{errors.zip.message}
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
