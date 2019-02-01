import React, { Component } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';

import store from '../stores/Store';

export default class TopBar extends Component {

  generateHeaders = () => {
    let headers = [];
    store.table.getColumnHead().map(head => {
      headers.push(
        <TableCell>
          {head}
        </TableCell>
      )
    });
    return headers;
  }

  generatorRows = () => {
    let rowData = [];
    store.table.getData().map(kobold => {
      rowData.push(
        <TableRow>
          <TableCell>{kobold.name}</TableCell>
          <TableCell>{kobold.age}</TableCell>
          <TableCell>{kobold.occupation}</TableCell>
          <TableCell>{kobold.health[0] + '/' + kobold.health[1]}</TableCell>
          <TableCell>{kobold.assigned}</TableCell>
        </TableRow>
      )
    });
    return rowData;
  }

  render() {
    return (
      <div className="unitTable">
        <Table>
          <TableHead>
            <TableRow>
              {this.generateHeaders()}
            </TableRow>
          </TableHead>
          <TableBody>
            {this.generatorRows()}
          </TableBody>
        </Table>
      </div>
    );
  }
}
