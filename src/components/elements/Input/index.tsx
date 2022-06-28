import styled from 'styled-components';

export default styled.input`
  padding: 1rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.yellow};
  border: 1.5px solid ${({ theme }) => theme.colors.white};
  width: 100%;
  font-size: 16px;

  &:focus {
    outline: none;
    border: 1.5px solid ${({ theme }) => theme.colors.red};
    background-color: white;
  }

  &:focus + label {
    opacity: 0;
  }

  &:invalid:not(:focus):not(:placeholder-shown) + label {
    opacity: 0;
  }

  &:valid {
    outline: none;
    background-color: ${({ theme }) => theme.colors.white};
    border: none;
    color: ${({ theme }) => theme.colors.black};
  }

  &:valid + label {
    opacity: 0;
  }
`;
