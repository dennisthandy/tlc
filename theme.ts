// my-theme.ts
import { createGlobalStyle, DefaultTheme } from 'styled-components';

const base: DefaultTheme = {
  borderRadius: '.25rem',
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1536px',
  },
};

export const lightTheme: DefaultTheme = {
  ...base,
  colors: {
    red: '#FF3B30',
    orange: '#FF9500',
    yellow: '#FFCC00',
    green: '#34C759',
    teal: '#5AC8FA',
    blue: '#007AFF',
    indigo: '#5856D6',
    purple: '#AF52DE',
    pink: '#FF2D55',
    gray: {
      '1': '#8E8E93',
      '2': '#AEAEB2',
      '3': '#C7C7CC',
      '4': '#D1D1D6',
      '5': '#E5E5EA',
      '6': '#F2F2F7',
    },
    bg: {
      primary: '#FFFFFF',
      secondary: '#EDEDED',
      tertiary: 'rgba(255, 255, 255, 0.75)',
    },
    fill: {
      secondary: 'rgba(120, 120, 128, 0.16)',
      tertiary: 'rgba(118, 118, 128, 0.12)',
    },
    label: {
      primary: '#000000',
      secondary: 'rgba(60, 60, 67, 0.6)',
    },
    separator: {
      text: 'rgba(60, 60, 67, 0.36)',
    },
  },
};

export const darkTheme: DefaultTheme = {
  ...base,
  colors: {
    red: '#FF453A',
    orange: '#FF9F0A',
    yellow: '#FFD60A',
    green: '#30D158',
    teal: '#64D2FF',
    blue: '#0A84FF',
    indigo: '#5E5CE6',
    purple: '#BF5AF2',
    pink: '#FF2D55',
    gray: {
      '1': '#8E8E93',
      '2': '#636366',
      '3': '#48484A',
      '4': '#3A3A3C',
      '5': '#1C1C1E',
      '6': '#1C1C1E',
    },
    bg: {
      primary: '#000000',
      secondary: '#2C2C2E',
      tertiary: 'rgba(30, 30, 30, 0.75)',
    },
    fill: {
      secondary: 'rgba(120, 120, 128, 0.32)',
      tertiary: 'rgba(118, 118, 128, 0.24)',
    },
    label: {
      primary: '#FFFFFF',
      secondary: 'rgba(235, 235, 245, 0.6)',
    },
    separator: {
      text: '#38383A',
    },
  },
};

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #7f6201;
    overflow-x: hidden;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`;
