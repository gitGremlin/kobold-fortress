import React, { Component } from 'react';
import { Dialog } from '@material-ui/core';

export default class ControlDialog extends Component {
  render() {
    return (
      <div>
        <Dialog
          open={false}
        >
          Example Text
        </Dialog>
      </div>
    );
  }
}
