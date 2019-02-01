import { observable } from 'mobx';

export default class TableStore {

  @observable assigned = true;
  @observable columnHead = ["Name", "Age", "Occupation", "Health", "Assigned"];
  @observable data = [
    {
      name: "Kurtok",
      age: "13",
      occupation: "Miner",
      health: [3,5],
      assigned: "Digging",
    },{
      name: "Red",
      age: "3",
      occupation: "Infant",
      health: [1,2],
      assigned: "Child",
    },
  ];

  getColumnHead() {
    return this.columnHead;
  }

  getData() {
    return this.data;
  }

  getAssigned() {
    return this.assigned;
  }

}