import { useEffect, useState } from 'react';

import { ThemeMode } from './types';
export const useDarkMode = () => {
  const [theme, setTheme] = useState('light');

  const setMode = (mode: ThemeMode) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const themeToggler = (): void => {
    theme === 'light' ? setMode('dark') : setMode('light');
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);
  return { theme, themeToggler };
};
