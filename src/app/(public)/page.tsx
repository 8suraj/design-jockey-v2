/* eslint-disable @next/next/no-img-element */
import HeroOpeningBanner from '@/components/heroOpeningBanner';
import ScrollableBrandCollabeStrip from '@/components/scrollableBrandCollabeStrip';
import MembershipWorkings from '@/components/membershipWorkings';
import MembershipBenefits from '@/components/memberShipBenefits';
import Testimonials from '@/components/testimonials';
import Faq from '@/components/faqSection';
import ProductWrapper from '@/components/ui/productWrapper';
import MembershipLevels from '@/components/membershipLevels';
import CreativeServices from '@/components/creativeServices';

export default function Home() {
	return (
		<div className='flex flex-col gap-8 pb-8'>
			<div>
				<HeroOpeningBanner />
				<ScrollableBrandCollabeStrip />
				<img
					src='https://pub-2a77ad7abc1d4b5fb9dc7e3bff7b2422.r2.dev/video.gif'
					className='w-full '
					alt='gif'
				/>
			</div>
			<MembershipWorkings />
			<MembershipBenefits />
			<ProductWrapper />
			<Testimonials />
			<CreativeServices />
			<MembershipLevels />
			<Faq />
		</div>
	);
}
