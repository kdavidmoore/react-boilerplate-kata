import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { selectName, selectRoles, selectModal, selectUsers } from './selectors';
import * as actionCreators from './actions';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { List, ListItem } from 'material-ui/List';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
// import { Grid, Row, Col } from 'react-flexbox-grid';
import UsersTable from './UsersTable';

const styles = {
  grid: {
    padding: 20,
    width: '100%',
    maxWidth: 1200,
  },
  row: {

  },
  col: {
    width: '50%',
    float: 'left',
    minHeight: 1,
  },
  checkbox: {
    marginBottom: 16,
  },
};

export class User extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
	handleNameChange = (e) => {
		this.props.changeName(e.target.value);
	}

  handleCheckboxChange = (e, isChecked) => {
    if (isChecked === true) {
      this.props.addRole('admin');
    } else {
      this.props.removeRole('admin');
    }
  }

  handleSubmit = (userName, roles) => {
    this.props.addUser(userName, roles);
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
		const { userName, roles, open, users } = this.props;
    const modalActions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={() => this.handleSubmit(userName, roles)}
      />,
    ];

    return (
			<div>
        <div style={styles.grid}>
          <div style={styles.row}>
            <div style={styles.col}>
    				  <h1>
    					  <FormattedMessage {...messages.header} />
    				  </h1>

      				<TextField
      					id="user-name"
      					defaultValue={userName}
      					onChange={this.handleNameChange}
      				/>

              <div>
                <h3>Roles</h3>
                <Checkbox
                  label="admin"
                  style={styles.checkbox}
                  onCheck={this.handleCheckboxChange}
        				/>
              </div>

              <RaisedButton label="Submit" onClick={this.handleOpen} />
            </div>

            <div style={styles.col}>
              <h1>Manage Users</h1>
              {this.renderUsersTable(users)}
            </div>
          </div>
        </div>

        <Dialog
          title="Confirm Submission"
          actions={modalActions}
          modal={true}
          open={open}
        >
          <h3>New User:</h3>
          <p>{userName}</p>
          <strong>Roles:</strong> {roles}
        </Dialog>
			</div>
    );
  }
}

User.propTypes = {
  messages: React.PropTypes.object,
	userName: React.PropTypes.string,
  roles: React.PropTypes.array,
	open: React.PropTypes.bool,
  users: React.PropTypes.array,
};

const mapStateToProps = createSelector(
  selectName(),
  selectRoles(),
	selectModal(),
  selectUsers(),
  (userName, roles, open, users) => ({ userName, roles, open, users })
);

export default connect(mapStateToProps, actionCreators)(User);
