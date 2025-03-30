'use client';
import Button from './button';
import Link from 'next/link';
import H1 from './header1';
import { ReactNode } from 'react';

interface SectionWrapperProp {
	children: ReactNode;
	header: string;
	subHeader: string;
	buttonLabel: string;
	buttonUrl: string;
	id: string;
}
export default function SectionWrapper(props: SectionWrapperProp) {
	return (
		<section className='w-[95%] md:w-[85%] mx-auto ' id={props.id}>
			<div className=' flex flex-col gap-12   '>
				<div className='flex w-full  '>
					<div className='lg:w-8/12 m1:w-full '>
						<H1 text={props.header} />

						<h4 className='text-[1rem] font-sfpro pt-2 text-center md:text-left'>
							{props.subHeader}
						</h4>
					</div>
					<Link
						href={props.buttonUrl}
						className='lg:flex hidden w-5/12 h-fit justify-end'
					>
						{props.buttonLabel && (
							<Button
								text={props.buttonLabel}
								className='bg-secondary btn-base'
								onClick={() => {}}
							/>
						)}
					</Link>
				</div>
				{props.children}
				<Link
					href={props.buttonUrl}
					className='w-full flex justify-center lg:hidden '
				>
					<Button
						text={props.buttonLabel}
						className='bg-secondary btn-base w-full mx-12 sm:w-[65vw]'
						onClick={() => {}}
					/>
				</Link>
			</div>
		</section>
	);
}
