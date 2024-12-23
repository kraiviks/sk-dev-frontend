import { Container } from '@/components/shared';

import {
	MainParagraph,
	LetsTalk,
	MainText,
} from './shared';
import Scroll from '@/components/ui/scroll';

export const SectionMain = () => {
	return (
		<section className="relative flex justify-center items-center h-screen pt-10 pb-10 overflow-hidden">
			<Container className="flex flex-col w-full px-16">
				<div className="flex flex-col sm:flex-row items-center sm:justify-between gap-10 sm:gap-20">
					<div className="flex flex-col items-center w-full gap-7">
						<MainText
							text={[
								{
									text: 'Hey',
								},
								{
									text: "I'm ",
									wrap: true,
								},
								{
									text: 'Serhii',
									highlight: 'Serhii',
									wrap: true,
								},
								{
									text: 'Frontend Developer',
								},
							]}
						/>
						<MainParagraph />
						<LetsTalk />
					</div>
				</div>
			</Container>
			<Scroll className="absolute bottom-[5%] left-[50%] right-[50%] -translate-x[50%]" />
		</section>
	);
};
