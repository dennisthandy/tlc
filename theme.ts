// my-theme.ts
import { DefaultTheme } from 'styled-components';

const myTheme: DefaultTheme = {
  borderRadius: '.25rem',

  colors: {
    yellow: '#f7bf01',
    white: '#ffffff',
    black: '#010000',
    brown: '#7f6201',
    red: '#d55105',
  },

  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1536px',
  },
};

export { myTheme };
