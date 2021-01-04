import React, { useState } from 'react';
import { Text, Switch } from 'react-native';
import styled from 'styled-components';

const ColorItemWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  /* Cannot seem to do border shorthand for single side */
  border-bottom-width: 1px;
  border-bottom-color: black;
`;

const ColorItem = ({ colorName, hexCode, newPalette, handleNewPalette }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const updatePalette = (addPalette) =>
    addPalette
      ? handleNewPalette([...newPalette, { colorName, hexCode }])
      : handleNewPalette(
          newPalette.filter(
            ({ colorName: newColorName }) => newColorName !== colorName,
          ),
        );

  return (
    <ColorItemWrapper>
      <Text>{colorName}</Text>
      <Switch
        value={isEnabled}
        onValueChange={() => {
          updatePalette(!isEnabled);
          setIsEnabled(!isEnabled);
        }}
      />
    </ColorItemWrapper>
  );
};

export default ColorItem;
