// import { HashLink } from 'react-router-hash-link';
import m1 from '@/assets/svgs/membership/1.svg';
import m2 from '@/assets/svgs/membership/2.svg';
import m3 from '@/assets/svgs/membership/3.svg';
import m4 from '@/assets/svgs/membership/4.svg';
import m5 from '@/assets/svgs/membership/5.svg';
import m6 from '@/assets/svgs/membership/6.svg';
import Image from 'next/image';
import SectionWrapper from './ui/sectionWrapper';
const data1 = [
	{
		imgae: m1,
		header: 'Unlimited Requests',
		content:
			'Submit as many design requests as you like without any restrictions or extra charges. ',
	},
	{
		imgae: m2,
		header: 'Fixed Monthly Rate',
		content:
			'Keep your design expenses predictable. No surprises, just reliable fixed monthly rate. ',
	},
	{
		imgae: m3,
		header: 'Quick Turnaround',
		content:
			'Fast, efficient design solutions tailored to your needs. Get quick results without the wait. ',
	},
];
const data2 = [
	{
		imgae: m4,
		header: 'One Dashboard',
		content:
			'Stay on top of your tasks with ease using our all-in-one dashboard.',
	},
	{
		imgae: m5,
		header: 'Top Tier Quality',
		content:
			'Guaranteed top-notch quality every step of the way for excellent results.',
	},
	{
		imgae: m6,
		header: 'Tailored Service',
		content: 'Experience personalized service specifically designed for you.',
	},
];
export default function MembershipBenefits() {
	return (
		<>
			<SectionWrapper
				header='Membership benefits'
				subHeader="Benefits so compelling, you'll never want to look elsewhere for your design needs. No kidding."
				buttonLabel='See Plans'
				buttonUrl='/#plans'
			>
				<div className='flex flex-col gap-8 flex-wrap w-full sm:flex-row justify-center items-start sm:gap-16 md:gap-2 lg:gap-2 '>
					{data1.map((e, i) => (
						<div
							key={i}
							className='flex flex-col justify-center gap-8  md:gap-6    w-full  md:w-[32%]  lg:w-[32.5%]'
						>
							<div className=' w-full    h-fit   '>
								<Image src={e.imgae} alt='' className='h-full  w-full' />
							</div>
							<div>
								<h3 className='text-center text-sm '>{e.header}</h3>
								<p className='text-center font-sfpro text-[.75rem]  '>
									{e.content}
								</p>
							</div>
						</div>
					))}
				</div>
				<div className='flex flex-col gap-8 flex-wrap w-full sm:flex-row justify-center sm:gap-16 md:gap-2 lg:gap-2 items-start 	'>
					{data2.map((e, i) => (
						<div
							key={i}
							className='flex flex-col justify-center gap-8  md:gap-6    w-full  md:w-[32%]  lg:w-[32.5%] '
						>
							<div className='w-full    h-fit'>
								<Image src={e.imgae} alt='' className=' w-full ' />
							</div>
							<div>
								<h3 className='text-center text-sm pb-2 md:pb-4'>{e.header}</h3>
								<p className='text-center font-sfpro text-[.75rem]  '>
									{e.content}
								</p>
							</div>
						</div>
					))}
				</div>
			</SectionWrapper>
		</>
	);
}
