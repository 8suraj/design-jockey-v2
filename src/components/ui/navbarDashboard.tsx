import staticContent from '@/assets/staticContent.json';
import Link from 'next/link';
import Image from 'next/image';
import logoBW from '@/assets/svgs/logoBW.svg';
import downArrow from '@/assets/svgs/downArrow.svg';
import NotificationIcon from './notificationIcon';
export default function NavbarDashboard() {
	return (
		<div className='border-b text-[.65rem]   md:text-[.75rem]  leading-5  border-[#C9C9C9] pt-8 '>
			<nav className='flex justify-between   h-14 w-[95%] md:w-[85%] mx-auto '>
				<ul className='h-14 flex   gap-10'>
					<Link href='/dashboard' className='flex items-center'>
						<Image src={logoBW} alt='' className='w-7  ' />
					</Link>
					{staticContent.navbarDataDashboard.map(({ label, value, link }) => (
						<li
							key={label}
							className=' cursor-pointer flex  items-center hover:border-b-2 border-white'
						>
							<Link key={value} href={link}>
								{label}
							</Link>
						</li>
					))}
				</ul>
				<ul className='flex h-14 gap-2 '>
					<li className='flex  items-center'>
						<NotificationIcon isNewNotificationAppeared />
					</li>
					<li className='flex  items-center gap-2  '>
						Account <Image src={downArrow} alt='down arrow' priority />
					</li>
				</ul>
			</nav>
		</div>
	);
}
