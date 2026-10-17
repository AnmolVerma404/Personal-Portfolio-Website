import React, { useRef, useState, useEffect } from 'react';
import { Section } from '@/components/layout/Section';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';

export interface Skill {
	name: string;
	value: number;
}

const HARD_SKILLS: readonly Skill[] = [
	{ name: 'C++', value: 90 },
	{ name: 'Data Structures', value: 85 },
	{ name: 'Python', value: 70 },
	{ name: 'TypeScript', value: 70 },
	{ name: 'React', value: 65 },
	{ name: 'Agentic AI Development', value: 85 },
	{ name: 'PHP', value: 90 },
	{ name: 'DevOps', value: 50 },
];

export interface SkillsProps {}

export const Skills: React.FC<SkillsProps> = () => {
	const sectionRef = useRef<HTMLDivElement | null>(null);
	const [inView, setInView] = useState(false);

	useEffect(() => {
		const target = sectionRef.current;
		if (!target) return;

		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						setInView(true);
						observer.disconnect();
					}
				});
			},
			{ threshold: 0.15 }
		);

		observer.observe(target);

		return () => observer.disconnect();
	}, []);

	const half = Math.floor(HARD_SKILLS.length / 2);
	const col1 = HARD_SKILLS.slice(0, half);
	const col2 = HARD_SKILLS.slice(half);

	return (
		<Section id="skills" className="bg-white">
			<div ref={sectionRef}>
				<h2 className="text-display-4 mb-10 text-center text-[#212529]">
					Skills
				</h2>
				<Tabs defaultValue="hard-skills" className="w-full">
					<TabsList className="w-full justify-center bg-[#f8f9fa] border border-[#dee2e6] rounded-lg p-1">
						<TabsTrigger
							value="hard-skills"
							className="w-full py-2.5 text-lead font-light text-[#212529]"
						>
							Technical Skills
						</TabsTrigger>
					</TabsList>
					<TabsContent value="hard-skills" className="pt-8">
						<div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
							<div className="flex flex-col gap-5">
								{col1.map(item => (
									<div key={item.name} className="w-[95%]">
										<p className="text-lead text-[#212529] mb-1 font-light">
											{item.name}
										</p>
										<Progress
											value={inView ? item.value : 0}
											className="h-4 bg-[#e9ecef] rounded-md transition-all duration-1000 ease-out"
										/>
									</div>
								))}
							</div>
							<div className="flex flex-col gap-5">
								{col2.map(item => (
									<div key={item.name} className="w-[95%]">
										<p className="text-lead text-[#212529] mb-1 font-light">
											{item.name}
										</p>
										<Progress
											value={inView ? item.value : 0}
											className="h-4 bg-[#e9ecef] rounded-md transition-all duration-1000 ease-out"
										/>
									</div>
								))}
							</div>
						</div>
					</TabsContent>
				</Tabs>
			</div>
		</Section>
	);
};

export default Skills;

