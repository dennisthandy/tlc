import React, { useState } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

import { darkTheme, GlobalStyle, lightTheme } from '../theme';
import Container from './components/elements/Container';
import Heading from './components/elements/Heading';
import Footer from './components/Footer';
import Header from './components/Header';
import Switch from './components/Switch';
import Home from './pages/Home';
import { useDarkMode } from './utils/hook';

const Wrapper = styled.main`
  padding-bottom: 1rem;
  background-color: ${({ theme }) => theme.colors.bg.primary};
  min-height: 100vh;
`;

const Tools = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 0.75em;
  width: 100%;
`;

function App() {
  const [openAbout, setOpenAbout] = useState<boolean>(false);
  const { theme, themeToggler } = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const handleAboutPage = () => {
    setOpenAbout(!openAbout);
  };

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Container center>
        <Wrapper>
          <Header />
          <Tools>
            <Heading h3>Welcome 😀</Heading>
            <Switch isOn={theme === 'dark'} onClick={() => themeToggler()} />
          </Tools>

          <Home />
          <Footer handleOpenAbout={handleAboutPage} />
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
