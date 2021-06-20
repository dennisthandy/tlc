import React from 'react';
import styled from 'styled-components';

import Button from '../../components/elements/Button';
import Heading from '../../components/elements/Heading';
import Link from '../../components/elements/Link';

interface Props {
  handleCloseAbout: () => void;
}

interface IconProps {
  inText?: boolean;
}

const Wrapper = styled.section`
  display: grid;
  padding: 1rem 1rem 2rem 1rem;
  gap: 2rem;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    gap: 1rem;
  }
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    grid-auto-flow: column;
    grid-template-columns: none;
  }
`;

const Item = styled.li`
  list-style: none;
  display: flex;
  align-items: center;

  > * + * {
    margin-left: 0.5rem;
  }
`;

const Icon = styled.img<IconProps>`
  width: 2rem;
  height: ${(props) => (props.inText ? 'auto' : '2rem')};
  display: ${(props) => props.inText && 'inline'};
`;

const About: React.FC<Props> = ({ handleCloseAbout }): React.ReactElement => {
  return (
    <Wrapper>
      <Heading h3 center as="h3">
        About
      </Heading>
      <Heading text h4>
        Aplikasi ini merupakan duplikasi dari laman{' '}
        <Link href="http://pusatbahasa.trunojoyo.ac.id/cek" italic>
          http://pusatbahasa.trunojoyo.ac.id/cek
        </Link>{' '}
        dengan menambahkan beberapa teknologi baru seperti{' '}
        <Icon src="/pwa.svg" alt="PWA" inText /> yang nantinya aplikasi ini bisa diinstall
        di smartphone android.
      </Heading>
      <Heading h4 text>
        Aplikasi ini dibagun dengan teknologi seperti:
      </Heading>
      <List>
        <Item>
          <Icon src="/favicon.svg" alt="Vite" />
          <Link href="https://vitejs.dev/">Vite</Link>
        </Item>
        <Item>
          <Icon src="/react.svg" alt="React" />
          <Link href="https://reactjs.org/">React</Link>
        </Item>
        <Item>
          <Icon src="/typescript-icon.svg" alt="Vite" />
          <Link href="https://www.typescriptlang.org/">TypeScript</Link>
        </Item>
        <Item>
          <Icon src="/styled-component.png" alt="Vite" />
          <Link href="https://styled-components.com/">Styled Component</Link>
        </Item>
      </List>
      <Button onClick={handleCloseAbout}>Kembali</Button>
    </Wrapper>
  );
};

export default About;
