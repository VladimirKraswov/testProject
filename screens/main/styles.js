import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px;
  flex: 1;
`;

export const UserRowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border-width: 1px;
  border-radius: 15px;
`;

export const ItemSeparator = styled.View`
  height: 5px;
`;

export const UserName = styled.Text.attrs({
  numberOfLines: 1,
})`
  flex: 1;
  margin-left: 5px;
  font-size: 32px;
`;

export const Avatar = styled.Image.attrs(({uri}) => ({
  source: {uri: uri},
}))`
  width: 50px;
  height: 50px;
`;
