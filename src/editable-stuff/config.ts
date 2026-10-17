import anmolvermaImg from './anmolverma.jpeg';
import rtCampLogo from '../assets/img/rtCamp.png';

export interface SocialIcon {
	image: string;
	url: string;
}

export interface Skill {
	name: string;
	value: number;
}

export interface ExperienceItem {
	role: string;
	companylogo: string;
	date: string;
	siteUrl: string;
}

// Navigation Bar SECTION
const navBar = {
	show: true,
};

// Main Body SECTION
const mainBody = {
	gradientColors: '#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1',
	firstName: 'Anmol',
	middleName: '',
	lastName: 'Verma',
	message: ' I Code :) Quotes not found 404 ;) ',
	icons: [
		{
			image: 'fa-github',
			url: 'https://github.com/AnmolVerma404',
		},
		{
			image: 'fa-linkedin',
			url: 'https://www.linkedin.com/in/anmolverma404/',
		},
		{
			image: 'fa-twitter',
			url: 'https://twitter.com/anmolverma404',
		},
	] as SocialIcon[],
};

const about = {
	show: true,
	heading: 'About Me',
	imageLink: anmolvermaImg,
	imageSize: 375,
	resume: undefined as string | undefined,
	message:
		"Hey there! I'm Anmol Verma, a graduate from Vellore Institute of Technology Bhopal, where I spent 2020-2024 learning the art of turning coffee into code. I majored in Computer Engineering, which is a fancy way of saying I spend a lot of time convincing computers to do what I want (and occasionally begging them to cooperate). Currently, I'm rocking the software engineering scene at rtCamp. When I'm not buried under lines of code, you can find me tinkering with projects, dreaming up the next big thing, or plotting ways to convince my computer to clean up its own bugs.",
};

const repos = {
	show: true,
	heading: 'Pinned Repository',
	gitHubUsername: 'AnmolVerma404',
	reposLength: 0,
	specificRepos: [
		'TicketOps',
		'Healthy-HearTechs',
		'MapMyPath',
		'Data-Structures-and-Algorithms',
	],
};

const leadership = {
	show: false,
	heading: 'Leadership',
	message: '',
	images: [] as Array<{ img: string; label: string; paragraph: string }>,
	imageSize: {
		width: '615',
		height: '450',
	},
};

const skills = {
	show: true,
	heading: 'Skills',
	showHardSkills: true,
	hardSkills: [
		{ name: 'C++', value: 90 },
		{ name: 'Data Structures', value: 85 },
		{ name: 'Python', value: 70 },
		{ name: 'TypeScript', value: 70 },
		{ name: 'React', value: 65 },
		{ name: 'HTML/CSS', value: 80 },
		{ name: 'PHP', value: 90 },
		{ name: 'DevOps', value: 50 },
	] as Skill[],
};

const getInTouch = {
	show: true,
	heading: 'Get In Touch',
	message:
		'Thank you for visiting 🙌 If you have any questions or inquiries, feel free to reach out via',
	link: {
		to: 'https://www.linkedin.com/in/anmolverma404/',
		label: 'LinkedIn',
	},
};

const experiences = {
	show: true,
	heading: 'Experiences',
	data: [
		{
			role: 'Software Engineer',
			companylogo: rtCampLogo,
			date: 'Oct 2023 – Present',
			siteUrl: 'https://rtcamp.com/',
		},
	] as ExperienceItem[],
};

export {
	navBar,
	mainBody,
	about,
	repos,
	skills,
	leadership,
	getInTouch,
	experiences,
};

