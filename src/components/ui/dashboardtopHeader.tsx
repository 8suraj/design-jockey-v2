import React from 'react';

export default function DashboardtopHeader() {
	return (
		<div className='flex justify-between items-center  border-b-2 pb-3 text-[#C9C9C9]  '>
			<div className=' '>
				<h1 className='text-[15px] leading-4 font-MExtended text-[#171717] -pb-3 font-[400]'>
					All Meetings
				</h1>
			</div>

			<form className=' flex gap-5'>
				<div className='relative flex  justify-between'>
					<input
						type='search'
						className=' border-[2px] text-[#939393] bg-white border-gray-300  text-[12px] rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[350px] ps-7 h-[38px] '
						placeholder='Search Files '
						required
					/>
				</div>
				<div className='relative  flex  '>
					<input
						id='datepicker-autohide'
						datepicker-autohide
						type='text'
						className=' border-[2px] text-[#939393] bg-white border-gray-300  text-[12px] rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[150px] ps-7 h-[38px] '
						placeholder='Date created'
					/>
				</div>
				<button className='bg-[#0038FF] hover:bg-blue-400 text-white px-2 font-[400] font-MExtended  text-[15px] w-[140px] h-[38px] rounded flex items-center gap-2 justify-center'>
					<span>Folder</span>
				</button>
			</form>
		</div>
	);
}
