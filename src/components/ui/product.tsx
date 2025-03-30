/* eslint-disable @next/next/no-img-element */
import Button from './button';
import Link from 'next/link';
interface ProductItemProps {
	image: string;
	index: number;
	header: string;
	product: string;
}

export default function ProductItem({
	image,
	index,
	header,
	product,
}: ProductItemProps) {
	return (
		<div className='rounded-xl overflow-hidden  h-[20rem]  sm:h-[21rem] md:h-[23rem] lg:h-[28rem] relative  cursor-pointer flex-shrink-0   w-[85%] xxs:w-[80%] sm:w-[70%] md:w-[60%] lg:w-[24%] '>
			<Link href={`/store/${product}`} className='z-2'>
				<img src={image} alt='' className='object-cover  ' />
			</Link>
			<div className='absolute z-2 bottom-0 ccvv rounded-xl left-0 right-0 '>
				<div className='bg-black2 backdrop-blur-xl rounded-xl'>
					<Link href={`/store/${index}`} className='z-2'>
						<div className='lg:px-6 px-4 sm:px-6 py-2 '>
							<div className='text-left flex  items-start justify-between pt-2 gap-2 '>
								<h1 className='lg:text-base	 xl:text-lg '>{header}</h1>
								<p className=''>{`$800`}</p>
							</div>
							<span className=' text-white pb-2  block text-left font-sfpro text-[.75rem] font-normal'>
								See More
							</span>
						</div>
					</Link>
					<div className='px-4 pb-2 sm:px-6 sm:pb-4'>
						<Button
							text='Buy now'
							className='bg-secondary btn-base   w-full  '
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
