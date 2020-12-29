import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { SOLARIZED, RAINBOW, FRONTEND_MASTERS } from '../constants/colors';
import Preview from '../components/Preview';

const COLOR_PALETTES = [
  { paletteName: 'Solarized', colors: SOLARIZED },
  { paletteName: 'Rainbow', colors: RAINBOW },
  { paletteName: 'Frontend Masters', colors: FRONTEND_MASTERS },
];

const Wrapper = styled.View`
  padding: 0 10px;
`;

const Title = styled.Text`
  margin: 20px 0 10px;
  font-weight: bold;
`;

const Home = ({ navigation }) => (
  <Wrapper>
    <FlatList
      data={COLOR_PALETTES}
      keyExtractor={({ paletteName }) => paletteName}
      scrollEnabled={false} // No scroll on list
      renderItem={({ item }) => {
        const { paletteName, colors } = item;

        return (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ColorPalette', {
                name: paletteName,
                colors,
              })
            }
          >
            <Title>{paletteName}</Title>
            <Preview colors={colors} />
          </TouchableOpacity>
        );
      }}
    />
  </Wrapper>
);

export default Home;
