import NavbarDashboard from '@/components/ui/navbarDashboard';
import Sidebar from '@/components/ui/sidebar';

export default function LoginLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<section className='bg-[#2A2A2A] h-full'>
				<NavbarDashboard />
				<div className='w-[95%] md:w-[85%] mx-auto  flex gap-2 py-2 '>
					<Sidebar />
					{children}
				</div>
			</section>
		</>
	);
}
