import React from 'react';
import styled from 'styled-components';

const colors = {
  Cyan: '#2aa198',
  Blue: '#268bd2',
  Magenta: '#d33682',
  Orange: '#cb4b16',
};

export const WhiteText = styled.Text`
  color: white;
  font-weight: bold;
`;

export const ColorContainer = styled.View`
  color: white;
  margin: 10px 20px 0;
  padding: 10px;
  background-color: ${(props) => props.color}
  align-items: center;
`;

const ColorBox = () => {
  return Object.entries(colors).map((color) => {
    const [name, value] = color;

    return (
      <ColorContainer key={name} color={value}>
        <WhiteText>{`${name}: ${value}`}</WhiteText>
      </ColorContainer>
    );
  });
};

export default ColorBox;
