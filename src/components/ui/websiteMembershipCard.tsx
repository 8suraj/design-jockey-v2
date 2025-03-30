import Button from '@/components/ui/button';

export default function WebsiteMembershipCard() {
	return (
		<div className='m4  w-full bg-black3 rounded-2xl '>
			<div className='flex flex-col md:flex-row justify-between items-center      p-4 pt-8   lg:p-8  gap-4 lg:gap-2 h-full  '>
				<div className='flex flex-col items-start    '>
					<h1 className='text-xl md:text-3xl    '>Website Development</h1>

					<div className='flex flex-col gap-1 items-center    '>
						<span className=' block text-center text-[.75rem] font-sfpro'>
							Build your website faster with our website development service.
						</span>
					</div>
				</div>
				<div className='flex flex-col gap-1 items-center '>
					<h1 className='text-2xl lg:text-3xl'>$625/m</h1>
					<span className='text-[.75rem] font-sfpro text-grey-light'>
						Requires subscription
					</span>
				</div>
				<Button
					text='Add on'
					className='bg-secondary btn-base membershipv-wb '
				/>
			</div>
		</div>
	);
}
