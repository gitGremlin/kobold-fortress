import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import TopBar from '../components/TopBar'
import materialThemeConfig from '../../client/theme/material.theme.config';

const muiTheme = createMuiTheme(materialThemeConfig);

export default class Index extends Component {
  render() {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <div className="App">
          <TopBar />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </MuiThemeProvider>
    );
  }
}
