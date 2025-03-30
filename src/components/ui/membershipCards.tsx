import React from 'react';
import Button from './button';

export interface MembershipCardProps {
	plan: string;
	price: string;
	facilities: string[];
	tenure: string;
	buyType: string;
}
export default function MembershipCard(props: MembershipCardProps) {
	return (
		<div className='text-left flex flex-col justify-center   lg:justify-around bg-black3 rounded-2xl items-center p-4 pt-8  gap-4 lg:gap-2 lg:p-12 lg:py-8  w-full  h-[30rem]   lg:items-start'>
			<div className='flex flex-col gap-4 lg:gap-2 justify-between  h-[90%] '>
				<h1 className='text-xl md:text-3xl  '>{props.plan}</h1>

				<div className='text-[.9rem] font-normal  font-sfpro  flex flex-col items-start '>
					<ul className='flex flex-col  gap-2 list-disc	list-inside '>
						{props.facilities?.length > 0
							? props.facilities?.map((e, i) => <li key={i}>{e}</li>)
							: ''}
					</ul>
				</div>
				<div className='flex flex-col gap-1 items-start lg:items-start'>
					{props.price ? (
						<h1 className='text-2xl md:text-3xl'>${props.price}/m</h1>
					) : (
						''
					)}
					{props.tenure ? (
						<span className='text-[.75rem] font-normal text-grey-light pb-3'>
							{props.tenure}
						</span>
					) : (
						''
					)}
				</div>
			</div>
			{props.buyType ? (
				<Button
					text={props.buyType}
					className='bg-secondary btn-base w-full membershipv'
					// onClick={() => {}}
				/>
			) : (
				''
			)}
		</div>
	);
}
