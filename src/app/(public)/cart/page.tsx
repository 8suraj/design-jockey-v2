import Button from '@/components/ui/button';
import { CartItem } from '@/components/ui/cartItem';
import staticContent from '@/assets/staticContent.json';
export default function Cart() {
	return (
		<>
			<div className='w-full bg-black-light lg:pt-[8rem] pt-[5rem]'>
				<section className='xl:w-[80vw] 2xl:w-[80vw] mx-auto '>
					<div className='px-6 md:px-14 py-12 xl:px-4'>
						<div className='flex flex-col gap-12 w-full  '>
							<div className='flex w-full justify-center py-4 flex-col items-center gap-2'>
								<div className='md:flex m1:hidden justify-between w-full m1:text-[.75rem] text-[.75rem] sm:text-[.8rem]  md:text-[.78rem] lg:text-[.78rem] xl:text-[.93rem]]  px-4 py-2'>
									<div className='w-6/12'>Product</div>
									<div className='md:w-2/12'>Price</div>
									<div className='md:w-2/12'>Quantity</div>
									<div className='md:w-2/12 text-right'>Subtotal</div>
								</div>
								{staticContent.cartitems.map((item) => (
									<CartItem
										itemName={item.itemName}
										itemPrice={item.itemPrice}
										itemCount={item.itemCount}
										key={item.itemName}
									/>
								))}
							</div>
							<div className='flex flex-col gap-6 sm:w-8/12 md:w-6/12 w-full mx-auto items-center m1:text-[.75rem] text-[.75rem] sm:text-[.8rem]  md:text-[.93rem] lg:text-[1rem] x'>
								<h1 className='text-color-primary  capitalize  w-full lg:text-base	 xl:text-lg'>
									Cart totals
								</h1>
								<div className='w-full text-sm flex justify-between '>
									<span className='m1:text-[.75rem] text-[.75rem] sm:text-[.8rem]  md:text-[.78rem] lg:text-[.78rem] xl:text-[.93rem]'>
										Subtotal
									</span>
									<span className='lg:text-base	 xl:text-lg'>$400</span>
								</div>
								<div className='flex flex-col gap-2 w-full'>
									<div className='flex  w-full gap-2'>
										<input
											type='text'
											className='w-8/12 rounded cart-text placeholder:m1:text-[.75rem] placeholder:text-[.75rem] placeholder:sm:text-[.8rem]  placeholder:md:text-[.78rem] placeholder:lg:text-[.78rem] placeholder:xl:text-[.93rem] placeholder:text-center text-center h-14 placeholder:text-grey-light bg-black4 outline-none m1:text-[.75rem] text-[.75rem] sm:text-[.8rem]  md:text-[.78rem] lg:text-[.78rem] xl:text-[.93rem] focus:placeholder:text-transparent text-grey-light '
											placeholder='coupon code '
										/>
										<div className=' w-4/12 flex justify-center '>
											<Button
												text='apply'
												className='bg-black rounded-lg w-full h-14 capitalize m1:text-[.75rem] text-[.75rem] sm:text-[.8rem]  md:text-[.78rem] lg:text-[.78rem] xl:text-[.93rem] '
											/>
										</div>
									</div>
									<div className=' w-full flex justify-center '>
										<Button
											text='buy'
											className='bg-secondary rounded-lg  m1:text-[.75rem] text-[.75rem] sm:text-[.8rem]  md:text-[.78rem] lg:text-[.78rem] xl:text-[.93rem] text-center   py-6 px-6 w-full '
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
