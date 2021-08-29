import React from 'react';

export const Project = ({ p }) => {
	return (
		<div className="project">
			<div className="photo">
				<img src={p.photo} alt="" />
			</div>
			<div className="project-body">
				<a className="title">{p.title}</a>
				<h6 className="description">{p.description.slice(0, 50) + '...'}</h6>

				<div className="projects-languages">
					{p.languages.map((l) => (
						<span className="lan">{l}</span>
					))}
				</div>
				<div className="author">
					<div className="avatar">
						<img src={p.author.avatar} alt={p.author.name} />
					</div>
					<span className="author-name">{p.author.name}</span>
				</div>
			</div>
		</div>
	);
};
