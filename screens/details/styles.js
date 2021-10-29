import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
`;

export const CommitContainer = styled(TouchableOpacity)`
  flex: 1;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 10px;
  border-width: 1px;
  border-radius: 15px;
`;

export const UserName = styled.Text.attrs({
  numberOfLines: 1,
})`
  flex: 1;
  font-size: 32px;
  align-self: center;
`;

export const Avatar = styled.Image.attrs(({uri}) => ({
  source: {uri: uri},
}))`
  width: 128px;
  height: 128px;
  align-self: center;
`;

export const Label = styled.Text`
  margin-top: 10px;
  font-size: 24px;
`;
