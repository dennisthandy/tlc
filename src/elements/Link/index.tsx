import styled from 'styled-components';

interface Props {
  italic?: boolean;
}

export default styled.a<Props>`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  padding-bottom: 0.25rem;
  font-size: 14px;
  font-style: ${(props) => props.italic && 'italic'};

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  }

  &:visited {
    color: ${({ theme }) => theme.colors.red};
  }
`;
