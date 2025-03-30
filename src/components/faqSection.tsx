import H1 from './ui/header1';
import FaqItem from './ui/faqItem';
const data = [
	"Why wouldn't I just hire a full-time designer?",
	'Is there a limit to how many requests I can have?',
	'How fast will I receive my designs?',
	'Who are the designers?',
	'How does the pause feature work?',
	'What programs do you design in?',
	'How do I request designs?',
	"What if I don't like the design?",
	'What if I only have a single request?',
];
export default function Faq() {
	return (
		<section className='w-[95%] md:w-[85%] mx-auto  '>
			<div className='  flex flex-col gap-8 '>
				<H1 text='FAQs' />
				<div className='w-full flex flex-col gap-2'>
					{data.map((e, i) => (
						<FaqItem answer={e} question={e} key={i} />
					))}
				</div>
			</div>
		</section>
	);
}
