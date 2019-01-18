import { observable } from 'mobx';

export default class TableStore {

  @observable columnHead = {};
  @observable rows = {};

  getColumnHead() {
    return this.columnHead;
  }

  getRows() {
    return this.rows;
  }

}