import 'react-native-gesture-handler';
import * as React from 'react';

import CategoryCard from '../../components/CategoryCard';

import categories from '../../utils/categories';
import HomeWrapper from './styles';
import { CategoryInterface } from '../../types/common';

const renderCategoryCards = (categoriesArr: CategoryInterface[]) =>
  categoriesArr.map((category: CategoryInterface) => (
    <CategoryCard key={category.title} title={category.title} icon={category.icon} />
  ));

const Home = () => <HomeWrapper>{renderCategoryCards(categories)}</HomeWrapper>;

export default Home;
