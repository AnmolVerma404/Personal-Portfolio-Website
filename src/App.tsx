import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import {
	navBar,
	mainBody,
	about,
	repos,
	skills,
	getInTouch,
	experiences,
} from './editable-stuff/config';
import MainBody from './components/home/MainBody';
import AboutMe from './components/home/AboutMe';
import Project from './components/home/Project';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Skills from './components/home/Skills';
import GetInTouch from './components/home/GetInTouch';
import Experience from './components/home/Experience';

const Home = React.forwardRef<HTMLHeadingElement>((props, ref) => {
	return (
		<>
			<MainBody
				gradient={mainBody.gradientColors}
				title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
				message={mainBody.message}
				icons={mainBody.icons}
				ref={ref}
			/>
			{about.show && (
				<AboutMe
					heading={about.heading}
					message={about.message}
					link={about.imageLink}
					imgSize={about.imageSize}
					resume={about.resume}
				/>
			)}
			{experiences.show && <Experience experiences={experiences} />}
			{repos.show && (
				<Project
					heading={repos.heading}
					username={repos.gitHubUsername}
					length={repos.reposLength}
					specfic={repos.specificRepos}
				/>
			)}
			{skills.show && <Skills {...skills} />}
		</>
	);
});

const App: React.FC = () => {
	const titleRef = React.useRef<HTMLElement | null>(null);

	return (
		<BrowserRouter basename={import.meta.env.BASE_URL}>
			{navBar.show && <Navbar ref={titleRef} />}
			<Routes>
				<Route path="/" element={<Home ref={titleRef as unknown as React.Ref<HTMLHeadingElement>} />} />
			</Routes>
			<Footer>
				{getInTouch.show && (
					<GetInTouch
						heading={getInTouch.heading}
						message={getInTouch.message}
						link={getInTouch.link}
					/>
				)}
			</Footer>
		</BrowserRouter>
	);
};

export default App;

