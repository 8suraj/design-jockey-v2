import CreativeServiceItem from './ui/creativeServiceItem';
import SectionWrapper from './ui/sectionWrapper';
import staticContent from '@/assets/staticContent.json';
export default function CreativeServices() {
	return (
		<SectionWrapper
			buttonLabel='See Plans'
			buttonUrl='/#plans'
			header='All Creative Services'
			subHeader='Choose a plan that fits your needs - Basic for individuals or Advanced for larger teams - with the option to make a one-time purchase or subscribe.'
		>
			<div className='w-full m-auto flex flex-col justify-between  gap-2   sm:flex-row sm:flex-wrap '>
				{staticContent.services.map((e) => (
					<CreativeServiceItem service={e} key={e} />
				))}
			</div>
		</SectionWrapper>
	);
}
