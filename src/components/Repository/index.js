import React from 'react';
import Icon from 'react-native-vector-icons';

import {
  Container,
  Name,
  Description,
  Stats,
  Stat,
  StatCount,
} from './styles';

const Repository = ({ data }) => {
  return (
    <Container>
      <Name>{data.name}</Name>
      <Description>{data.description}</Description>

      <Stats>
        <Stat>
          <Icon name="star" size={16} color="#333" />
          <StatCount>{data.starts}</StatCount>
        </Stat>
        <Stat>
          <Icon name="code-fork" size={16} color="#333" />
          <StatCount>{data.forks}</StatCount>
        </Stat>
      </Stats>
    </Container>
  );
};

export default Repository;