'use client';

import Link from 'next/link';
import Button from './button';
import H1 from './header1';

export default function CallBookingBanner() {
	return (
		<section className='mx-auto flex  justify-center  absolute left-[50%] top-[25%] m3:top-[25%] lg:top-[50%]  -translate-x-1/2 lg:-translate-y-1/2 w-[85%]'>
			<div className=' w-full h-full md:min-h-[18rem] bg-black2 backdrop-blur-xl rounded-xl  p-6 gap-12 md:gap-4   flex flex-col  items-center  md:justify-between md:items-start  	'>
				<div className='flex justify-between text-[.75rem] font-sfpro w-full  md:hidden'>
					<span>
						Delhi, <br /> India
						<span id='MyClockDisplay'></span>
					</span>
					<span>
						+91 872 396 3206 <br />
						dhruba@designjockey.in
					</span>
				</div>
				<div className='text-center flex flex-col  w-full gap-4 md:hidden  '>
					<H1 text='One Subscription, Limitless Designs' />
					<p className='text-[.75rem] font-sfpro'>
						Get all your design requirements covered with one flat subscription
					</p>
					<Link href={'/#plans'}>
						<Button
							text='Book a call'
							className='bg-secondary btn-base  md:hidden w-full mt-4  '
							onClick={() =>
								window.open('https://calendly.com/info-designjockey/45min')
							}
						/>
					</Link>
				</div>
				<div className='hidden w-full md:flex md:flex-row md:justify-between md:items-start md:gap-x-2 '>
					<H1 text='One Subscription, Limitless Designs' />
					<Link href={'/#plans'}>
						<Button
							text='Book a call'
							className='btn-base bg-secondary  '
							onClick={() =>
								window.open('https://calendly.com/info-designjockey/45min')
							}
						/>
					</Link>
				</div>
				<div className='hidden  text-[.75rem] font-sfpro  w-full md:flex justify-between '>
					<p>
						Get all your design requirements covered with one flat subscription
					</p>
					<span className='hidden lg:block '>
						Delhi, <br /> India{' '}
						{new Date().toLocaleTimeString('en-US', {
							hour: 'numeric',
							minute: 'numeric',
							hour12: true,
						})}
					</span>
					<span>
						+91 872 396 3206 <br />
						dhruba@designjockey.in
					</span>
				</div>
			</div>
		</section>
	);
}
