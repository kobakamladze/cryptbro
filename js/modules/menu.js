"use strict";

function menu() {
	const body = document.querySelector(`body`),
		menuOpenButton = document.querySelector(`.header__menu-open`),
		menu = document.querySelector(`.adaptive`),
		menuCloseButton = document.querySelector(`.adaptive-close`);

	function showMenu() {
		menu.classList.add(`adaptive_active`);
		body.style.overflow = `hidden`;
	}

	function hideMenu() {
		menu.classList.remove(`adaptive_active`);
		body.style.overflowY = `scroll`;
	}

	menuOpenButton.addEventListener(`click`, showMenu);

	menuCloseButton.addEventListener(`click`, hideMenu);
}

menu();

export default menu;