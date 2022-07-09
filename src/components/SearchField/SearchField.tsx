import React, { InputHTMLAttributes } from 'react';

import { Container, Input } from './elements';

export const SearchField: React.FC<InputHTMLAttributes<HTMLInputElement>> = (
  props,
): React.ReactElement => {
  return (
    <Container>
      <img src="/magnifyingglass.svg" alt="Glass" />
      <Input {...props} />
    </Container>
  );
};
