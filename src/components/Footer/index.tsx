import React from 'react';
import styled from 'styled-components';

import Heading from '../elements/Heading';
import Link from '../elements/Link';

interface Props {
  handleOpenAbout: () => void;
}

const Wrapper = styled.footer`
  display: grid;
  padding: 1rem 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.3);

  & > p {
    margin-top: 2rem;
  }
`;

const Part = styled.ul`
  display: grid;
  gap: 0.5rem;
`;

const Item = styled.li`
  list-style: none;
`;

const Footer: React.FC<Props> = (): React.ReactElement => {
  return (
    <Wrapper>
      <Part>
        <Item>
          <Link href="https://iradesign.io">
            Illustrations by{' '}
            <Heading h5 inline as="span">
              IRA Design
            </Heading>{' '}
          </Link>
        </Item>
        {/* <Item>
          <Button text onClick={handleOpenAbout}>
            About
          </Button>
        </Item>
        <Item>
          <Button text onClick={handleOpenAbout}>
            Home
          </Button>
        </Item> */}
      </Part>
      <Heading center h6>
        Made with ❤️ by{' '}
        <Heading inline h6 as="span">
          Dennis Thandy{' '}
        </Heading>
      </Heading>
    </Wrapper>
  );
};

export default Footer;
