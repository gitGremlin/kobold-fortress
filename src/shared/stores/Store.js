import { observable } from 'mobx';

import Page from './PageStore';
import Table from './TableStore';

class Store {
  constructor() {
    this.reset();
  }

  reset() {
    console.log('Store is being reset to default settings...');

    this.page = new Page;
    this.table = new Table;

    console.log('Store has been reset!');
  }
  
  // Page Control
  @observable page;

  // Table Control
  @observable table;

}

const store = new Store();                       // Normal Mode
// const store = window.store = new Store();     // Debug Mode

export default store;
