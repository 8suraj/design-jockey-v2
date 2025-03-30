type ButtonProps = {
	text: string;
	className: string;
	type?: 'button' | 'submit' | 'reset' | undefined;
	disabled?: boolean;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({
	text,
	className = '',
	type = 'button',
	disabled,
	onClick,
}: ButtonProps) {
	return (
		<button
			className={`${className}  text-[.75rem] sm:text-[.8rem]  md:text-[.78rem]  xl:text-[.93rem] rounded-lg capitalize hover:bg-primary hover:text-black-light `}
			{...{ disabled, type, onClick }}
		>
			{text}
		</button>
	);
}
