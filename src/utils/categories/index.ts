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
  },
  {
    title: 'Banks',
    icon: faPiggyBank,
  },
  {
    title: 'Mental Health',
    icon: faSmile,
  },
];

export default categoriesData;
