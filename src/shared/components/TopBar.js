import React, { Component } from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';

export default class TopBar extends Component {
  render() {
    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h5" color="inherit">
              {/* TODO: Store of text for page */}
              Kobold Fortress
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
