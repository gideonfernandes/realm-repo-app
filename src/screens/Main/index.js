import React from 'react';
import Icon from 'react-native-vector-icons';

import {
  Container,
  Title,
  Form,
  Input,
  Submit,
  RepoList,
} from './styles';

import Repository from '../../components/Repository';

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

      <RepoList
        keyboardShouldPersistTaps="handled"
        data={[]}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Repository data={item} />
        )}
      />
    </Container>
  );
};

export default Main;
