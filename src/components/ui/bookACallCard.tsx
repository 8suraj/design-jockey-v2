import Button from '@/components/ui/button';
import Link from 'next/link';

export default function BookACallCard() {
	return (
		<div className='m6 flex flex-col lg:flex-row  bg-black3 rounded-2xl  h-full w-full p-4 pt-8   lg:py-8  lg:px-8 md:gap-0 gap-4  justify-between items-center lg:items-start'>
			<div className='flex flex-col  gap-4 '>
				<h1 className='text-xl md:text-3xl text-center lg:text-start  lg:whitespace-nowrap'>
					Book a call
				</h1>
				<div className=' text-[.75rem]  font-sfpro text-center lg:text-start '>
					Learn more about how DesignJockey works and how it benefits you.
				</div>
			</div>

			<div className='membershipv-wb  w-full  lg:w-fit'>
				<Link
					href='https://calendly.com/info-designjockey/45min'
					target='_blank'
				>
					<Button
						text='Book a call'
						className='bg-black btn-base membershipv-wb  w-full lg:w-fit'
					/>
				</Link>
			</div>
		</div>
	);
}
