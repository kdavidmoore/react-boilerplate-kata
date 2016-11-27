import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { selectName, selectModal, selectUsers } from './selectors';
import * as actionCreators from './actions';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { List, ListItem } from 'material-ui/List';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import UsersTable from './UsersTable';

const container = {
  padding: '20px'
};

export class User extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
	handleNameChange = (e) => {
		this.props.changeName(e.target.value);
	}

  handleSubmit = (e) => {
    this.props.addUser(e);
    this.props.closeModal();
  }

	handleOpen = () => {
		this.props.openModal();
	}

	handleClose = () => {
		this.props.closeModal();
	}

  renderUsersTable = (users) => {
    if (users && users.length > 0) {
      return <UsersTable data={users} />
    }
  }

	render() {
		const { userName, open, users } = this.props;
    const modalActions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={() => this.handleSubmit(userName)}
      />,
    ];

    return (
			<div style={container}>
				<h1>
					<FormattedMessage {...messages.header} />
				</h1>

				<TextField
					id="change-user-name"
					defaultValue={userName}
					onChange={this.handleNameChange}
				/>&nbsp;&nbsp;

        <RaisedButton label="Submit" onClick={this.handleOpen} />

				<Dialog
					title="Confirm Submission"
          actions={modalActions}
					modal={true}
					open={open}
				>
					Please confirm your submission:<br />
					{userName}
				</Dialog>

        <h1>Manage Users</h1>
        {this.renderUsersTable(users)}
			</div>
    );
  }
}

User.propTypes = {
  messages: React.PropTypes.object,
	userName: React.PropTypes.string,
	open: React.PropTypes.bool,
  users: React.PropTypes.array,
};

const mapStateToProps = createSelector(
  selectName(),
	selectModal(),
  selectUsers(),
  (userName, open, users) => ({ userName, open, users })
);

export default connect(mapStateToProps, actionCreators)(User);
