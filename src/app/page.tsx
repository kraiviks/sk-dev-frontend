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
import { Spinner } from '@/components/ui/spinner';

const sections = [
	<SectionMain key="main" />,
	<SectionAbout key="about" />,
	<SectionSkills key="skills" />,
	<SectionWorks key="works" />,
	<SectionPersonalProjects key="personal-projects" />,
	<SectionBlog key="blog" />,
	<SectionContact key="contact" />,
];

export default function Home() {
	return (
		<AnimationProvider>
			<Fullpage sections={sections} />
		</AnimationProvider>
	);
}
