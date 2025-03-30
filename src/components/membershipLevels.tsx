import React from 'react';
import SectionWrapper from './ui/sectionWrapper';
import MembershipCard, { MembershipCardProps } from './ui/membershipCards';
import WebsiteMembershipCard from './ui/websiteMembershipCard';
import MembershipBenefitsCard from './ui/membershipBenefitsCard';
import BookACallCard from './ui/bookACallCard';
import staticContent from '@/assets/staticContent.json';

export default function MembershipLevels() {
	return (
		<SectionWrapper
			header='Membership Tiers'
			subHeader='Choose the plan that fits you best. Our
							diverse range of plans ensures an option
							tailored just for you.'
			buttonLabel=''
			buttonUrl=''
			id='plans'
		>
			<div className='membership-level-container'>
				{staticContent.membershipTypes.map((data: MembershipCardProps, i) => (
					<MembershipCard {...data} key={i} />
				))}
				<WebsiteMembershipCard />
				<MembershipBenefitsCard />
				<BookACallCard />
			</div>
		</SectionWrapper>
	);
}
