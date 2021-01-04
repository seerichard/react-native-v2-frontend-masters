import React from 'react';

const CustomPalettesContext = React.createContext({
  customPalettes: [],
  setCustomPalettes: () => {},
});

export default CustomPalettesContext;
