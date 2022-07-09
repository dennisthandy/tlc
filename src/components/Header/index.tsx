import React from 'react';

import Heading from '../elements/Heading';
import Logo from '../elements/Logo';
import { Brand, Wrapper } from './elements';

const Header: React.FC = (): React.ReactElement => {
  return (
    <Wrapper>
      <Brand>
        <Logo src="/logo2-default.png" alt="TLC" />
      </Brand>
      <Heading banner>
        <span>Unofficial</span>
      </Heading>
    </Wrapper>
  );
};

export default Header;
