import styled from 'styled-components';

export const Container = styled.button`
  background-color: ${({ theme }) => theme.colors.blue};
  padding: 14px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 14px;
  gap: 10px;
  border: none;
  color: #ffffff;
  font-weight: bold;
  font-size: 14px;
`;
