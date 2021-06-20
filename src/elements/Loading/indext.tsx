import React from 'react';
import styled, { css, keyframes } from 'styled-components';

interface Props {
  fullHeight?: boolean;
  text?: string;
}

const fullHeightStyle = css`
  min-height: 100vh;
  margin-top: unset;
`;

const Wrapper = styled.div<Props>`
  display: grid;
  place-items: center;
  margin-top: 3rem;
  ${(props) => (props.fullHeight ? fullHeightStyle : '')}
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > * + * {
    margin-top: 1rem;
  }
`;

const bounce = keyframes`
    0%   { transform: scale(1,1) translateY(0); }
    10%  { transform: scale(1.1,.9) translateY(0); }
    30%  { transform: scale(.9,1.1) translateY(-50px); }
    50%  { transform: scale(1.05,.95) translateY(0); }
    57%  { transform: scale(1,1) translateY(-7px); }
    64%  { transform: scale(1,1) translateY(0); }
    100% { transform: scale(1,1) translateY(0); }
`;

const Logo = styled.img<Props>`
  width: ${(props) => (props.fullHeight ? '7rem' : '5rem')};
  animation: ${bounce} 2s infinite cubic-bezier(0.28, 0.84, 0.42, 1);

  @media screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: ${(props) => (props.fullHeight ? '9rem' : '5rem')};
  }
`;

const Text = styled.p<Props>`
  font-size: 14px;
  color: ${(props) => props.theme.colors.brown};

  @media screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 16px;
  }
`;

const Loading: React.FC<Props> = (props): React.ReactElement => {
  return (
    <Wrapper fullHeight={props.fullHeight}>
      <Content>
        <Logo src="/tlc-icon.png" alt="Logo Pijar" fullHeight={props.fullHeight} />
        <Text fullHeight={props.fullHeight}>{props.text}</Text>
      </Content>
    </Wrapper>
  );
};

export default Loading;
