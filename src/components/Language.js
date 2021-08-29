import React from 'react';
// import English from '../data/img/1.png'; //  forma para una sola  imagen

// const languagesImages = require.context('../data/img', true);

// const kkkk = require.context('../data/img');

export const Language = ({ l }) => {
	return (
		<div className="language">
			<img src={`../assets/img/${l.id}.png`} width="50" alt={l.name} />
			{/* <img src={kkkk(`./${l.id}.png`)} alt={l.name} /> */}
			<div className="body">
				<h3 className="name"> {l.name} </h3>
				<div className="detail">
					<span className="speaking-level">
						<span>
							<i> speaking </i>
						</span>
						<span> {l.speakingLevel}% </span>
					</span>
					<span className="writting-level">
						<span>
							<i> writting </i>
						</span>
						<span> {l.writtingLevel}% </span>
					</span>
					<span className="listenning-level">
						<span> Listenning </span>
						<span> {l.listenningLevel}% </span>
					</span>
				</div>
			</div>
		</div>
	);
};
