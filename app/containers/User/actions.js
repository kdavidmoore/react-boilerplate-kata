import {
	CHANGE_NAME,
	OPEN_MODAL,
	CLOSE_MODAL,
  ADD_USER,
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

export function addUser(userName) {
  return {
    type: ADD_USER,
    userName: userName
  };
}
