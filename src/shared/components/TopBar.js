import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import store from '../stores/Store';

export default class TopBar extends Component {
  render() {
    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h5" color="inherit">
              {store.page.topBar}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
