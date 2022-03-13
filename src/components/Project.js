import React from 'react';

// clase #194 seccion 15

export const Project = ({ p }) => {
	const modal = (e) => {
		var projects = document.querySelectorAll('.project');
		const activeProject = (e) => {
			projects.forEach((p) => p.classList.remove('active'));
			// this.classList.add('active');
		};

		projects.forEach((pro) => {
			pro.addEventListener('mouseover', activeProject);
		});
	};

	const closeModal = (e) => {
		var projects = document.querySelectorAll('.project');
		projects.forEach((p) => p.classList.remove('active'));
	};

	return (
		<div className="project active" onMouseOut={closeModal} onMouseOver={modal}>
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
			<div className="modal-project-info">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
				asperiores explicabo possimus iure voluptas quis necessitatibus quae,
				molestias neque hic commodi quas deserunt sit tenetur enim totam?
				Dolores quasi quisquam eos nisi totam aspernatur magni. Odit sunt at
				aperiam sapiente quam. Sit, neque autem at amet a aperiam aliquid illum,
				culpa ex officia consequatur enim consectetur, vel perferendis ipsam
				ipsa! Voluptatem ducimus deleniti distinctio! Iste quia error architecto
				reiciendis provident impedit maxime, unde fugiat vero praesentium ex
				sint! Ullam, ducimus neque atque et quidem eum, numquam nostrum eligendi
				porro est dignissimos nemo laboriosam eos sapiente soluta architecto
				voluptatum? Molestias, est!
			</div>
		</div>
	);
};
