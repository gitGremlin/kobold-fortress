import { observable } from 'mobx';

import Assignment from './AssignmentStore';
import Page from './PageStore';
import Table from './TableStore';

class Store {
  constructor() {
    this.reset();
  }

  reset() {
    console.log('Store is being reset to default settings...');

    this.assignment = new Assignment;
    this.page = new Page;
    this.table = new Table;

    console.log('Store has been reset!');
  }
  
  // Page Control
  @observable page;

  // Table Control
  @observable table;

  // Assignment Control
  @observable assignment;

}

const store = new Store();                       // Normal Mode
// const store = window.store = new Store();     // Debug Mode

export default store;
