import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Button, Tooltip, Fade } from '@material-ui/core';
import TimeIcon from '@material-ui/icons/timelapse';

import store from '../stores/Store';
 
@observer
export default class PageControls extends Component {

  handleTurnContinue = () => {
    store.table.assigned = false;
  }

  render() {
    return (
      <div className="turnButton">
        <Tooltip
          TransitionComponent={Fade}
          title={store.table.getAssigned() ? "" : "You must assign all Kobolds before continuing, boss!"}
          enterDelay={500}
          leaveDelay={200}
        >
          <span>
            <Button
              variant="contained"
              color="primary"
              disabled={!store.table.getAssigned()}
              onClick={this.handleTurnContinue}
            >
              <TimeIcon />
              Next Turn
            </Button>
          </span>
        </Tooltip>
      </div>
    );
  }
}
