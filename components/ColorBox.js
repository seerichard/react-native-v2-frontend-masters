import React from 'react';
import styled from 'styled-components';

const WhiteText = styled.Text`
  color: white;
  font-weight: bold;
`;

const ColorContainer = styled.View`
  color: white;
  margin: 10px 20px 0;
  padding: 10px;
  background-color: ${(props) => props.color}
  align-items: center;
`;

const ColorBox = ({ name, value }) => (
  <ColorContainer key={name} color={value}>
    <WhiteText>{`${name}: ${value}`}</WhiteText>
  </ColorContainer>
);

export default ColorBox;
