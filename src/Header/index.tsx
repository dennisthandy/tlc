import React from 'react';
import styled from 'styled-components';

import Heading from '../elements/Heading';
import Logo from '../elements/Logo';

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem 1rem;
  border-bottom: 1.25px solid rgba(255, 255, 255, 0.3);

  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    flex-wrap: nowrap;
  }
`;

const Brand = styled.div`
  display: grid;
  grid-auto-flow: column;
  place-content: start;
  align-items: center;
  gap: 1rem;
`;

const Header: React.FC = (): React.ReactElement => {
  return (
    <Wrapper>
      <Brand>
        <Logo src="/tlc-icon.png" alt="TLC" />
        <Heading h2 as="h2">
          UPT. Bahasa UTM
        </Heading>
      </Brand>
      <Heading red h2 as="h2">
        Unofficial
      </Heading>
    </Wrapper>
  );
};

export default Header;
