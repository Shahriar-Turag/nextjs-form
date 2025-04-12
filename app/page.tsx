'use client';

import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Summary from './components/Summery';
import DarkModeToggle from './components/DarkModeToggle';

export default function Home() {
	const step = useSelector((state: RootState) => state.form.step);

	return (
		<div className='min-h-screen flex items-center justify-center px-4'>
			<DarkModeToggle />
			{step === 1 && <Step1 />}
			{step === 2 && <Step2 />}
			{step === 3 && <Step3 />}
			{step === 4 && <Summary />}
		</div>
	);
}
