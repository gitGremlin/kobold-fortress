import { observable } from 'mobx';

export default class AssignmentStore {

  @observable list = [
    {
      title: 'Adventure',
      allowedBy: {
        child: false,
        unskilled: true,
      },
      description: 'Send this Kobold out into the wilderness and have it attempt to find loot.',
    },
    {
      title: 'Breed',
      allowedBy: {
        child: false,
        unskilled: true,
      },
      description: 'We have a chance to gain a clutch of eggs for every two Kobolds that are designated breeders.',
    },
    {
      title: 'Cook',
      allowedBy: {
        child: false,
        unskilled: true,
      },
      description: 'Bring the food collected by the farmers and make them stretch a little further.',
    },
    {
      title: 'Dig',
      allowedBy: {
        child: false,
        unskilled: true,
      },
      description: 'Take this Kobold to the warrens and have it dig out more living space.',
    },
    {
      title: 'Doctor',
      allowedBy: {
        child: false,
        unskilled: true,
      },
      description: 'Treat the sick and the wounded in order to keep them going a little longer.',
    },
    {
      title: 'Farm',
      allowedBy: {
        child: false,
        unskilled: true,
      },
      description: 'Spend a year serving as a farmer in the great mushroom fields.',
    },
    {
      title: 'Learn',
      allowedBy: {
        child: true,
        unskilled: true,
      },
      description: 'Listen to the designated teaching Kobolds and hopefully learn new skills.',
    },
    {
      title: 'Mine',
      allowedBy: {
        child: false,
        unskilled: true,
      },
      description: 'Take this Kobold to the mines and have it try to find gold and other minerals.',
    },
    {
      title: 'Research',
      allowedBy: {
        child: false,
        unskilled: false,
      },
      description: "Use this Kobold's skills to examine new technologies.",
    },
    {
      title: 'Sacrifice',
      allowedBy: {
        child: true,
        unskilled: true,
      },
      description: 'Take this Kobold to the altar of the Great Dragon and spill its blood for his divine blessing.',
    },
    {
      title: 'Teach',
      allowedBy: {
        child: false,
        unskilled: false,
      },
      description: 'Bring this Kobold to the community to try to impart some of its knowledge.',
    },
    {
      title: 'Worship',
      allowedBy: {
        child: true,
        unskilled: true,
      },
      description: 'The Kobold will donate this year offering holy service to the Great Dragon.',
    },
    {
      title: 'None',
      allowedBy: {
        child: true,
        unskilled: true,
      },
      description: 'Have the Kobold do nothing important this year.',
    },
  ];

}