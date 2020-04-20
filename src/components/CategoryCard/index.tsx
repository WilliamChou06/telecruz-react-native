import 'react-native-gesture-handler';
import * as React from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-native-fontawesome';

import { StyledCard, StyledText, IconView } from './styles';
import { CategoryCardProps } from './types';

const CategoryCard = ({ title, icon }: CategoryCardProps) => (
  <StyledCard>
    <IconView>
      <Icon icon={icon} size={72} />
    </IconView>
    <StyledText category="h6">
      {title}
    </StyledText>
  </StyledCard>
);

export default CategoryCard;
