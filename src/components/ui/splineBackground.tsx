'use client';

import Spline from '@splinetool/react-spline';
import { PuffLoader } from 'react-spinners';
import { useState } from 'react';

export default function SplineAnimatedBackground() {
	const [isLoaded, setIsLoaded] = useState(false);
	const handleImageLoaded = () => {
		setIsLoaded(true);
	};
	return (
		<>
			<Spline
				scene='https://prod.spline.design/vEByxlHa0a4Jvxsi/scene.splinecode'
				onLoad={handleImageLoaded}
				className={`${
					isLoaded ? 'animate-opacityIn' : 'hidden'
				} absolute left-0 top-0  bottom-0 right-0`}
			/>
			{!isLoaded ? (
				<PuffLoader
					color='#C4FE01'
					className='absolute  left-1/2 top-1/2 -translate-1/2'
				/>
			) : null}
		</>
	);
}
