import 'react-native-gesture-handler';
import * as React from 'react';

import CategoryCard from '../../components/CategoryCard';

import categories from '../../utils/categories';
import HomeWrapper from './styles';
import { CategoryInterface, NavigationInterface } from '../../types/common';
import { HomeProps } from './types';

const renderCategoryCards = (
  categoriesArr: CategoryInterface[],
  navigation: NavigationInterface
) =>
  categoriesArr.map((category: CategoryInterface) => (
    <CategoryCard
      onPress={() => navigation.navigate('Category View', {
        categoryName: category.title
      })}
      key={category.title}
      title={category.title}
      icon={category.icon}
    />
  ));

const Home = ({ navigation }: HomeProps) => (
  <HomeWrapper>{renderCategoryCards(categories, navigation)}</HomeWrapper>
);

export default Home;
