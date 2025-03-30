/* eslint-disable @next/next/no-img-element */
'use client';
import ScrollCarousel from 'scroll-carousel-react';

export default function ScrollableBrandCollabeStrip() {
	return (
		<ScrollCarousel
			autoplay
			autoplaySpeed={8}
			speed={7}
			className='bg-[#c5c5c5] '
			margin={100}
			onReady={() => {}}
		>
			{[
				'https://pub-2a77ad7abc1d4b5fb9dc7e3bff7b2422.r2.dev/BW/AVON.png',
				'https://pub-2a77ad7abc1d4b5fb9dc7e3bff7b2422.r2.dev/BW/EMAAR.png',
				'https://pub-2a77ad7abc1d4b5fb9dc7e3bff7b2422.r2.dev/BW/KAIZEN.png',
				'https://pub-2a77ad7abc1d4b5fb9dc7e3bff7b2422.r2.dev/BW/KORRAI.png',
				'https://pub-2a77ad7abc1d4b5fb9dc7e3bff7b2422.r2.dev/BW/PEPSI.png',
				'https://pub-2a77ad7abc1d4b5fb9dc7e3bff7b2422.r2.dev/BW/TRUEVOGUE.png',
				'https://pub-2a77ad7abc1d4b5fb9dc7e3bff7b2422.r2.dev/BW/VANR.png',
			].map((item, index) => (
				<div key={index} className=' w-24 h-20 flex items-center  '>
					<img src={item} alt='' className='	w-24' />
				</div>
			))}
		</ScrollCarousel>
	);
}
