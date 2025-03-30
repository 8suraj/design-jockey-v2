import NavbarPublic from '@/components/ui/navbarPublic';
import Footer from '@/components/ui/footer';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<div className='bg-black'>
				<NavbarPublic />
				{children}
				<Footer />
			</div>
		</>
	);
}
