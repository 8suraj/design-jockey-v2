export default function MembershipBenefitsCard() {
	return (
		<div className='m5 flex flex-col  items-center lg:items-start   bg-black3 rounded-2xl  p-4 pt-8  gap-4 lg:gap-2 lg:p-8  h-full '>
			<h1 className='text-xl md:text-3xl m1:text-center lg:text-start  '>
				What’s included:
			</h1>
			<div className='text-[.75rem]  font-sfpro  flex flex-col items-start pl-4  '>
				<ul className='flex flex-col  gap-2 list-disc	list-outside '>
					<li>Unlimited briefs (One request at a time)</li>
					{[
						'Unlimited brands',
						'Unlimited file request',
						'Easy payments',
						'Pause or cancel anytime.',
					].map((e, i) => (
						<li key={i}>{e}</li>
					))}
				</ul>
			</div>
		</div>
	);
}
