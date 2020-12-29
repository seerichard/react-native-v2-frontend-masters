import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { SOLARIZED, RAINBOW, FRONTEND_MASTERS } from '../constants/colors';
import Preview from '../components/Preview';

const Wrapper = styled.View`
  padding: 0 10px;
`;

const Title = styled.Text`
  margin: 20px 0 10px;
  font-weight: bold;
`;

const Home = ({ navigation }) => (
  <Wrapper>
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ColorPalette', {
          name: 'Solarized',
          colors: SOLARIZED,
        })
      }
    >
      <Title>Solarized</Title>
      <Preview colors={SOLARIZED} />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ColorPalette', {
          name: 'Rainbow',
          colors: RAINBOW,
        })
      }
    >
      <Title>Rainbow</Title>
      <Preview colors={RAINBOW} />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ColorPalette', {
          name: 'Frontend Masters',
          colors: FRONTEND_MASTERS,
        })
      }
    >
      <Title>Frontend Masters</Title>
      <Preview colors={FRONTEND_MASTERS} />
    </TouchableOpacity>
  </Wrapper>
);

export default Home;
