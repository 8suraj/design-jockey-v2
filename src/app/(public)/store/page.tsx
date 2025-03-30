'use client';

import store from '@/assets/product/store.png';
import ProductWrapper from '@/components/ui/productWrapper';
import HeroFullWidthImage from '@/components/ui/herFullWidthImage';

export default function Store() {
	return (
		<div className='flex flex-col gap-8 pb-8'>
			<HeroFullWidthImage image={store} />
			<ProductWrapper />
		</div>
	);
}
