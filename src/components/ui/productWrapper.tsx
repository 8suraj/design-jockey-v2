import SectionWrapper from './sectionWrapper';
import ProductItem from './product';

const data = [
	{
		header: 'Branding guidlines',
		image:
			'https://pub-2a77ad7abc1d4b5fb9dc7e3bff7b2422.r2.dev/product/min/branding-min.png',
		product: 'branding',
	},
	{
		header: 'Website design',
		image:
			'https://pub-2a77ad7abc1d4b5fb9dc7e3bff7b2422.r2.dev/product/min/web-min.png',
		product: 'web-design',
	},
	{
		header: 'Motion Graphics',
		image:
			'https://pub-2a77ad7abc1d4b5fb9dc7e3bff7b2422.r2.dev/product/min/social-min.png',
		product: 'motion-graphics',
	},
];
export default function ProductWrapper() {
	return (
		<SectionWrapper
			header='Off-the-rack'
			subHeader=''
			buttonLabel='show all'
			buttonUrl='/store'
		>
			<div className='  flex flex-row  lg:items-center gap-4 overflow-x-scroll lg:overflow-hidden  snap-x snap-mandatory'>
				{data?.map((e, i) => (
					<ProductItem
						image={e.image}
						index={i}
						header={e.header}
						product={e.product}
						key={i}
					/>
				))}
			</div>
		</SectionWrapper>
	);
}
