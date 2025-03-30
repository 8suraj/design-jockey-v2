'use client';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/svgs/logo.svg';
import cross from '@/assets/svgs/cross.svg';
import humburger from '@/assets/svgs/humburger.svg';
import { useState, useEffect } from 'react';
import Button from './button';

export default function NavbarPublic() {
	useEffect(() => {
		const clicked = localStorage.getItem('clicked');
		if (clicked != 'services' && clicked != 'plans') {
			setTimeout(() => {
				window.scrollTo({
					top: 0,
					left: 100,
					behavior: 'smooth',
				});
			}, 200);
		}
	}, []);
	const [lastScrollPosition, setLastScrollPosition] = useState(0);
	const [hideNavbar, setHideNavbar] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPosition = window.pageYOffset;

			if (currentScrollPosition > lastScrollPosition && !hideNavbar) {
				setHideNavbar(true);
			} else if (
				currentScrollPosition < lastScrollPosition ||
				currentScrollPosition === 0
			) {
				setHideNavbar(false);
			}
			setLastScrollPosition(currentScrollPosition);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [lastScrollPosition, hideNavbar]);
	return (
		<>
			<div
				className={`${
					hideNavbar ? '-top-[30vh]' : 'top-4'
				} transition fixed left-1/2  -translate-x-1/2    z-[100] w-[95%] md:w-[85%]  `}
			>
				<nav className='w-full flex items-center rounded-xl     bg-black2 backdrop-blur-xl  p-4 lg:p-0  '>
					<div className='flex w-full  justify-between items-center '>
						<Link className='h-full  lg:p-4 cursor-pointer' href='/'>
							<Image src={logo} alt='logo' className='w-8 md:w-10 ' priority />
						</Link>
						<ul className=' text-primary items-center gap-4  hidden lg:flex  text-[.65rem]   md:text-[.75rem]'>
							<Link
								prefetch
								href='/store'
								className='p-3 cursor-pointer'
								onClick={() => {
									localStorage.setItem('clicked', 'store');
								}}
							>
								store
							</Link>
							<Link
								prefetch
								className='p-3 cursor-pointer'
								href='/work'
								onClick={() => {
									localStorage.setItem('clicked', 'work');
								}}
							>
								work
							</Link>
							<Link
								className='p-3 cursor-pointer'
								href={'/#services'}
								onClick={() => {
									localStorage.setItem('clicked', 'services');
								}}
							>
								services
							</Link>
							<Link
								className='p-3 cursor-pointer'
								href={'/#plans'}
								onClick={() => {
									localStorage.setItem('clicked', 'plans');
								}}
							>
								plans
							</Link>
							<Link
								prefetch
								className='p-3 cursor-pointer'
								href='/cart'
								onClick={() => {
									localStorage.setItem('clicked', 'cart');
								}}
							>
								cart
							</Link>
						</ul>

						<div className='lg:hidden cursor-pointer'>
							<input type='checkbox' id='menu-toggle' className='menu-toggle' />
							<label htmlFor='menu-toggle' className='mobile-toggle'>
								<Image
									src={humburger}
									alt='open menu'
									className='hamburger-icon'
									width={30}
									height={30}
								/>
								<Image
									src={cross}
									alt='close menu'
									className='cross-icon'
									width={30}
									height={30}
								/>
							</label>
							<div className='  z-[100]  pt-6  lg:hidden mobile-menu'>
								<ul className=' text-color-primary   flex flex-col  bg-black3 backdrop-blur-xl w-full  rounded-xl '>
									<Link
										href='/store'
										className=' p-4  pt-8 m2:py-6 m2:pt-12 w-full text-center text-[1.3rem] m3:text-[1.7rem] md:text-[2.4rem] lg:text-[2.1rem] xl:text-[2.9rem] '
									>
										store
									</Link>
									<Link
										href='/work'
										className='p-4 py-5  m2:py-6 w-full text-center text-[1.3rem] m3:text-[1.7rem] md:text-[2.4rem] lg:text-[2.1rem] xl:text-[2.9rem]'
									>
										work
									</Link>
									<Link
										// smooth
										className='p-4 py-5 m2:py-6 w-full text-center text-[1.3rem] m3:text-[1.7rem] md:text-[2.4rem] lg:text-[2.1rem] xl:text-[2.9rem]'
										href={'/#services'}
									>
										services
									</Link>
									<Link
										// smooth
										className='p-4 py-5 m2:py-6 w-full text-center text-[1.3rem] m3:text-[1.7rem] md:text-[2.4rem] lg:text-[2.1rem] xl:text-[2.9rem]'
										href={'/#plans'}
									>
										plans
									</Link>
									<Link
										className='p-4 py-5 m2:py-6 w-full text-center text-[1.3rem] m3:text-[1.7rem] md:text-[2.4rem] lg:text-[2.1rem] xl:text-[2.9rem]'
										href='/cart'
									>
										cart
									</Link>
									<div className=' pt-5 m2:pt-6 w-full p-4'>
										<Link href='/login'>
											<Button
												className='w-full btn-base  rounded-lg capitalize bg-black4  text-white  '
												text='login'
											/>
										</Link>
									</div>
								</ul>
							</div>
						</div>
						<Link href='/login' className=' hidden lg:block'>
							<Button
								text='login'
								className='btn-base  bg-black4  cursor-pointer'
							/>
						</Link>
					</div>
				</nav>
			</div>
		</>
	);
}
