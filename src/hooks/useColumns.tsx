'use client';

import { useEffect, useState } from 'react';

export const useColumns = () => {
	const [columns, setColumns] = useState(2);

	useEffect(() => {
		const updateCols = () => {
			const width = window.innerWidth;
			if (width > 1024) setColumns(5);
			else if (width > 630) setColumns(3);
			else setColumns(2);
		};

		updateCols();
		window.addEventListener('resize', updateCols);
		return () => window.removeEventListener('resize', updateCols);
	}, []);

	return columns;
};
