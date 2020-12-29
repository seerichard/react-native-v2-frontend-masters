import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components';

const Box = styled.View`
  height: 40px;
  width: 40px;
  background-color: ${({ color }) => color};
  margin-right: 10px;
`;

const Preview = ({ colors }) => (
  <FlatList
    data={colors.slice(0, 5)}
    keyExtractor={(item) => item.colorName}
    renderItem={({ item }) => <Box color={item.hexCode} />}
    horizontal={true}
  />
);

export default Preview;
