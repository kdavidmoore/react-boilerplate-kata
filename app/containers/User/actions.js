import {
	CHANGE_NAME,
  ADD_ROLE,
  REMOVE_ROLE,
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

export function addRole(role) {
	return {
		type: ADD_ROLE,
		role: role,
	};
}

export function removeRole(role) {
  return {
    type: REMOVE_ROLE,
    role: role,
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

export function addUser(userName, roles) {
  return {
    type: ADD_USER,
    userName: userName,
    roles: roles,
  };
}
