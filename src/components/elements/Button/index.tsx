import styled, { css } from 'styled-components';

interface Props {
  solid?: boolean;
  full?: boolean;
  red?: boolean;
  text?: boolean;
  bgColor?: string;
}

const solidStyle = css`
  background-color: ${({ theme }) => theme.colors.red};
  border: 1.5px solid ${({ theme }) => theme.colors.yellow};
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

  &:visited {
    color: ${({ theme }) => theme.colors.red};
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 14px;
  }
`;

export default styled.button<Props>`
  padding: 0.75rem 2rem;
  background-color: ${(props) => props.bgColor};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: all 500ms ease;
  width: ${(props) => props.full && '100%'};
  font-size: 14px;
  letter-spacing: 0.15rem;

  &:disabled {
    pointer-events: none;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 16px;
  }

  ${(props) => props.solid && solidStyle};
  ${(props) => props.text && textStyle}
`;
