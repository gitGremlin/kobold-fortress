import { observable } from 'mobx';

import Table from './TableStore';

class Store {
  constructor() {
    this.reset();
  }

  reset() {
    console.log('Store is being reset to default settings...');

    this.table = new Table;

    console.log('Store has been reset!');
  }

  // Table Control
  @observable table;

}

const store = new Store();                       // Normal Mode
// const store = window.store = new Store();     // Debug Mode

export default store;
