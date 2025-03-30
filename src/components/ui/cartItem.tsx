'use client';
import { FunctionComponent, useState } from 'react';
import Image from 'next/image';
import minus from '@/assets/svgs/minus.svg';
import plus from '@/assets/svgs/plus.svg';
interface CartItemProps {
	itemName: string;
	itemPrice: number;
	itemCount: number;
}

export const CartItem: FunctionComponent<CartItemProps> = (
	props: CartItemProps
) => {
	const [count, setCount] = useState(props.itemCount);
	return (
		<div className='bg-black rounded-lg w-full p-4 flex m1:flex-col gap-6 md:flex-row  '>
			<h1 className='text-primary md:hidden  lg:text-2xl text-base'>
				{props.itemName}
			</h1>
			<div className='flex justify-between items-center md:w-full  lg:text-base	 xl:text-lg'>
				<h1 className='text-primary md:block m1:hidden md:w-6/12 '>
					{props.itemName}
				</h1>
				<h3 className='w-2/12'>{`$${props.itemPrice}`}</h3>
				<div className='flex    items-center justify-between  md:w-2/12 '>
					<div
						className='rounded-full lg:rounded-lg lg:w-8 lg:h-8 bg-black4 flex items-center justify-center w-6 h-6 cursor-pointer hover:bg-primary '
						onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))}
					>
						<Image src={minus} alt='' className='w-3 lg:w-4' />
					</div>
					<div className='px-2 text-lg'>{count}</div>
					<div
						className='rounded-full lg:rounded-lg lg:w-8 lg:h-8 bg-black4 flex items-center justify-center w-6 h-6 cursor-pointer  hover:bg-primary '
						onClick={() => setCount((prev) => prev + 1)}
					>
						<Image src={plus} alt='' className='w-3' />
					</div>
				</div>
				<div className='m1:hidden md:block w-2/12  text-right'>{`$${
					count * props.itemPrice
				}`}</div>
			</div>
		</div>
	);
};
