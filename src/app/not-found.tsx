import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Button from '@/components/ui/button';
import NavbarPublic from '@/components/ui/navbarPublic';
import Footer from '@/components/ui/footer';

export default function NotFound() {
	return (
		<>
			<NavbarPublic />
			<section className='w-full pt-32 pb-10'>
				<div className=' mx-auto  flex flex-col gap-12 items-center lg:w-5/12 xl:w-[30%] w-9/12'>
					<Image
						src='https://pub-2a77ad7abc1d4b5fb9dc7e3bff7b2422.r2.dev/svgs/404.svg'
						alt=''
						className='w-full'
						width='100'
						height='100'
					/>
					<Link href='/' className='  w-full'>
						<Button
							className='bg-secondary btn-base w-full'
							text='Back to homepage'
						/>
					</Link>
				</div>
			</section>
			<Footer />
		</>
	);
}
