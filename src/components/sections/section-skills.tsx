import { Container, Description, SkillsBox, Title } from '@/components/shared';
import { AnimatedLine, YAnimation } from '@/components/animations';
import { SKILLS } from '@/data';

export const SectionSkills = (): React.ReactElement => {
	return (
		<section className="relative flex items-center min-h-720:lg:h-screen">
			<Container className="z-20 flex justify-between gap-32">
				<div className="flex flex-col justify-center min-h-screen py-12 text-white">
					{/* Skills Header */}
					<div className="flex flex-col items-center justify-center mb-10">
						<div className="relative flex items-center justify-center mb-2 space-x-2 w-max">
							<Title text="Skills" size="lg" />
							<AnimatedLine />
						</div>
						<Description text="I am striving to never stop learning and improving" />
					</div>

					{/* Skills Icons */}
					<div className="flex flex-wrap justify-center gap-20">
						{Object.keys(SKILLS).map((key, index) => (
							<SkillsBox
								key={key}
								delay={index * 0.5}
								title={key.charAt(0).toUpperCase() + key.slice(1)}
								skills={SKILLS[key as keyof typeof SKILLS]}
							/>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
};
