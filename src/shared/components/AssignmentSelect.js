import React, { Component } from 'react';
import { Select, MenuItem } from '@material-ui/core';

import Store from '../stores/Store';
import AssignmentActions from '../actions/AssignmentActions';

export default class AssignmentSelect extends Component {
  constructor() {
    super();
    this.state = {
      currentAssignment: "None",
    }
  }

  handleChange = (event) => {
    this.setState({
      currentAssignment: event.target.value
    });
    AssignmentActions.setAssignment(this.state.currentAssignment, this.props.koboldIndex)
  }

  componentWillMount() {
    this.state.currentAssignment = this.props.assignment
  }

  render() {
    return (
      <div>
        <Select
          value={this.state.currentAssignment}
          onChange={this.handleChange}
        >
          {Store.assignment.list.map((job, index) => {
            return (
              <MenuItem
                value={job}
                key={index}
              >
                {job}
              </MenuItem>
          )
          })}
        </Select>
      </div>
    );
  }
}
