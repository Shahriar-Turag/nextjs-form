'use client';

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const steps = ['Personal Info', 'Address', 'Account', 'Summary'];

export default function Stepper() {
	const currentStep = useSelector((state: RootState) => state.form.step);

	return (
		<div className='flex justify-center mb-8'>
			<div className='flex items-center space-x-1'>
				{steps.map((label, index) => {
					const stepNumber = index + 1;
					const isActive = stepNumber === currentStep;
					const isCompleted = stepNumber < currentStep;

					const circleClass = isActive
						? 'bg-blue-600 text-white'
						: isCompleted
						? 'bg-green-500 text-white'
						: 'bg-gray-300 text-gray-700';

					return (
						<div
							key={label}
							className='flex items-center space-x-2'
						>
							<div
								className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold ${circleClass}`}
							>
								{stepNumber}
							</div>
							<span className='text-sm whitespace-nowrap hidden sm:inline'>
								{label}
							</span>
							{stepNumber < steps.length && (
								<div className='w-6 h-1 bg-gray-300 mx-2' />
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}
