import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.View`
  flex-direction: row;
`;

const Box = styled.View`
  height: 40px;
  width: 40px;
  background-color: ${({ color }) => color};
  margin-right: 10px;
`;

const renderBoxes = (firstFive) => (
  <Wrapper>
    {firstFive.map(({ hexCode }) => (
      <Box color={hexCode} />
    ))}
  </Wrapper>
);

const Preview = ({ colors }) => {
  const firstFive = colors.slice(0, 5);
  console.log(firstFive);

  return <>{renderBoxes(firstFive)}</>;
};

export default Preview;
