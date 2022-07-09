import styled from 'styled-components';

export default styled.input`
  padding: 0.75em 1em;
  border: none;
  background-color: ${({ theme }) => theme.colors.bg.secondary};
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.separator.text};
  width: 100%;
  font-size: 17px;
  color: ${({ theme }) => theme.colors.label.primary};
  caret-color: #446bf2;

  &:focus {
    outline: none;
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
