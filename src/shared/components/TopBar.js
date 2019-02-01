import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Store from '../stores/Store';

export default class TopBar extends Component {
  render() {
    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h5" color="inherit">
              {Store.page.topBar}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
