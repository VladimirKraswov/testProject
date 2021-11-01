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
  ITEM_HEIGHT,
  ITEM_SEPARATOR_HEIGHT,
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
    [navigation],
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

  const getItemLayout = useCallback(
    (_, index) => ({
      length: ITEM_HEIGHT + ITEM_SEPARATOR_HEIGHT,
      offset: (ITEM_HEIGHT + ITEM_SEPARATOR_HEIGHT) * index,
      index,
    }),
    [],
  );

  const keyExtractor = useCallback(item => item.id, []);

  return (
    <Container>
      <SafeAreaView>
        <FlatList
          data={data}
          ItemSeparatorComponent={ItemSeparator}
          refreshing={isPending}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          getItemLayout={getItemLayout}
          onRefresh={refresh}
        />
      </SafeAreaView>
    </Container>
  );
}
