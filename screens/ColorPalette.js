import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components';
import { WhiteText, ColorContainer } from '../components/ColorBox';

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

const ColorPalette = ({ route }) => {
  const { colors } = route.params;

  return (
    <FlatList
      data={colors}
      // If there is a "key" declared in the item object which is of type string, no need to add keyExtractor
      // E.g. - { colorName: 'Base03', hexCode: '#002b36', key: '1' },
      keyExtractor={(item) => item.colorName}
      renderItem={({ item }) => <Item {...item} />}
      // ListHeaderComponent={<Title>Solarized</Title>}
    />
  );
};

export default ColorPalette;
