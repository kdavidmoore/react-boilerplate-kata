import { fromJS } from 'immutable';

import {
  CHANGE_NAME,
	OPEN_MODAL,
	CLOSE_MODAL,
  ADD_USER,
} from './constants';

import {
  DEFAULT_NAME,
} from '../App/constants'; // eslint-disable-line

const initialState = fromJS({
  userName: DEFAULT_NAME,
	open: false,
  users: [],
});

function userReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return state
        .set('userName', action.userName);
		case OPEN_MODAL:
			return state
				.set('open', action.open);
		case CLOSE_MODAL:
			return state
				.set('open', action.open);
    case ADD_USER:
      console.log('should be adding a new user...');
      return state
        .update('users', users => users.push(action.userName));
    default:
      return state;
  }
}

export default userReducer;
