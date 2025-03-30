import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { PuffLoader } from 'react-spinners';

export default function HeroFullWidthImage({
	image,
}: {
	image: string | StaticImageData;
}) {
	const [isLoaded, setIsLoaded] = useState(false);
	const handleImageLoaded = () => {
		setIsLoaded(true);
	};
	return (
		<div className='h-[100vh]  w-full relative  '>
			<Image
				src={image}
				alt='product show case banner'
				onLoad={handleImageLoaded}
				className={`object-cover  ${
					isLoaded ? 'animate-opacityIn' : ''
				} absolute left-0 top-0  bottom-0 right-0 h-[100vh]`}
			/>
			{!isLoaded ? (
				<PuffLoader
					color='#C4FE01'
					className='absolute  left-1/2 top-1/2 -translate-1/2'
				/>
			) : null}
		</div>
	);
}
