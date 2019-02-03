import React, { Component } from 'react';
import { Select, MenuItem } from '@material-ui/core';

import Store from '../stores/Store';
import AssignmentActions from '../actions/AssignmentActions';

export default class AssignmentSelect extends Component {
  constructor() {
    super();
  }

  handleChange = (event) => {
    AssignmentActions.setAssignment(event.target.value, this.props.koboldIndex)
  }

  render() {
    return (
      <div>
        <Select
          value={this.props.assignment}
          onChange={this.handleChange}
        >
          {Store.assignment.list.map((job, index) => {
            if(AssignmentActions.checkAssignment(job, this.props.koboldIndex)){
              return (
                <MenuItem
                  value={job.title}
                  key={index}
                >
                  {job.title}
                </MenuItem>
              )}
          })}
        </Select>
      </div>
    );
  }
}
