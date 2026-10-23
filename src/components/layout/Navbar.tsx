import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import {
	Sheet,
	SheetTrigger,
	SheetContent,
	SheetHeader,
	SheetTitle,
} from '@/components/ui/sheet';
import { ResumeNavLink } from '@/components/resume/ResumeNavLink';

export interface NavbarProps {
	heroTitleRef?: React.RefObject<HTMLElement | null>;
}

export const Navbar: React.FC<NavbarProps> = ({ heroTitleRef }) => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const target = heroTitleRef?.current;
		if (!target) {
			const handleScroll = () => {
				setIsScrolled(window.scrollY > 80);
			};
			window.addEventListener('scroll', handleScroll, { passive: true });
			handleScroll();
			return () => window.removeEventListener('scroll', handleScroll);
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				setIsScrolled(!entry.isIntersecting);
			},
			{ threshold: 0.1 }
		);

		observer.observe(target);
		return () => observer.disconnect();
	}, [heroTitleRef]);

	const baseUrl = import.meta.env.BASE_URL;

	const navItems = [
		{ label: 'About', href: `${baseUrl}#aboutme` },
		{ label: 'Experience', href: `${baseUrl}#experiences` },
		{ label: 'Projects', href: `${baseUrl}#projects` },
		{ label: 'Skills', href: `${baseUrl}#skills` },
		{ label: 'Talents', href: `${baseUrl}#talents` },
	];

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
				isScrolled
					? 'bg-[rgba(234,236,239,0.92)] shadow-sm backdrop-blur-sm'
					: 'bg-transparent'
			}`}
		>
			<div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
				<a
					href={`${baseUrl}#home`}
					className="text-xl font-medium tracking-tight text-[#212529] hover:opacity-80 transition-opacity"
				>
					{'<Anmol />'}
				</a>

				{/* Desktop Navigation */}
				<nav className="hidden items-center gap-8 lg:flex">
					<a
						href={`${baseUrl}#aboutme`}
						className="text-lead font-light text-[#212529] hover:text-[#0d6efd] transition-colors"
					>
						About
					</a>
					<a
						href={`${baseUrl}#experiences`}
						className="text-lead font-light text-[#212529] hover:text-[#0d6efd] transition-colors"
					>
						Experience
					</a>
					<ResumeNavLink />
					<a
						href={`${baseUrl}#projects`}
						className="text-lead font-light text-[#212529] hover:text-[#0d6efd] transition-colors"
					>
						Projects
					</a>
					<a
						href={`${baseUrl}#skills`}
						className="text-lead font-light text-[#212529] hover:text-[#0d6efd] transition-colors"
					>
						Skills
					</a>
					<a
						href={`${baseUrl}#talents`}
						className="text-lead font-light text-[#212529] hover:text-[#0d6efd] transition-colors"
					>
						Talents
					</a>
				</nav>

				{/* Mobile Navigation Sheet */}
				<div className="lg:hidden">
					<Sheet open={isOpen} onOpenChange={setIsOpen}>
						<SheetTrigger
							render={props => (
								<button
									{...props}
									aria-label="Toggle Navigation Menu"
									className="rounded-md p-2 text-[#212529] hover:bg-black/5 focus:outline-none"
								>
									{isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
								</button>
							)}
						/>
						<SheetContent side="right" className="w-72 bg-white p-6">
							<SheetHeader className="mb-6 text-left">
								<SheetTitle className="text-lg font-medium text-[#212529]">
									{'<Anmol />'}
								</SheetTitle>
							</SheetHeader>
							<div className="flex flex-col gap-5">
								{navItems.map(item => (
									<a
										key={item.label}
										href={item.href}
										onClick={() => setIsOpen(false)}
										className="text-lead font-light text-[#212529] hover:text-[#0d6efd] transition-colors"
									>
										{item.label}
									</a>
								))}
								<ResumeNavLink onClick={() => setIsOpen(false)} />
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
};

export default Navbar;

