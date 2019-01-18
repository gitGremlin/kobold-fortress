import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import TopBar from '../components/TopBar';
import UnitTable from '../components/UnitTable'
import materialThemeConfig from '../../client/theme/material.theme.config';

import "../../client/styles/main.scss";

const muiTheme = createMuiTheme(materialThemeConfig);

export default class Index extends Component {
  render() {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <TopBar />
        <UnitTable />
      </MuiThemeProvider>
    );
  }
}
