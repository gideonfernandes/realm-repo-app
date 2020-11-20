import React from 'react';
import Icon from 'react-native-vector-icons';

import {
  Container,
  Title,
  Form,
  Input,
  Submit,
} from './styles';

const Main = () => {
  return (
    <Container>
      <Title>Repositóios</Title>
      
      <Form>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Procurar repositório..."
        />
        <Submit onPress={() => {}}>
          <Icon name="add" size={22} color="#FFF" />
        </Submit>
      </Form>
    </Container>
  );
};

export default Main;
