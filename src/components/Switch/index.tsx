import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

type Props = {
  isOn: boolean;
} & HTMLAttributes<HTMLButtonElement>;

const Container = styled.div<{ isOn: boolean }>`
  background-color: ${({ theme, isOn }) =>
    isOn ? theme.colors.green : theme.colors.fill.secondary};
  width: 51px;
  height: 31px;
  border-radius: 27px;
  position: relative;
`;

const Circle = styled.button<Partial<Props>>`
  background-color: #ffff;
  border: none;
  border-radius: 100%;
  width: 27px;
  height: 27px;
  transition: all 500ms;
  position: absolute;
  top: 50%;
  right: ${({ isOn }) => (isOn ? '21px' : '3px')};
  transform: translateY(-52%);
`;

const Switch: React.FC<Props> = ({ isOn, onClick }): React.ReactElement => {
  return (
    <Container isOn={isOn}>
      <Circle isOn={isOn} onClick={onClick} />
    </Container>
  );
};

export default Switch;
