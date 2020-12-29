import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import Preview from '../components/Preview';

const COLOR_PALETTES_URL =
  'https://color-palette-api.kadikraman.now.sh/palettes';

const Wrapper = styled.View`
  padding: 0 10px;
`;

const Title = styled.Text`
  margin: 20px 0 10px;
  font-weight: bold;
`;

const Home = ({ navigation }) => {
  const [colorPalettes, setColorPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchPalettes = useCallback(async () => {
    const response = await fetch(COLOR_PALETTES_URL);
    const json = await response.json();

    // If error fetching, return an empty array
    return response.ok ? setColorPalettes(json) : [];
  }, []);

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
      />
    </Wrapper>
  );
};

export default Home;
