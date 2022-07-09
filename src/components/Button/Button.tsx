import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './elements';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<React.PropsWithChildren<Props>> = (props) => {
  return <Container {...props}>{props.children}</Container>;
};
