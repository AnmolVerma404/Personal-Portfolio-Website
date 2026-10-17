import React from 'react';
import Nav from 'react-bootstrap/Nav';

export interface JumbotronProps {
	id?: string;
	className?: string;
	style?: React.CSSProperties;
	fluid?: boolean;
	children?: React.ReactNode;
}

export const Jumbotron = React.forwardRef<HTMLDivElement, JumbotronProps>((props, ref) => {
	const bgStyle = props.style ?? { backgroundColor: '#e9ecef' };
	return (
		<div ref={ref} id={props.id} className={`py-3 ${props.className ?? ''}`} style={bgStyle}>
			<div className="container py-5">{props.children}</div>
		</div>
	);
});

export interface NavLinkProps {
	href?: string;
	target?: string;
	rel?: string;
	className?: string;
	children?: React.ReactNode;
}

export const NavLink: React.FC<NavLinkProps> = props => {
	return (
		<Nav.Link href={props.href} target={props.target} rel={props.rel}>
			<span className={`nav-item lead ${props.className ?? ''}`}>
				{props.children}
			</span>
		</Nav.Link>
	);
};

