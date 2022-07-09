import React from 'react';

import Button from '../Button';
import SearchField from '../SearchField';
import { Container, FormGroup } from './elements';
interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleReset: () => void;
  value: string;
}

export const Form: React.FC<Props> = ({
  handleChange,
  handleSubmit,
  handleReset,
  value,
}): React.ReactElement => {
  return (
    <Container onSubmit={handleSubmit} autoComplete="off">
      <FormGroup>
        <SearchField
          type="text"
          id="nim"
          name="nim"
          placeholder="NIM ex: 1102111xxxx"
          required
          onChange={handleChange}
          value={value}
          pattern="[0-9]+"
        />
      </FormGroup>
      <FormGroup column>
        <Button type="submit">
          <img src="/send.svg" alt="Glass" />
          <span>Cari</span>
        </Button>
      </FormGroup>
    </Container>
  );
};
