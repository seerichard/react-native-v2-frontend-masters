import React, { useState, useEffect, useCallback, useContext } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import CustomPalettesContext from '../context';
import Preview from '../components/Preview';

const COLOR_PALETTES_URL =
  'https://color-palette-api.kadikraman.now.sh/palettes';

const Wrapper = styled.View`
  padding-left: 10px;
  margin-bottom: 30px;
`;

const Title = styled.Text`
  margin: 20px 0 10px;
  font-weight: bold;
`;

const ModalTitle = styled.Text`
  margin-top: 20px;
  font-size: 24px;
  font-weight: bold;
  color: green;
`;

const Home = ({ navigation }) => {
  const [colorPalettes, setColorPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { customPalettes } = useContext(CustomPalettesContext);

  const fetchPalettes = useCallback(async () => {
    const response = await fetch(COLOR_PALETTES_URL);
    const json = await response.json();

    // If error fetching, return any custom palettes
    // This is not best practices but I'm feeling lazy
    return response.ok
      ? setColorPalettes([...customPalettes, ...json])
      : customPalettes;
  }, [customPalettes]);

  useEffect(() => {
    fetchPalettes();
  }, [fetchPalettes]);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await fetchPalettes();

    // Add a small delay to see the refreshing
    setTimeout(() => setIsRefreshing(false), 1000);
  }, [fetchPalettes]);

  return (
    <Wrapper>
      <FlatList
        data={colorPalettes}
        keyExtractor={({ paletteName }) => paletteName}
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
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
        ListHeaderComponent={
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ColorPaletteModal');
            }}
          >
            <ModalTitle>Add a colour scheme</ModalTitle>
          </TouchableOpacity>
        }
      />
    </Wrapper>
  );
};

export default Home;
