/* eslint-disable @next/next/no-img-element */
'use client';
import { useState } from 'react';
import H1 from './ui/header1';
import staticContent from '@/assets/staticContent.json';

export default function Testimonials() {
	const [activeTestimonial, setActiveTestimonial] = useState(
		staticContent.testimonial[0]
	);

	return (
		<section className='w-[95%] md:w-[85%] mx-auto  '>
			<div className='flex flex-col gap-2  '>
				<div className='w-full h-full  m-auto bg-secondary rounded-lg flex flex-col md:flex-row   md:justify-around   p-4 md:p-10 lg:p-10 '>
					<div className='text-center md:text-left w-full md:w-[48%] lg:w-[50%] xl:w-[48%] lg:text-left '>
						<H1 text="Here's what our friends have to say." />
					</div>
					<div className='w-full md:w-[45%] md:px-6 lg:px-8 xl:px-12 px-3 flex flex-col gap-10 py-1  items-center md:items-start '>
						<p className=' text-center  md:text-left   text-[.75rem] font-sfpro'>
							DesignJockey is a service that can provide you with amazing
							designs for a fixed monthly fee. It eliminates the need for
							freelancers and agencies, so you can get all the design work you
							need in one place.
						</p>
						<div className='relative   h-12 w-[10.7rem] lg:w-[12.5rem]'>
							<img
								src={staticContent.testimonial[3].img}
								alt=''
								className='absolute w-[3.2rem] lg:w-[3.8rem] left-[7.5rem] lg:left-[8.7rem] cursor-pointer hover:scale-110 hover:z-20 rounded-full'
								onClick={() =>
									setActiveTestimonial(staticContent.testimonial[3])
								}
							/>

							<img
								src={staticContent.testimonial[2].img}
								alt=''
								className='absolute w-[3.2rem] lg:w-[3.8rem] left-[5rem] lg:left-[5.8rem] cursor-pointer hover:scale-110 hover:z-20 rounded-full'
								onClick={() =>
									setActiveTestimonial(staticContent.testimonial[2])
								}
							/>
							<img
								src={staticContent.testimonial[1].img}
								alt=''
								className='absolute w-[3.2rem] lg:w-[3.8rem] left-[2.5rem] lg:left-[2.9rem] cursor-pointer hover:scale-110 hover:z-20 rounded-full'
								onClick={() =>
									setActiveTestimonial(staticContent.testimonial[1])
								}
							/>
							<img
								src={staticContent.testimonial[0].img}
								alt=''
								className='absolute w-[3.2rem] lg:w-[3.8rem]  cursor-pointer hover:scale-110 hover:z-20 rounded-full '
								onClick={() =>
									setActiveTestimonial(staticContent.testimonial[0])
								}
							/>
						</div>
					</div>
				</div>
				<div className='flex lg:flex-row flex-col gap-2'>
					<div className='bg-[#191919] rounded-lg p-6  flex flex-col gap-6 lg:w-[60%]'>
						<div className='flex relative pl-4 lg:pl-8'>
							<h1 className='text-[2rem] lg:text-[2.5rem] text-primary absolute -left-2 -top-4'>
								&quot;
							</h1>
							<h1 className='text-primary lg:text-2xl text-base  capitalize '>
								{activeTestimonial.header ||
									'Design is everything, and these guys have nailed it.'}
							</h1>
						</div>
						<div className='flex gap-4 pl-4 lg:pl-8'>
							<div>
								<img
									src={
										activeTestimonial.img || staticContent.testimonial[0].img
									}
									alt=''
									className='rounded-full w-12 h-12 object-cover '
								/>
							</div>
							<div>
								<h1 className='lg:text-base text-sm '>
									{activeTestimonial.name || 'Hrishiraj'}
								</h1>
								<p className='font-sfpro text-grey-light text-[.7rem]'>
									{activeTestimonial.companyName || ''}
								</p>
							</div>
						</div>
					</div>
					<div className='bg-[#191919] text-grey-light rounded-lg p-4 md:p-6 text-sm text-left md:text-left flex flex-col gap-4 lg:w-[40%]'>
						<div>
							<h1 className='text-[.7rem] lg:text-sm leading-6'>
								Skip the meetings
							</h1>
							<p className='font-sfpro text-[.6rem] leading-3'>
								Meetings not your thing? Same here. That&apos;s why you
								won&apos;t find any on our schedule.
							</p>
						</div>
						<div>
							<h1 className='text-[.7rem] lg:text-sm leading-6'>
								One dashboard
							</h1>
							<p className='font-sfpro text-[.6rem] leading-3'>
								Effortless dashboard navigation. View active, queued and
								completed tasks with ease.
							</p>
						</div>
						<div>
							<h1 className='text-[.65rem] lg:text-sm leading-6'>
								Invite team members
							</h1>
							<p className='font-sfpro text-[.6rem] leading-3'>
								Invite as many team members as you need to request and monitor
								progress seamlessly.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
