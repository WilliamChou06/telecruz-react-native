import 'react-native-gesture-handler';
import * as React from 'react';
import { Linking } from 'react-native';
import { Divider, List, ListItem } from '@ui-kitten/components';

import categoriesData from '../../utils/categories';

import { CategoryViewProps } from './types';

const handleItemPress = (item) => Linking.openURL(`tel:${item.phoneNumber}`);

const renderItem = ({ item }): React.ReactNode => (
  <ListItem
    key={item.name}
    title={item.name}
    description={item.phoneNumber}
    onPress={() => handleItemPress(item)}
  />
);

const CategoryView = ({
  route: {
    params: { categoryName },
  },
}: CategoryViewProps) => {
  const phoneNumbersData = categoriesData.find(
    (category) => category.title === categoryName
  )?.phoneNumbers;

  return (
    <List
      data={phoneNumbersData}
      ItemSeparatorComponent={Divider}
      renderItem={renderItem}
    />
  );
};

export default CategoryView;
