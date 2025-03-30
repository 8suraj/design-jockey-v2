import SplineAnimatedBackground from '@/components/ui/splineBackground';
import LoginTab from '@/components/ui/loginTabs';
import staticContent from '@/assets/staticContent.json';
const Login = () => {
	return (
		<>
			<div className='h-[100vh]  w-full relative '>
				<SplineAnimatedBackground />
				<div className=' absolute  left-0 top-0  bottom-0 right-0 '>
					<div className='w-[95%] md:w-[85%] mx-auto h-full flex justify-center items-center gap-3 '>
						{staticContent.loginTabs.map((item, index) => (
							<LoginTab {...item} key={index} />
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
