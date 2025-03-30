import React from 'react';
import H1 from '@/components/ui/header1';
import LazyBlurImage from './lazyImageBlur';
interface ProductProspectProps {
	header: string;
	subheader: string;
	image: string;
	index: number;
}
export default function ProductProspect(props: ProductProspectProps) {
	return (
		<div className='flex flex-col gap-16 '>
			<div
				className={`flex flex-col justify-between    gap-8 ${props.index / 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse '}`}
			>
				<div className='lg:w-[47%] w-full  text-center lg:text-left md:order-2 '>
					<H1 text={props.header} />
					<p className='text-[.75rem] font-sfpro text-center lg:text-left'>
						{props.subheader}
					</p>
				</div>
				<div className='lg:w-[47%] w-full rounded-xl overflow-hidden h-[18rem] lg:h-[20rem]  '>
					<LazyBlurImage src={props.image} alt='' />
				</div>
			</div>
		</div>
	);
}
