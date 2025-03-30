'use client';
import H1 from '@/components/ui/header1';
import branding from '@/assets/product/branding.png';
import Button from '@/components/ui/button';
import HeroFullWidthImage from '@/components/ui/herFullWidthImage';
import ProductProspect from '@/components/ui/productProspect';
import tick from '@/assets/svgs/tick.svg';
import Image from 'next/image';
import staticeContent from '@/assets/staticContent.json';
export default function ProductPage() {
	return (
		<>
			<div className=' h-full  w-full relative '>
				<HeroFullWidthImage image={branding} />

				<div className='w-[95%] md:w-[85%] absolute top-1/2 left-1/2 -translate-1/2  h-[100vh]  '>
					<div className=' mt-5 w-full lg:w-fit  absolute  -translate-x-1/2 lg:-translate-x-[100%]  -translate-y-1/2 top-[60%] left-[50%]  lg:left-[100%]   m2:top-[55%] m3:top-[50%] lg:top-[40%]  lg:-translate-y-1/4  '>
						<div className='   bg-black2 backdrop-blur-xl rounded-xl overflow-hidden '>
							<div className='flex flex-col gap-5 p-6'>
								<H1 text='Identity' />
								<div className='flex flex-col  items-start'>
									<span className='lg:text-base	 xl:text-lg'>$400</span>
									<span className='font-sfpro text-[.6rem] leading-5 '>
										Complete guidelines - 15 - 20 Days
									</span>
								</div>
								<div className='flex flex-col gap-2'>
									{staticeContent.serviceItems?.map((e) => (
										<div
											className='flex font-sfpro text-sm items-center gap-4 '
											key={e}
										>
											<span>
												<Image src={tick} alt='' />
											</span>
											<span>{e}</span>
										</div>
									))}
								</div>
								<Button
									text='Buy now'
									className='bg-secondary btn-base  w-full'
									onClick={() => {}}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section className='w-[95%] md:w-[85%] mx-auto '>
				<div className=' flex flex-col gap-8  py-18'>
					{staticeContent.productProspect.map((item, index) => (
						<ProductProspect
							key={index}
							header={item.header}
							subheader={item.subheader}
							image={item.image}
							index={index}
						/>
					))}
				</div>
			</section>
		</>
	);
}
