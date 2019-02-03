import { action } from 'mobx';
import { get } from 'lodash';

import Store from '../stores/Store';

class AssignmentActions {

  @action
  setAssignment(assignment, koboldIndex) {
    Store.table.koboldData[koboldIndex].assignment = assignment;
  }

  @action
  getAssignment(koboldIndex) {
    return Store.table.koboldData[koboldIndex].assignment;
  }

  @action
  checkAssignment(job, koboldIndex) {
    const kobold = Store.table.koboldData[koboldIndex];
    if(kobold.status === 'DEAD') {
      if(job.title === "None") {
        return true;
      } else {
        return false;
      }
    }
    if(job.allowedBy.child && job.allowedBy.unskilled) return true;
    if(!job.allowedBy.child && this.isChild(kobold)) return false;
    if(!job.allowedBy.skilled && kobold.skills.length === 0) return false;

    return true;
  }

  isChild(kobold) {
    return kobold.age < 11;
  }

}

export default new AssignmentActions;
