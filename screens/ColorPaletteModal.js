import React, { useState } from 'react';
import { Text, Alert, useWindowDimensions } from 'react-native';
import styled from 'styled-components';
import { useHeaderHeight } from '@react-navigation/stack';
import ColorItem from '../components/ColorItem';
import MODAL_COLORS from '../constants/modalColors';

const Wrapper = styled.View`
  padding: 10px 10px 0;
  margin-bottom: 30px;
  display: flex;
  flex-flow: column;
  background-color: white;
  height: ${({ windowHeight, headerHeight }) => windowHeight - headerHeight}px;
`;

const NameWrapper = styled.View`
  margin-bottom: 24px;
  height: 100px;
`;

const Input = styled.TextInput`
  height: 40px;
  margin-top: 10px;
  padding: 0 10px;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 16px;
`;

const NameInput = ({ name, setName }) => (
  <NameWrapper>
    <Text>Name of your colour palette</Text>
    <Input value={name} onChangeText={setName} placeholder="Add a name!" />
  </NameWrapper>
);

const StyledFlatList = styled.FlatList`
  flex: 1;
  height: auto;
  /* border: 1px solid purple; */
`;

const SubmitWrapper = styled.View`
  height: 100px;
  padding-top: 20px;
  /* border: 1px solid red; */
`;

const SubmitButton = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  background-color: green;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

const SubmitText = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: bold;
`;

const ColorPaletteModal = () => {
  const windowHeight = useWindowDimensions().height;
  const headerHeight = useHeaderHeight();
  const [name, setName] = useState('');
  const [newPalette, setNewPalette] = useState([]);

  console.log('newPalette:', newPalette);

  return (
    <Wrapper windowHeight={windowHeight} headerHeight={headerHeight}>
      <NameInput name={name} setName={setName} />
      <StyledFlatList
        data={MODAL_COLORS}
        keyExtractor={({ colorName }) => colorName}
        renderItem={({ item }) => (
          <ColorItem
            {...item}
            newPalette={newPalette}
            handleNewPalette={setNewPalette}
          />
        )}
      />
      {/* Maybe use a <VirtualizedList/>? */}
      <SubmitWrapper>
        <SubmitButton
          onPress={() => {
            if (name === '') {
              Alert.alert('Submission failed', 'You must enter a name');
            }
          }}
        >
          <SubmitText>Submit!</SubmitText>
        </SubmitButton>
      </SubmitWrapper>
    </Wrapper>
  );
};

export default ColorPaletteModal;
