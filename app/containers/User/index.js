import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { selectName, selectModal } from './selectors';
import * as actionCreators from './actions';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { List, ListItem } from 'material-ui/List';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

export class User extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
	handleChange = (e) => {
		this.props.changeName(e.target.value);
	}

	renderWords = (name) => {
		let label;
		if (name && name.length > 0) {
			const words = name.split(' ');
			return words.map((word, index) => {
				switch (index) {
					case 0:
						label = 'First Name:';
						break;
					case (words.length - 1):
						label = 'Last Name:';
						break;
					default:
						label = 'Middle Name:';
				}

				return <ListItem
					key={index}
					primaryText={label}
					secondaryText={word}
				/>
			});
		}
	}

	handleOpen = () => {
		this.props.openModal();
	}

	handleClose = () => {
		this.props.closeModal();
	}

	render() {
		const { userName, open } = this.props;
    const modalActions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onClick={this.handleClose}
      />,
    ];

    return (
			<div style={{ padding: '20px' }}>
				<form onSubmit={this.handleSubmit}>
					<h1>
						<FormattedMessage {...messages.header} />
					</h1>
					<TextField
						id="change-user-name"
						defaultValue={userName}
						onChange={this.handleChange}
					/><br />
					<List>
						{this.renderWords(userName)}
					</List>
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
				</form>
			</div>
    );
  }
}

User.propTypes = {
	userName: React.PropTypes.string,
	messages: React.PropTypes.object,
	open: React.PropTypes.bool,
};

const mapStateToProps = createSelector(
  selectName(),
	selectModal(),
  (userName, open) => ({ userName, open })
);

export default connect(mapStateToProps, actionCreators)(User);
