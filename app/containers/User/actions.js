import {
	CHANGE_NAME,
	OPEN_MODAL,
	CLOSE_MODAL,
} from './constants';

export function changeName(userName) {
	return {
		type: CHANGE_NAME,
		userName: userName,
	};
}

export function openModal() {
	return {
		type: OPEN_MODAL,
		open: true,
	};
}

export function closeModal() {
	return {
		type: CLOSE_MODAL,
		open: false,
	};
}
