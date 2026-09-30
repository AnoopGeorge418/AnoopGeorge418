'use client';

import { useEffect } from 'react';

export const DisableBrowserContext = () => {
	useEffect(() => {
		// handling mouse event
		const handleBrowserContextMenu = (e: MouseEvent) => {
			e.preventDefault();
		};
		// adding event listener to disable browser context
		document.addEventListener('contextmenu', handleBrowserContextMenu);
		return () => {
			// removing listener event
			document.removeEventListener(
				'contextmenu',
				handleBrowserContextMenu,
			);
		};
	}, []);
	return null;
};
