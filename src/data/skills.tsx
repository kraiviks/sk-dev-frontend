import { SkillsInterface } from '@/types/skill';
import {
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiTypescript,
	SiReact,
	SiNextdotjs,
	SiVuedotjs,
	SiTailwindcss,
	SiSass,
	SiNestjs,
	SiNuxtdotjs,
	SiRedux,
	SiJquery,
	SiGit,
	SiDocker,
	SiGithub,
	SiPostgresql,
	SiPrisma,
} from 'react-icons/si';

export const SKILLS: SkillsInterface = {
	frontend: [
		{ name: 'HTML', icon: <SiHtml5 size={32} />, color: '#E34F26' },
		{ name: 'CSS', icon: <SiCss3 size={32} />, color: '#1572B6' },
		{ name: 'SASS', icon: <SiSass size={32} />, color: '#CD6799' },
		{ name: 'Tailwind', icon: <SiTailwindcss size={32} />, color: '#38BDF8' },
		{
			name: 'JavaScript',
			icon: <SiJavascript size={32} />,
			color: '#F0DB4F',
		},
		{
			name: 'TypeScript',
			icon: <SiTypescript size={32} />,
			color: '#3178C6',
		},
		{ name: 'React', icon: <SiReact size={32} />, color: '#61DBFB' },
		{
			name: 'Next.js',
			icon: <SiNextdotjs size={32} />,
			color: '#000000',
		},
		{ name: 'Vue', icon: <SiVuedotjs size={32} />, color: '#41B883' },
		{
			name: 'Nuxt.js',
			icon: <SiNuxtdotjs size={32} />,
			color: '#41B883',
		},

		{
			name: 'JQuery',
			icon: <SiJquery size={32} />,
			color: '#0769AD',
		},
		{ name: 'Redux', icon: <SiRedux size={32} />, color: '#732ABC' },
	],
	backend: [
		{ name: 'Nest', icon: <SiNestjs size={32} />, color: '#E0234E' },
		{ name: 'PostgreSQL', icon: <SiPostgresql size={32} />, color: '#31648C' },
		{ name: 'Prisma', icon: <SiPrisma size={32} />, color: '#2D3748' },
	],
	mobile: [],
	tools: [
		{ name: 'Git', icon: <SiGit size={32} />, color: '#F05032' },
		{ name: 'GitHub', icon: <SiGithub size={32} />, color: '#000000' },
		{
			name: 'Docker',
			icon: <SiDocker size={32} />,
			color: '#0DB7ED',
		},
	],
};
