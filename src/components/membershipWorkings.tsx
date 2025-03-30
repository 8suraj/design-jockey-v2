'use client';
import m1 from '@/assets/svgs/membershipworks/m1.svg';
import m2 from '@/assets/svgs/membershipworks/m2.svg';
import m3 from '@/assets/svgs/membershipworks/m3.svg';
import Image from 'next/image';
import SectionWrapper from './ui/sectionWrapper';

const data = [
	{
		imgae: m1,
		content: 'Sign up, subscribe, and enjoy unlimited request access',
	},
	{
		imgae: m2,
		content:
			'Get your designs within the set timeline for your requests, Monday to Friday',
	},
	{
		imgae: m3,
		content: "Enjoy unlimited revisions until you're completely satisfied",
	},
];

export default function MembershipWorkings() {
	return (
		<SectionWrapper
			header='how membership works'
			subHeader="Perks so good you'll never need to go anywhere else for
								your design. Seriously."
			buttonLabel='See Plans'
			buttonUrl='/#plans'
		>
			<div className='md:flex flex-col gap-5 flex-wrap w-full sm:flex-row justify-center sm:gap-1 lg:gap-2 	hidden'>
				{data.map((e, i) => (
					<div
						className='flex flex-col  gap-2   w-full sm:w-[49%] md:w-[49%]  lg:w-[32.5%] '
						key={i}
					>
						<div className='w-full flex items-center justify-center   '>
							<Image src={e.imgae} alt='' className='w-full h-full' />
						</div>

						<p className='text-center font-sfpro text-[.75rem]  lg:px-12 2xl:px-16 py-2'>
							{e.content}
						</p>
					</div>
				))}
			</div>
			<div className='md:hidden   w-full snap-x snap-mandatory '>
				<div className='flex flex-row  gap-2 overflow-x-scroll snap-x snap-mandatory   '>
					{data.map((e, index) => (
						<div className='w-[65vw] flex-shrink-0  ' key={index}>
							<div key={index} className='flex flex-col gap-2    lg:px-1 '>
								<div className='rounded-full bg-color-primary flex items-center justify-center h-20  sm:h-[7.5rem] xl:h-[8.5rem] '>
									<Image src={e.imgae} alt='' className='w-full h-full' />
								</div>
								<p className='text-center font-sfpro text-[.65rem]  lg:px-12 2xl:px-16 py-2'>
									{e.content}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</SectionWrapper>
	);
}
