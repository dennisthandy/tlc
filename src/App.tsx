// import './App.css';

import React, { useState } from 'react';
import styled from 'styled-components';

import Container from './components/elements/Container';
import Footer from './components/Footer';
import Header from './components/Header';
// import About from './pages/About';
import Home from './pages/Home';

const Wrapper = styled.main`
  padding-bottom: 1rem;
  background-color: ${(props) => props.theme.colors.yellow};
  min-height: 100vh;
`;

function App() {
  const [count, setCount] = useState(0);
  const [openAbout, setOpenAbout] = useState<boolean>(false);

  const handleAboutPage = () => {
    setOpenAbout(!openAbout);
  };

  return (
    <Wrapper>
      <Container>
        <Header />
        {!openAbout && <Home />}
        <header className="App-header">
          <p className="header">
            🚀 Vite + React + Typescript 🤘 & <br />
            Eslint 🔥+ Prettier
          </p>

          <div className="body">
            <button onClick={() => setCount((count) => count + 1)}>
              🪂 Click me : {count}
            </button>

            <p> Don&apos;t forgot to install Eslint and Prettier in Your Vscode.</p>

            <p>
              Mess up the code in <code>App.tsx </code> and save the file.
            </p>
            <p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer">
                Learn React
              </a>
              {' | '}
              <a
                className="App-link"
                href="https://vitejs.dev/guide/features.html"
                target="_blank"
                rel="noopener noreferrer">
                Vite Docs
              </a>
            </p>
          </div>
        </header>
        <Footer handleOpenAbout={handleAboutPage} />
      </Container>
    </Wrapper>
  );
}

export default App;

// import React, { useState } from 'react';
// import styled from 'styled-components';

// import Container from './components/elements/Container';
// import Footer from './components/Footer';
// import Header from './components/Header';
// import About from './pages/About';
// import Home from './pages/Home';

// const Wrapper = styled.main`
//   padding-bottom: 1rem;
//   background-color: ${(props) => props.theme.colors.yellow};
//   min-height: 100vh;
// `;

// const App: React.FC = (): React.ReactElement => {
//   const [openAbout, setOpenAbout] = useState<boolean>(false);

//   const handleAboutPage = () => {
//     setOpenAbout(!openAbout);
//   };

//   return (
//     <Container center>
//       <Wrapper>
//         <Header />
//         {!openAbout && <Home />}
//         {openAbout && <About handleCloseAbout={handleAboutPage} />}
//         <Footer handleOpenAbout={handleAboutPage} />
//       </Wrapper>
//     </Container>
//   );
// };

// export default App;
