import { observable } from 'mobx';

export default class AssignmentStore {

  @observable list = [
    'Breed',
    'Butcher',
    'Cook',
    'Dig',
    'Doctor',
    'Learn',
    'Mine',
    'Teach',
    'Worship',
    'None',
  ];

}