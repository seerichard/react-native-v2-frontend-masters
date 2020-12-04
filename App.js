import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import styled from 'styled-components';

const colors = {
  Cyan: '#2aa198',
  Blue: '#268bd2',
  Magenta: '#d33682',
  Orange: '#cb4b16',
};

const ColorBox = styled.View`
  color: white;
  margin: 10px 20px 0;
  padding: 10px;
  background-color: ${(props) => props.color};
  align-items: center;
`;

const WhiteText = styled.Text`
  color: white;
  font-weight: bold;
`;

const renderColors = () => {
  return Object.entries(colors).map((color) => {
    const [key, value] = color;

    return (
      <ColorBox key={key} color={value}>
        <WhiteText>{`${key} ${value}`}</WhiteText>
      </ColorBox>
    );
  });
};

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* <View style={styles.container}>
        <Text>Hello world!</Text>
      </View> */}
      {renderColors()}
    </SafeAreaView>
  );
};

// Can do inline styles, but StyleSheet is better as it caches the styles
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default App;
