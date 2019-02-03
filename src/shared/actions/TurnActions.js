import { action } from 'mobx';

import Store from '../stores/Store';
import TableActions from './TableActions';

class TurnActions {

  @action
  advanceTurn() {
    let oldKoboldData = Store.table.koboldData;
    let newKoboldData = [];

    for(var kobold in oldKoboldData) {
      let newKobold = oldKoboldData[kobold]; // Absorb old Kobold data like name and species as a base
      if(newKobold.status === "DEAD") {
        // Something like store.log.sendMessage('blah');
      } else {
        newKobold.age+=1; // Age Kobold by a year


        this.checkDeath(newKobold); // See if Kobolds will die
        newKoboldData.push(newKobold);
      }
    }
    Store.table.koboldData = newKoboldData;
  }

  checkDeath(newKobold) {
    if(this.checkOldAge(newKobold.age, newKobold.species)) return this.applyDeath(newKobold);
    if(newKobold.health[0] == 0) return this.applyDeath(newKobold);
    return newKobold;
  }

  applyDeath(newKobold) {
    newKobold.status = "DEAD";
    return newKobold;
  }

  checkOldAge(age, species) {
    if((!species || species === "Kobold") && age >=60) return (Math.random()*100 + age > 120);
    return false;
  }

}

export default new TurnActions;
