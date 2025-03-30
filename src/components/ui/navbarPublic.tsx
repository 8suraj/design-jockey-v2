'use client';
import Link from 'next/link';
import Image from 'next/image';
// import Hash
// import { HashLink } from 'react-router-hash-link';
import logo from '@/assets/svgs/logo.svg';
import cross from '@/assets/svgs/cross.svg';
import humburger from '@/assets/svgs/humburger.svg';
import { useState, useEffect } from 'react';
import Button from './button';

// import './nv.css';

export default function NavbarPublic() {
	const [mobileMenu, setMobileMenu] = useState<boolean>(false);
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
				// If the scroll direction is down and the user has scrolled past the navbar, hide the navbar
				setHideNavbar(true);
			} else if (
				currentScrollPosition < lastScrollPosition ||
				currentScrollPosition === 0
			) {
				// If the scroll direction is up or the user is at the top of the page, show the navbar
				setHideNavbar(false);
			}
			// Set the last scroll position to the current scroll position
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
								href='/store'
								className='p-3 cursor-pointer'
								onClick={() => {
									localStorage.setItem('clicked', 'store');
								}}
							>
								store
							</Link>
							<Link
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
								className='p-3 cursor-pointer'
								href='/cart'
								onClick={() => {
									localStorage.setItem('clicked', 'cart');
								}}
							>
								cart
							</Link>
						</ul>
						<div
							className='lg:hidden cursor-pointer'
							onClick={() => setMobileMenu(!mobileMenu)}
						>
							{!mobileMenu ? (
								<Image src={humburger} alt='logo' />
							) : (
								<Image src={cross} alt='logo' />
							)}
						</div>
						<Link href='/login' className=' hidden lg:block'>
							<Button
								text='login'
								className='btn-base  bg-black4  cursor-pointer'
							/>
						</Link>
					</div>
				</nav>

				{mobileMenu ? (
					<div className='  z-[100]  pt-6  lg:hidden '>
						<div className='bg-black2 backdrop-blur-xl w-full  rounded-xl '>
							<ul className=' text-color-primary   flex flex-col '>
								<Link
									href='/store'
									className=' p-4  pt-8 m2:py-6 m2:pt-12 w-full text-center text-[1.3rem] m3:text-[1.7rem] md:text-[2.4rem] lg:text-[2.1rem] xl:text-[2.9rem] '
									onClick={() => {
										localStorage.setItem('clicked', 'store');
										setMobileMenu(false);
									}}
								>
									store
								</Link>
								<Link
									href='/work'
									className='p-4 py-5  m2:py-6 w-full text-center text-[1.3rem] m3:text-[1.7rem] md:text-[2.4rem] lg:text-[2.1rem] xl:text-[2.9rem]'
									onClick={() => {
										localStorage.setItem('clicked', 'work');
										setMobileMenu(false);
									}}
								>
									work
								</Link>
								<Link
									// smooth
									className='p-4 py-5 m2:py-6 w-full text-center text-[1.3rem] m3:text-[1.7rem] md:text-[2.4rem] lg:text-[2.1rem] xl:text-[2.9rem]'
									href={'/#services'}
									onClick={() => {
										setMobileMenu(false);
										localStorage.setItem('clicked', 'services');
									}}
								>
									services
								</Link>
								<Link
									// smooth
									className='p-4 py-5 m2:py-6 w-full text-center text-[1.3rem] m3:text-[1.7rem] md:text-[2.4rem] lg:text-[2.1rem] xl:text-[2.9rem]'
									href={'/#plans'}
									onClick={() => {
										setMobileMenu(false);
										localStorage.setItem('clicked', 'plans');
									}}
								>
									plans
								</Link>
								<Link
									className='p-4 py-5 m2:py-6 w-full text-center text-[1.3rem] m3:text-[1.7rem] md:text-[2.4rem] lg:text-[2.1rem] xl:text-[2.9rem]'
									href='/cart'
									onClick={() => {
										localStorage.setItem('clicked', 'cart');
										setMobileMenu(false);
									}}
								>
									cart
								</Link>
								<div className=' pt-5 m2:pt-6 w-full p-4'>
									<button
										className='w-full btn-base  rounded-lg capitalize bg-black4  text-white  '
										onClick={(e) => {
											console.log(e);
											setMobileMenu(false);
										}}
									>
										login
									</button>
								</div>
							</ul>
						</div>
					</div>
				) : (
					''
				)}
			</div>
			{/* {console.log('from navbar', clicked)} */}
		</>
	);
}
