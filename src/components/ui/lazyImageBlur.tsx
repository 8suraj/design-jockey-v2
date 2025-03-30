'use client';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

type Props = {
	src: string;
	alt: string;
};

const LazyBlurImage = ({ src, alt }: Props) => (
	<LazyLoadImage
		src={src}
		alt={alt}
		effect='blur'
		placeholderSrc='https://pub-2a77ad7abc1d4b5fb9dc7e3bff7b2422.r2.dev/328poster-min-min.png'
		className='gallery__img '
		width='100%'
		style={{ objectFit: 'cover' }}
	/>
);

export default LazyBlurImage;
