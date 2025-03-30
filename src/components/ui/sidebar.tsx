/* eslint-disable @next/next/no-img-element */
import React from 'react';
import staticContent from '@/assets/staticContent.json';
import Link from 'next/link';
export default function Sidebar() {
	return (
		<ul className='space-y-2  shadow-sm  text-black text-[14px] font-[400] border border-red w-1/5'>
			{staticContent.sidebarItems.map((item) => (
				<li key={item.value}>
					<Link
						href={item.link}
						className={`flex items-center p-3 px-10 w-full rounded-lg bg-[#FFFFFF0D] text-white hover:bg-[#FFFFFF0D] backdrop-blur-2xl'`}
					>
						<img src={item.icon} alt='' />

						<span className='ms-3'>{item.label}</span>
					</Link>
				</li>
			))}
		</ul>
	);
}
