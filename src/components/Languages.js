import React from 'react';
import { idiomas } from '../data/languages';
import { Language } from './Language';
export const Languages = () => {
	const GoToTheLeft = (e) => {
		const carrouselLanguages = document.getElementById('languages');
		carrouselLanguages.scrollLeft -= carrouselLanguages.offsetWidth;
		if (carrouselLanguages.scrollLeft <= 0) {
			document.getElementById('btn-left').style.display = 'none';
		} else {
			document.getElementById('btn-left').style.display = 'flex';
		}
		if (
			carrouselLanguages.scrollLeft + carrouselLanguages.offsetWidth >=
			carrouselLanguages.scrollWidth
		) {
			document.getElementById('btn-right').style.display = 'none';
		} else {
			document.getElementById('btn-right').style.display = 'flex';
		}
		console.log(carrouselLanguages.scrollLeft);
		// alert(
		// 	carrouselLanguages.scrollLeft +
		// 		'- ' +
		// 		carrouselLanguages.offsetWidth +
		// 		' - ' +
		// 		carrouselLanguages.scrollWidth
		// );
		// if (carrouselLanguages.scrollLeft === 0) {
		// 	console.log('no se puede ir mas para atras');
		// 	document.getElementById('btn-left').style.display = 'none';
		// } else {
		// }
	};

	const GoToTheRight = async (e) => {
		const carrouselLanguages = document.getElementById('languages');
		carrouselLanguages.scrollLeft += await carrouselLanguages.offsetWidth;
		console.log(carrouselLanguages.scrollLeft);
		if (carrouselLanguages.scrollLeft === 0) {
			document.getElementById('btn-left').style.display = 'none';
		} else {
			document.getElementById('btn-left').style.display = 'flex';
		}
		if (
			carrouselLanguages.scrollLeft + carrouselLanguages.offsetWidth >=
			carrouselLanguages.scrollWidth
		) {
			document.getElementById('btn-right').style.display = 'none';
		} else {
			document.getElementById('btn-right').style.display = 'flex';
		}
		// alert(
		// 	carrouselLanguages.scrollLeft +
		// 		'- ' +
		// 		carrouselLanguages.offsetWidth +
		// 		' - ' +
		// 		carrouselLanguages.scrollWidth
		// );
		// console.log(carrouselLanguages.scrollWidth);
		// console.log(carrouselLanguages.scrollWidth - carrouselLanguages.scrollLeft);

		// if (carrouselLanguages.scrollLeft === 0) {
		// 	console.log('no se puede ir mas para atras');
		// 	document.getElementById('btn-left').style.display = 'none';
		// } else {
		// 	document.getElementById('btn-left').style.display = 'flex';
		// }
	};

	return (
		<div>
			<div className="languages" id="languages">
				<button
					className="btn btn-left-carrousel"
					onClick={GoToTheLeft}
					id="btn-left"
					style={{ display: 'none' }}
				>
					<i className="fa fa-angle-double-left" aria-hidden="true"></i>
				</button>
				{idiomas.map((l) => (
					<Language l={l} key={l.id} />
				))}
				<button
					onClick={GoToTheRight}
					className="btn btn-right-carrousel"
					id="btn-right"
				>
					<i className="fa fa-angle-double-right" aria-hidden="true"></i>
				</button>
			</div>
		</div>
	);
};
