import Button from '@/components/ui/button';
import Link from 'next/link';
interface LoginTabProp {
	content: string;
	header: string;
	href: string;
	buttonLabel: string;
}
export default function LoginTab({
	content,
	header,
	href,
	buttonLabel,
}: LoginTabProp) {
	return (
		<div className='p-5 w-1/2 backdrop-blur-xl rounded-xl'>
			<h1 className='text-primary font-normal  text-[64px]'>{header}</h1>
			<p className='text-[.75rem] font-sfpro my-4'>{content}</p>
			<Link href={href}>
				<Button text={buttonLabel} className='bg-secondary btn-base w-full' />
			</Link>
		</div>
	);
}
