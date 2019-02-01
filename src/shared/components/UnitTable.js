import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';

import Store from '../stores/Store';

@observer
export default class UnitTable extends Component {

  generateHeaders = () => {
    let headers = [];
    Store.table.getColumnHead().map(head => {
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
    Store.table.getKoboldData().map(kobold => {
      rowData.push(
        <TableRow>
          <TableCell>{kobold.name || "Nameless"}</TableCell>
          <TableCell>{kobold.species || "Kobold"}</TableCell>
          <TableCell>{kobold.age || "Unknown"}</TableCell>
          <TableCell>
            {!kobold.skills ?
              "Unskilled"
              :
              kobold.skills.map(skill => {
                return <div>
                  {skill}
                </div>
              })
            }
          </TableCell>
          <TableCell>{!kobold.health ? "Unknown" : kobold.health[0] + '/' + kobold.health[1]}</TableCell>
          <TableCell>{kobold.status || "Fine"}</TableCell>
          <TableCell>{kobold.assigned || "Unassigned"}</TableCell>
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
