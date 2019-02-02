import { action } from 'mobx';

import Store from '../stores/Store';

class TableActions {

  @action
  clearAssigned() {
    for(var kobold in Store.table.koboldData) {
      Store.table.koboldData[kobold].assigned = null;
    }
  }

}

export default new TableActions;
