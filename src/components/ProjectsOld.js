import React from 'react';
import { projectsAPI } from '../data/projectsApi';
import { Project } from './Project';
export const Projects = () => {
	return (
		<section className="section-projects">
			<section className="section-title">
				<h3>Projects</h3>
			</section>
			<div className="projects">
				{projectsAPI.map((p) => (
					<Project p={p} />
				))}
			</div>
		</section>
	);
};
