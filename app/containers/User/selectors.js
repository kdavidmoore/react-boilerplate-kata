import { createSelector } from 'reselect';

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
  (userState) => userState.get('users')
);

export {
	selectUser,
	selectName,
	selectModal,
  selectUsers,
};
