import { Container } from '@/components/shared';

import {
	MainParagraph,
	MainButton,
	MainText,
	Profile,
	Title,
	InfoList,
} from './shared';

export const SectionMain = () => {
	return (
		<section className="flex sm:flex-col sm:justify-center min-h-720:h-screen pt-28 pb-10 overflow-hidden">
			<Container className="flex flex-col w-full px-16">
				<Title text="Developer" />
				<div className="flex flex-col sm:flex-row items-center sm:justify-between gap-10 sm:gap-20">
					{/* Left */}

					<Profile className="order-2 sm:order-1" />

					{/* Center */}
					<div className="flex flex-col w-full gap-7 order-1: sm:order-2">
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
						<MainButton />
					</div>
					{/* Right */}
					{/* <InfoList className="order-3 max-w-full" /> */}
				</div>
			</Container>
		</section>
	);
};
