import { observable } from 'mobx';

import Assignment from './AssignmentStore';
import Page from './PageStore';
import Table from './TableStore';
import Turn from './TurnStore';

class Store {
  constructor() {
    this.reset();
  }

  reset() {
    console.log('Store is being reset to default settings...');

    this.assignment = new Assignment;
    this.page = new Page;
    this.table = new Table;
    this.turn = new Turn;

    console.log('Store has been reset!');
  }
  
  // Assignment Control
  @observable assignment;

  // Page Control
  @observable page;

  // Table Control
  @observable table;

  // Turn Control
  @observable turn;

}

const store = new Store();                       // Normal Mode
// const store = window.store = new Store();     // Debug Mode

export default store;
