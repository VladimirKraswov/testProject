import React, {useCallback} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import State from '../../store/state';
import {SafeAreaView, Linking} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Container, CommitContainer, UserName, Avatar, Label} from './styles';

function Commit({commit}) {
  const handleOpenUrl = useCallback(async () => {
    await Linking.openURL(commit.url);
  }, [commit]);

  return (
    <CommitContainer onPress={handleOpenUrl}>
      <Label>Author:</Label>
      <Text>{commit.author.name}</Text>
      <Label>Email:</Label>
      <Text>{commit.author.email}</Text>
      <Label>Message:</Label>
      <Text>{commit.message}</Text>
    </CommitContainer>
  );
}

export default function Details({route}) {
  const data = useSelector(State.selectors.getData);
  const {dataIndex} = route.params;

  const user = data[dataIndex];

  const handleOpenUrl = useCallback(async () => {
    await Linking.openURL(user.repo.url);
  }, [user]);

  return (
    <Container>
      <SafeAreaView>
        <ScrollView>
          <Avatar uri={user.actor.avatar_url} />
          <UserName>{user.actor.login}</UserName>

          <Label>Repositories name:</Label>
          <Text>{user.repo.name}</Text>

          <Label>Repositories url: </Label>
          <TouchableOpacity onPress={handleOpenUrl}>
            <Text>{user.repo.url}</Text>
          </TouchableOpacity>

          <Label>Commits:</Label>
          {user.payload?.commits?.map((commit, index) => (
            <Commit key={`commit${index}`} commit={commit} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}
