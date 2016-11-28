import { fromJS } from 'immutable';

import {
  CHANGE_NAME,
  ADD_ROLE,
  REMOVE_ROLE,
	OPEN_MODAL,
	CLOSE_MODAL,
  ADD_USER,
} from './constants';

import {
  DEFAULT_NAME,
} from '../App/constants'; // eslint-disable-line

const initialState = fromJS({
  userName: DEFAULT_NAME,
  roles: [],
	open: false,
  users: [],
});

function userReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return state
        .set('userName', action.userName);
    case ADD_ROLE:
      return state
        .update('roles', roles => roles.concat([action.role]));
    case REMOVE_ROLE:
      return state
        .update('roles', roles => roles.filter((role) => role !== action.role));
    case OPEN_MODAL:
			return state
				.set('open', action.open);
		case CLOSE_MODAL:
			return state
				.set('open', action.open);
    case ADD_USER:
      let id;
      let lastUser = state.get('users').last();

      if (lastUser) {
        id = lastUser.id + 1;
      } else {
        id = 0;
      }

      let newUser = {
        id: id,
        name: action.userName,
        roles: action.roles
      };

      return state
        .update('users', users => users.concat([newUser]));
    default:
      return state;
  }
}

export default userReducer;
