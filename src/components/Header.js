import React from 'react';

export const Header = () => {
	const toggleMenu = (e) => {
		// document.querySelector('.menu-hamberger').classList.toggle('active');
		e.target.classList.toggle('active');
		document.querySelector('#menu-mobile').classList.toggle('active');
	};
	// document.onClick((e) => {
	// 	alert('hi');
	// });
	document.onClick = () => {
		console.log('uiu');
		alert('hi');
	};
	return (
		<div className="header" id="header">
			<div className="menu-mobile" id="menu-mobile">
				<ul className="menu-list-mobile">
					<li>
						<a href="/ghgh"> Skills </a>
					</li>
					<li>
						<a href="#languages"> Lenguages </a>
					</li>
					<li>
						<a href="#footer"> Projects </a>
					</li>
				</ul>
			</div>
			<div className="menu">
				<img src="../assets/img/hilaire.png" width="100" alt="" />
				<ul className="menu-list">
					<li>
						<a href="/ghgh"> Skills </a>
					</li>
					<li>
						<a href="#languages"> Lenguages </a>
					</li>
					<li>
						<a href="#footer"> Projects </a>
					</li>
				</ul>
				<div
					onClick={toggleMenu}
					// style={{ display: 'none' }}
					className="menu-hamberger"
				></div>
			</div>
			<div className="content-header">
				<a href="5493417207882">+5493417207882</a>
			</div>
		</div>
	);
};
