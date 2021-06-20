/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import Button from '../elements/Button';
import Input from '../elements/Input';
import Label from '../elements/Label';

interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleReset: () => void;
  value: string;
}

interface FormGroupProps {
  column?: boolean;
}

const Wrapper = styled.form`
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  display: grid;
  gap: 1rem;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    grid-auto-flow: column;
  }
`;

const FormGroup = styled.div<FormGroupProps>`
  position: relative;
  display: grid;
  grid-auto-flow: ${(props) => props.column && 'column'};
  gap: ${(props) => props.column && '.5rem'};
`;

const Form: React.FC<Props> = ({
  handleChange,
  handleSubmit,
  handleReset,
  value,
}): React.ReactElement => {
  return (
    <Wrapper onSubmit={handleSubmit} autoComplete="off">
      <FormGroup>
        <Input
          type="text"
          id="nim"
          name="nim"
          placeholder=" "
          required
          onChange={handleChange}
          value={value}
          pattern="[0-9]+"
        />
        <Label htmlFor="nim">NIM atau NRP</Label>
      </FormGroup>
      <FormGroup column>
        <Button type="submit">Submit</Button>
        <Button disabled={!value} onClick={handleReset} red type="reset">
          Reset
        </Button>
      </FormGroup>
    </Wrapper>
  );
};

export default Form;
