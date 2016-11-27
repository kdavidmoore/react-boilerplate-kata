import { createSelector } from 'reselect';
import { toJS } from 'immutable';

const selectUser = () => (state) => state.get('user');

const selectName = () => createSelector(
  selectUser(),
  (userState) => userState.get('userName')
);

const selectModal = () => createSelector(
	selectUser(),
	(userState) => userState.get('open')
);

const selectUsers = () => createSelector(
  selectUser(),
  (userState) => userState.get('users').toJS()
);

export {
	selectUser,
	selectName,
	selectModal,
  selectUsers,
};
