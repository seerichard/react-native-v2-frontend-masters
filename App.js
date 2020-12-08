import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ColorBox from './components/ColorBox';

const colors = {
  Cyan: '#2aa198',
  Blue: '#268bd2',
  Magenta: '#d33682',
  Orange: '#cb4b16',
};

const renderColors = () => {
  return Object.entries(colors).map((color) => {
    const [name, value] = color;

    return <ColorBox name={name} value={value} />;
  });
};

const App = () => {
  return <SafeAreaView style={styles.safeArea}>{renderColors()}</SafeAreaView>;
};

// Can do inline styles, but StyleSheet is better as it caches the styles
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
