export default function H1({ text }: { text: string }) {
	return (
		<h1 className='text-primary text-center md:text-left  capitalize  text-[1.5rem]  md:text-[1.9rem] lg:text-[2.5rem] '>
			{text}
		</h1>
	);
}
