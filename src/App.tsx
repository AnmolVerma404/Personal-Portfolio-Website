import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
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
			<MainBody ref={ref} />
			<AboutMe />
			<Experience />
			<Project />
			<Skills />
		</>
	);
});

const App: React.FC = () => {
	const titleRef = React.useRef<HTMLElement | null>(null);

	return (
		<BrowserRouter basename={import.meta.env.BASE_URL}>
			<Navbar ref={titleRef} />
			<Routes>
				<Route path="/" element={<Home ref={titleRef as unknown as React.Ref<HTMLHeadingElement>} />} />
			</Routes>
			<Footer>
				<GetInTouch />
			</Footer>
		</BrowserRouter>
	);
};

export default App;
