import React from 'react';
interface FaqItemProps {
	question: string;
	answer: string;
}
export default function FaqItem(props: FaqItemProps) {
	return (
		<div
			tabIndex={0}
			className='collapse collapse-plus bg-black3 rounded-2xl cursor-pointer '
		>
			<div className='collapse-title font-semibold p-5 pb-0'>
				{props.question}
			</div>
			<div className='collapse-content font-sfpro text-[.75rem] md:text-[.9rem] py-2 px-6 '>
				{props.answer}
			</div>
		</div>
	);
}
