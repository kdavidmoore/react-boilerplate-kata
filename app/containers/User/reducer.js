import { fromJS } from 'immutable';
import {
  CHANGE_NAME,
	OPEN_MODAL,
	CLOSE_MODAL,
} from './constants';
import {
  DEFAULT_NAME,
} from '../App/constants'; // eslint-disable-line

const initialState = fromJS({
  userName: DEFAULT_NAME,
	open: false,
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
		default:
      return state;
  }
}

export default userReducer;
