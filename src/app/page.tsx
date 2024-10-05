import { Fullpage } from '@/components/shared';
import {
	SectionMain,
	SectionAbout,
	SectionSkills,
	SectionWorks,
	SectionBlog,
	SectionContact,
	SectionPersonalProjects,
} from '@/components/sections';
import { AnimationProvider } from '@/contexts/AnimationContext';

const sections = [
	<SectionMain key="1" />,
	<SectionAbout key="2" />,
	<SectionSkills key="3" />,
	<SectionWorks key="4" />,
	<SectionPersonalProjects key="5" />,
	<SectionBlog key="6" />,
	// <SectionContact key="7" />,
];

export default function Home() {
	return (
		<AnimationProvider>
			<Fullpage sections={sections} />
		</AnimationProvider>
	);
}
