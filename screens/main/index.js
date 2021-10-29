import React, {useCallback} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import State from '../../store/state';
import {SafeAreaView} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {
  Container,
  UserRowContainer,
  ItemSeparator,
  UserName,
  Avatar,
} from './styles';
import useRefresh from './useRefresh';

export default function Main({navigation}) {
  const dispatch = useDispatch();
  const isPending = useSelector(State.selectors.getIsPending);
  const data = useSelector(State.selectors.getData);

  const loadData = useCallback(async () => {
    await dispatch(State.actions.loadData());
  }, [dispatch]);

  const [reload, refresh, stop] = useRefresh(loadData);

  useFocusEffect(
    useCallback(() => {
      reload();

      return () => {
        stop();
      };
    }, []),
  );

  const handleSelectUser = useCallback(
    dataIndex => () => {
      navigation.navigate('Details', {dataIndex});
    },
    [],
  );

  const renderItem = useCallback(
    ({item, index}) => {
      return (
        <TouchableOpacity onPress={handleSelectUser(index)}>
          <UserRowContainer>
            <Avatar uri={item.actor.avatar_url} />
            <UserName>{item.actor.login}</UserName>
          </UserRowContainer>
        </TouchableOpacity>
      );
    },

    [handleSelectUser],
  );

  const keyExtractor = useCallback(item => item.id, []);

  return (
    <Container>
      <SafeAreaView>
        <FlatList
          ItemSeparatorComponent={ItemSeparator}
          onRefresh={refresh}
          refreshing={isPending}
          data={data}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </Container>
  );
}
