import { observable, computed } from 'mobx';

export default class TableStore {

  @observable columnHead = ["Name", "Species", "Age", "Skills", "Health", "Status", "Assigned"];
  @observable koboldData = [
    {
      name: "Kurtok",
      species: "Dragonwrought",
      age: 130,
      skills: ["Miner", "Warrior"],
      health: [3,5],
      status: null,
      assigned: "Digging",
    },{
      name: "Octok",
      age: 50,
      species: "Kobold",
      skills: ["Warrior", "Cook", "Bard", "Pro Blood Bowl"],
      health: [3,5],
      status: null,
      assigned: "Cooking",
    },{
      name: "CRX",
      age: 63,
      species: "Kobold",
      skills: ["Butcher", "Medic"],
      health: [0,2],
      status: "DEAD",
      assigned: "-",
    },{
      name: "Red",
      age: 3,
      species: "Dragonwrought",
      skills: null,
      health: [1,2],
      status: null,
      assigned: "Learning",
    },{
      name: "Old Kobold",
      age: 80,
      species: "Kobold",
      skills: ["Library Use"],
      health: [3,3],
      status: null,
      assigned: "Teaching",
    },
  ];

  getColumnHead() {
    return this.columnHead;
  }

  getKoboldData() {
    return this.koboldData;
  }

  @computed get assigned() {
    if(!this.koboldData) return false;

    let assignmentArray = [];
    for (var kobold in this.koboldData) {
      assignmentArray.push(this.koboldData[kobold].assigned)
    }

    return assignmentArray.indexOf(null) === -1;
  }
}