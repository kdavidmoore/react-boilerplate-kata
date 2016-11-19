import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { selectName, selectModal } from './selectors';
import * as actions from './actions';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { List, ListItem } from 'material-ui/List';
import TextField from 'material-ui/TextField';

import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

export class User extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
	handleChange = (e) => {
		this.props.changeName(e.target.value);
	}

	renderLetters = (name) => {
		let label;
		if (name && name.length > 0) {
			const letters = name.split(' ');
			return letters.map((letter, index) => {
				switch (index) {
					case 0:
						label = 'First Name: ';
						break;
					case (letters.length-1):
						label = 'Last Name: ';
						break;
					default:
						label = 'Middle Name:';
				}

				return <ListItem
					key={index}
					primaryText={label}
					secondaryText={letter}
				/>
			});
		}
	}

	handleOpen = () => {
		this.openModal();
	}

	handleClost = () => {
		this.closeModal();
	}

	render() {
		const { userName, open } = this.props;
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
						{this.renderLetters(userName)}
					</List>
					<RaisedButton label="Submit" onClick={this.handleOpen} />
					<Dialog
						title="Confirm Submission"
						modal={false}
						open={open}
						onRequestClose={this.handleClose}
					>
						Please confirm your submission:
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

export default connect(mapStateToProps, actions)(User);
