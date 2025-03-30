/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useRef, useState } from 'react';
import LazyBlurImage from '@/components/ui/lazyImageBlur';
import { useColumns } from '@/hooks/useColumns';
import cross from '@/assets/svgs/cross.svg';
import Image from 'next/image';
import staticContent from '@/assets/staticContent.json';

export default function Work() {
	const observerTarget = useRef(null);
	const [images, setImages] = useState<string[]>([]);
	// Instead of lightboxImage (URL), we use lightboxIndex.
	const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

	const columnsCount = useColumns();
	// Modify getColumns to store both src and index.
	const getColumns = () => {
		const cols: { src: string; index: number }[][] = Array.from(
			{ length: columnsCount },
			() => []
		);
		images.forEach((img, index) => {
			cols[index % columnsCount].push({ src: img, index });
		});
		return cols;
	};

	const loadImages = (count: number) => {
		setImages((prev) => {
			const newImages = [];
			let currentIndex = prev.length;

			for (let i = 0; i < count; i++) {
				newImages.push(
					staticContent.workImages[
						currentIndex % staticContent.workImages.length
					]
				);
				currentIndex++;
			}

			return [...prev, ...newImages];
		});
	};
	useEffect(() => {
		setTimeout(() => {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}, 200);
		loadImages(20);
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					loadImages(10);
				}
			},
			{ threshold: 1 }
		);

		const current = observerTarget.current;
		if (current) observer.observe(current);

		return () => {
			if (current) observer.unobserve(current);
		};
	}, [images]);

	const columns = getColumns();

	// Handlers for lightbox navigation
	const handleLightboxClose = () => {
		setLightboxIndex(null);
	};

	const handlePrev = () => {
		if (lightboxIndex === null) return;
		setLightboxIndex((prev) =>
			prev !== null ? (prev - 1 + images.length) % images.length : 0
		);
	};

	const handleNext = () => {
		if (lightboxIndex === null) return;
		setLightboxIndex((prev) =>
			prev !== null ? (prev + 1) % images.length : 0
		);
	};

	return (
		<>
			<div className='relative'>
				<section className='py-4 pt-32 pb-10 mt-8 px-2 md:px-14 lg:px-0'>
					<section className='cursor-zoom-in'>
						<div
							className='px-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4'
							onClick={(e) => console.log(e)}
						>
							{columns.map((col, i) => (
								<div
									key={i}
									className={`q${i + 1} flex flex-col gap-4 gallery__items`}
								>
									{col.map((item, j) => (
										<figure
											key={`${item.src}-${j}-${i}`}
											className='gallery__item gallery__item--14 hover:scale-105 transition-all ease-in delay-50 hover:shadow-lg hover:shadow-amber-50'
											onClick={() => setLightboxIndex(item.index)}
										>
											<LazyBlurImage
												src={item.src}
												alt={`Gallery image ${j}`}
											/>
										</figure>
									))}
								</div>
							))}
						</div>
					</section>
					<div ref={observerTarget} />
				</section>
			</div>
			{lightboxIndex !== null && (
				<Lightbox
					images={images}
					currentIndex={lightboxIndex}
					onClose={handleLightboxClose}
					onPrev={handlePrev}
					onNext={handleNext}
				/>
			)}
		</>
	);
}

type LightboxProps = {
	images: string[];
	currentIndex: number;
	onClose: () => void;
	onPrev: () => void;
	onNext: () => void;
};

function Lightbox({
	images,
	currentIndex,
	onClose,
	onPrev,
	onNext,
}: LightboxProps) {
	// Keyboard support for navigation and closing
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'ArrowLeft') {
				onPrev();
			} else if (e.key === 'ArrowRight') {
				onNext();
			} else if (e.key === 'Escape') {
				onClose();
			}
		};
		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [onPrev, onNext, onClose]);

	const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	return (
		<div
			onClick={handleOverlayClick}
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				background: 'rgba(0, 0, 0, 0.8)',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				zIndex: 1000,
			}}
		>
			<div
				style={{ position: 'relative' }}
				className='w-full flex items-center justify-center'
			>
				<img
					src={images[currentIndex]}
					alt={`Lightbox image ${currentIndex}`}
					className='shadow-xl shadow-primary/25 text-primary'
					style={{
						maxWidth: '90vw',
						maxHeight: '90vh',
					}}
				/>
				<button
					onClick={onClose}
					className='text-primary'
					style={{
						position: 'absolute',
						top: 10,
						right: 10,
						background: 'transparent',
						border: 'none',
						fontSize: '2rem',
						cursor: 'pointer',
					}}
				>
					<Image src={cross} alt='' />
				</button>
				<button
					className='text-primary'
					onClick={(e) => {
						e.stopPropagation();
						onPrev();
					}}
					style={{
						position: 'absolute',
						top: '50%',
						left: 10,
						transform: 'translateY(-50%)',
						background: 'transparent',
						border: 'none',
						fontSize: '2rem',
						cursor: 'pointer',
					}}
				>
					‹
				</button>
				<button
					className='text-primary'
					onClick={(e) => {
						e.stopPropagation();
						onNext();
					}}
					style={{
						position: 'absolute',
						top: '50%',
						right: 10,
						transform: 'translateY(-50%)',
						background: 'transparent',
						border: 'none',
						fontSize: '2rem',
						cursor: 'pointer',
					}}
				>
					›
				</button>
			</div>
		</div>
	);
}
