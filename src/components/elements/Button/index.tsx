import styled, { css } from 'styled-components';

interface Props {
  solid?: boolean;
  full?: boolean;
  red?: boolean;
  text?: boolean;
}

const solidStyle = css`
  background-color: ${({ theme }) => theme.colors.yellow};
  border: 1.5px solid ${({ theme }) => theme.colors.yellow};

  &:hover {
    border-color: ${({ theme }) => theme.colors.white};
    background-color: transparent;
    color: ${({ theme }) => theme.colors.white};
  }
`;

const textStyle = css`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.red};
  padding: 0 0 0.25rem 0;
  font-size: 14px;
  background-color: none;
  border: none;
  width: auto;
  letter-spacing: normal;

  &:hover {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.red};
  }

  &:visited {
    color: ${({ theme }) => theme.colors.red};
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 14px;
  }
`;

export default styled.button<Props>`
  padding: 0.75rem 2rem;
  background-color: transparent;
  border: 1.5px solid
    ${(props) => (props.red ? props.theme.colors.red : props.theme.colors.white)};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: all 500ms ease;
  width: ${(props) => props.full && '100%'};
  font-size: 14px;
  letter-spacing: 0.15rem;

  &:hover {
    background-color: ${(props) =>
      props.red ? props.theme.colors.red : props.theme.colors.white};
    color: ${({ theme }) => theme.colors.yellow};
  }

  &:disabled {
    pointer-events: none;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 16px;
  }

  ${(props) => props.solid && solidStyle};
  ${(props) => props.text && textStyle}
`;
