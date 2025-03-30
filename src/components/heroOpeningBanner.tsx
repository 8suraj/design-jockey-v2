import CallBookingBanner from './ui/callBookingBanner';
import SplineAnimatedBackground from './ui/splineBackground';

export default function HeroOpeningBanner() {
	return (
		<div className='h-[100vh]  w-full relative '>
			<SplineAnimatedBackground />
			<CallBookingBanner />
		</div>
	);
}
