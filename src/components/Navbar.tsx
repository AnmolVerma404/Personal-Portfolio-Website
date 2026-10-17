import React, { useState } from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';
import useResizeObserver from '../hooks/useResizeObserver';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {
	mainBody,
	repos,
	about,
	skills,
	experiences,
} from '../editable-stuff/config';
import { NavLink } from './home/migration';

export interface NavigationProps {}

const Navigation = React.forwardRef<HTMLElement, NavigationProps>((props, ref) => {
	const [isTop, setIsTop] = useState(true);
	const [scrollPosition, setScrollPosition] = useState(0);
	const navbarMenuRef = React.useRef<HTMLElement | null>(null);
	const navbarDimensions = useResizeObserver(navbarMenuRef);
	const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;

	useScrollPosition(
		({ currPos }) => {
			if (!navbarDimensions || !ref || !('current' in ref) || !ref.current) return;
			currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
				? setIsTop(true)
				: setIsTop(false);
			setScrollPosition(currPos.y);
		},
		[navBottom],
		navbarMenuRef
	);

	React.useEffect(() => {
		if (!navbarDimensions || !ref || !('current' in ref) || !ref.current) return;
		navBottom - scrollPosition >= ref.current.offsetTop
			? setIsTop(false)
			: setIsTop(true);
	}, [navBottom, navbarDimensions, ref, scrollPosition]);

	const baseUrl = import.meta.env.BASE_URL;

	return (
		<Navbar
			ref={navbarMenuRef}
			className={`px-3 fixed-top  ${
				!isTop ? 'navbar-white' : 'navbar-transparent'
			}`}
			expand="lg"
		>
			<Navbar.Brand
				className="navbar-brand"
				href={`${baseUrl}#home`}
			>
				{`<${mainBody.firstName} />`}
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="navbar-nav mr-auto">
					{about.show && (
						<NavLink
							className="nav-item lead"
							href={`${baseUrl}#aboutme`}
						>
							About
						</NavLink>
					)}
					{experiences.show && (
						<NavLink
							className="nav-item lead"
							href={`${baseUrl}#experiences`}
						>
							Experience
						</NavLink>
					)}
					{about.resume && (
						<NavLink
							className="nav-item lead"
							href={about.resume}
							target="_blank"
							rel="noreferrer noopener"
						>
							Resume
						</NavLink>
					)}
					{repos.show && (
						<NavLink href={`${baseUrl}#projects`}>
							Projects
						</NavLink>
					)}
					{skills.show && (
						<NavLink
							className="nav-item lead"
							href={`${baseUrl}#skills`}
						>
							Skills
						</NavLink>
					)}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
});

export default Navigation;

