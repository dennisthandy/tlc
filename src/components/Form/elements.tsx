import styled from 'styled-components';

interface FormGroupProps {
  column?: boolean;
}

export const Container = styled.form`
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  display: grid;
  gap: 1rem;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    grid-auto-flow: column;
  }
`;

export const FormGroup = styled.div<FormGroupProps>`
  position: relative;
  display: grid;
  grid-auto-flow: ${(props) => props.column && 'column'};
  gap: ${(props) => props.column && '.5rem'};
`;
