import React, { useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/projects/Projects';
import { Skills } from './components/sections/Skills';
import { Footer } from './components/layout/Footer';

const Home: React.FC<{ heroTitleRef: React.RefObject<HTMLHeadingElement | null> }> = ({
	heroTitleRef,
}) => {
	return (
		<main>
			<Hero headingRef={heroTitleRef} />
			<About />
			<Experience />
			<Projects />
			<Skills />
		</main>
	);
};

const App: React.FC = () => {
	const heroTitleRef = useRef<HTMLHeadingElement | null>(null);

	return (
		<BrowserRouter basename={import.meta.env.BASE_URL}>
			<Navbar heroTitleRef={heroTitleRef} />
			<Routes>
				<Route path="/" element={<Home heroTitleRef={heroTitleRef} />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
