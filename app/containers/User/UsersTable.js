import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

export default class UsersTable extends React.PureComponent {
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Roles</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((user) =>
            <TableRow key={user.id}>
              <TableRowColumn>{user.id}</TableRowColumn>
              <TableRowColumn>{user.name}</TableRowColumn>
              <TableRowColumn>
                {user.roles ? user.roles : ''}
              </TableRowColumn>
            </TableRow>
          )}
        </TableBody>
      </Table>
    );
  }
}
