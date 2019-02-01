import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Button, Tooltip, Fade } from '@material-ui/core';
import TimeIcon from '@material-ui/icons/timelapse';

import Store from '../stores/Store';
import TurnActions from '../actions/TurnActions';
 
@observer
export default class PageControls extends Component {

  handleTurnContinue = () => {
    TurnActions.advanceTurn();
    console.log(Store.table.koboldData)
  }

  render() {
    return (
      <div className="turnButton">
        <Tooltip
          TransitionComponent={Fade}
          title={Store.table.assigned ? "" : "You must assign all Kobolds before continuing, boss!"}
          enterDelay={500}
          leaveDelay={200}
        >
          <span>
            <Button
              variant="contained"
              color="primary"
              disabled={!Store.table.assigned}
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
