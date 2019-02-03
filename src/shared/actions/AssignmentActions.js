import { action } from 'mobx';

import Store from '../stores/Store';

class AssignmentActions {

  @action
  setAssignment(assignment, koboldIndex) {
    Store.table.koboldData[koboldIndex].assignment = assignment;
  }

}

export default new AssignmentActions;
