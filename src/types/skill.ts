export interface SkillsInterface {
	frontend: SkillInterface[];
	backend: SkillInterface[];
	mobile: SkillInterface[];
	tools: SkillInterface[];
	
}

export interface SkillInterface {
	name: string;
	icon: JSX.Element;
	color: string;
}