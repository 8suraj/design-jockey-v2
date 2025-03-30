'use client';

import { useVirtualizer } from '@tanstack/react-virtual';
import { useRef } from 'react';
import LazyBlurImage from './lazyImageBlur';

type Props = {
	images: string[];
	parentRef: React.RefObject<HTMLDivElement>;
};

const MasonryColumn = ({ images, parentRef }: Props) => {
	const columnRef = useRef<HTMLDivElement>(null);

	const virtualizer = useVirtualizer({
		count: images.length,
		getScrollElement: () => parentRef.current,
		estimateSize: () => 250, // Avg image height
		overscan: 10,
	});

	const items = virtualizer.getVirtualItems();
	return (
		<div ref={columnRef} className='flex-1 flex flex-col gap-4 '>
			{items.map((virtualRow) => {
				const image = images[virtualRow.index];
				return (
					<LazyBlurImage
						src={image}
						alt={`Image ${image}`}
						key={virtualRow.key}
					/>
				);
			})}
		</div>
	);
};

export default MasonryColumn;
