import React, { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons';
import api from '../../services/api';
import getRealm from '../../services/realm';

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
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function loadRepositories() {
      const realm = await getReal();
      const data = realm.object('Repository').sorted('stars', true);
      setRepositories(data);
    };

    loadRepositories();
  }, []);

  async function saveRepository(repository) {
    const data = {
      id: repository.id,
      name: repository.name,
      fullName: repository.full_name,
      description: repository.description,
      stars: repository.stargazers_count,
      forks: repository.forks_count,
    };

    const realm = await getRealm();

    realm.write(() => {
      realm.create('Repository', data, 'modified');
    });

    return data;
  };

  async function handleAddRepository() {
    try {
      const response = await api.get(`/repos/${input}`);
      await saveRepository(response.data);

      Keyboard.dismiss();
      setInput('');
      setError(false);
    } catch (error) {
      console.log(error.message);
      setError(true);
    };
  };

  async function handleRefreshRepository(repository) {
    const response = await api.get(`/repos/${repository.fullName}`);
    const updatedRepository = await saveRepository(response.data);
    setRepositories(
      repositories.map(repo => repo.id === updatedRepository ? updatedRepository : repo)
    );
  };

  return (
    <Container>
      <Title>Repositórios</Title>
      
      <Form>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Procurar repositório..."
          value={input}
          onChangeText={setInput}
          error={error}
        />
        <Submit onPress={handleAddRepository}>
          <Icon name="add" size={22} color="#FFF" />
        </Submit>
      </Form>

      <RepoList
        keyboardShouldPersistTaps="handled"
        data={repositories}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Repository data={item} onRefresh={() => handleRefreshRepository(item)} />
        )}
      />
    </Container>
  );
};

export default Main;
