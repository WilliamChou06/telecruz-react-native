import {
  faPiggyBank,
  faFirstAid,
  faSmile,
} from '@fortawesome/free-solid-svg-icons';

import { CategoryInterface } from '../../types/common';

const categoriesData: CategoryInterface[] = [
  {
    title: 'Emergency',
    icon: faFirstAid,
    phoneNumbers: [
      {
        name: 'Police',
        phoneNumber: '110',
      },
      {
        name: 'Ambulance',
        phoneNumber: '118',
      },
      {
        name: 'Fire Department',
        phoneNumber: '112',
      },
      {
        name: 'Civil Protection',
        phoneNumber: '114',
      },
      {
        name: 'National Police',
        phoneNumber: '120',
      },
    ],
  },
  {
    title: 'Banks',
    icon: faPiggyBank,
    phoneNumbers: [
      {
        name: 'Banco Mercantil',
        phoneNumber: '75031-3540384',
      },
    ],
  },
  {
    title: 'Mental Health',
    icon: faSmile,
    phoneNumbers: [
      {
        name: 'Hospital Mental',
        phoneNumber: '645032-4465',
      },
    ],
  },
];

export default categoriesData;
