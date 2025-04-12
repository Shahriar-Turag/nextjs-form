'use client';

import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		const root = window.document.documentElement;
		if (isDark) {
			root.classList.add('dark');
		} else {
			root.classList.remove('dark');
		}
	}, [isDark]);

	return (
		<button
			onClick={() => setIsDark(!isDark)}
			className='fixed top-4 right-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded shadow'
		>
			{isDark ? 'Light Mode' : 'Dark Mode'}
		</button>
	);
}
