import styled from 'styled-components/native';

export const ITEM_HEIGHT = 82;
export const ITEM_SEPARATOR_HEIGHT = 5;

export const Container = styled.View`
  padding: 10px;
  flex: 1;
`;

export const UserRowContainer = styled.View`
  flex-direction: row;
  height: ${ITEM_HEIGHT}px;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
  border-width: 1px;
  border-radius: 15px;
`;

export const ItemSeparator = styled.View`
  height: ${ITEM_SEPARATOR_HEIGHT}px;
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
