import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import ControlDialog from '../components/Dialog';
import MenuDrawer from '../components/Drawer';
import TopBar from '../components/TopBar';
import UnitTable from '../components/UnitTable';
import PageControls from '../components/PageControls';
import materialThemeConfig from '../../client/theme/material.theme.config';

import "../../client/styles/main.scss";

const muiTheme = createMuiTheme(materialThemeConfig);

export default class Index extends Component {
  render() {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <ControlDialog />
        <MenuDrawer />
        <TopBar />
        <UnitTable />
        <PageControls />
      </MuiThemeProvider>
    );
  }
}
