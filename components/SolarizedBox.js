import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components';
import { WhiteText, ColorContainer } from './ColorBox';

const COLORS = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
  { colorName: 'Base2', hexCode: '#eee8d5' },
  { colorName: 'Base3', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58900' },
  { colorName: 'Orange', hexCode: '#cb4b16' },
  { colorName: 'Red', hexCode: '#dc322f' },
  { colorName: 'Magenta', hexCode: '#d33682' },
  { colorName: 'Violet', hexCode: '#6c71c4' },
  { colorName: 'Blue', hexCode: '#268bd2' },
  { colorName: 'Cyan', hexCode: '#2aa198' },
  { colorName: 'Green', hexCode: '#859900' },
];

const Title = styled.Text`
  margin: 10px 20px 0;
  font-weight: bold;
`;

const Text = styled(WhiteText)`
  color: ${(props) =>
    // Compare the hexCode to white - Hex colors in the closest to 10% of white (#ffffff) will return black
    parseInt(props.hexCode.replace('#', ''), 16) > 0xffffff / 1.1
      ? 'black'
      : 'white'};
`;

const Item = ({ colorName, hexCode }) => (
  <ColorContainer key={colorName} color={hexCode}>
    <Text hexCode={hexCode}>{`${colorName}: ${hexCode}`}</Text>
  </ColorContainer>
);

const SolarizedBox = () => (
  <FlatList
    data={COLORS}
    // If there is a "key" declared in the item object which is of type string, no need to add keyExtractor
    // E.g. - { colorName: 'Base03', hexCode: '#002b36', key: '1' },
    keyExtractor={(item) => item.colorName}
    renderItem={({ item }) => <Item {...item} />}
    ListHeaderComponent={<Title>Solarized</Title>}
  />
);

export default SolarizedBox;
