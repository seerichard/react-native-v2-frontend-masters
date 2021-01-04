import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import CustomPalettesContext from './context';
import ColorPalette from './screens/ColorPalette';
import ColorPaletteModal from './screens/ColorPaletteModal';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="Home" component={Home} />
    <MainStack.Screen
      name="ColorPalette"
      component={ColorPalette}
      options={({ route }) => ({ title: route.params.name })}
    />
  </MainStack.Navigator>
);

const App = () => {
  const [customPalettes, setCustomPalettes] = useState([]);
  const value = { customPalettes, setCustomPalettes };

  return (
    <CustomPalettesContext.Provider value={value}>
      <NavigationContainer>
        <RootStack.Navigator mode="modal">
          <RootStack.Screen
            name="Main"
            component={MainStackScreen}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="ColorPaletteModal"
            component={ColorPaletteModal}
            options={{ title: 'Add New Palette', headerBackTitle: 'Done' }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </CustomPalettesContext.Provider>
  );
};

export default App;
