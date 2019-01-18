import React, { Component } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';

import store from '../stores/Store';

export default class TopBar extends Component {
  render() {
    return (
      <div className="">
        <Table>
          <TableHead>
            <TableRow>
              {store.table.column}


              <TableCell>Name</TableCell>
              <TableCell>Race</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Kobold 1</TableCell>
              <TableCell>Mr. Kobold</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
}
