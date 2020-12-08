import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ColorBox from './components/ColorBox';
import SolarizedBox from './components/SolarizedBox';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ColorBox />
      <SolarizedBox />
    </SafeAreaView>
  );
};

// Can do inline styles, but StyleSheet is better as it caches the styles
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
