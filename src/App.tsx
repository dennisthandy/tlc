import React, { useState } from 'react';
import styled from 'styled-components';

import Container from './components/elements/Container';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';

const Wrapper = styled.main`
  padding-bottom: 1rem;
  background-color: ${(props) => props.theme.colors.yellow};
  min-height: 100vh;
`;

function App() {
  const [openAbout, setOpenAbout] = useState<boolean>(false);

  const handleAboutPage = () => {
    setOpenAbout(!openAbout);
  };

  return (
    <Wrapper>
      <Container>
        <Header />
        {!openAbout && <Home />}
        {openAbout && <About handleCloseAbout={handleAboutPage} />}
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
