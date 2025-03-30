import NavbarPublic from '@/components/ui/navbarPublic';

export default function LoginLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<NavbarPublic />
			{children}
		</>
	);
}
