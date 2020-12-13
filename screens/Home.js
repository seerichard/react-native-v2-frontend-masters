import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => (
  <View>
    <TouchableOpacity onPress={() => navigation.navigate('ColorPalette')}>
      <Text>Solarized</Text>
    </TouchableOpacity>
  </View>
);

export default Home;
