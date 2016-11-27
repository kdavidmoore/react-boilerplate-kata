import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

export default class UsersTable extends React.PureComponent {
  render() {
    const { data } = this.props;
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
            <TableRow>
              <TableRowColumn>{user.id}</TableRowColumn>
              <TableRowColumn>{user.name}</TableRowColumn>
              <TableRowColumn>{user.roles}</TableRowColumn>
            </TableRow>
          )}
        </TableBody>
      </Table>
    );
  }
}
