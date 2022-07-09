import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme: { colors } }) => colors.fill.tertiary};
  border-radius: 10px;
  padding: 10px 8px;
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Input = styled.input`
  background-color: transparent;
  width: 100%;
  border: none;
  caret-color: #446bf2;
  font-size: 17px;
  color: ${({ theme: { colors } }) => colors.label.primary};

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: none;
  }
`;
