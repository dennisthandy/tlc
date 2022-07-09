import styled, { css } from 'styled-components';

interface Props {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  text?: boolean;
  center?: boolean;
  italic?: boolean;
  inline?: boolean;
  readonly banner?: boolean;
}

export default styled.p<Props>`
  font-weight: ${(props) => (props.text ? 'normal' : 600)};
  letter-spacing: ${(props) => (props.text ? 'none' : '0.15rem')};
  text-align: ${(props) => (props.center ? 'center' : 'left')};
  font-style: ${(props) => props.italic && 'italic'};
  font-size: ${(props) =>
    props.h1
      ? '32px'
      : props.h2
      ? '24px'
      : props.h3
      ? '18px'
      : props.h4
      ? '16px'
      : props.h5
      ? '12px'
      : '10px'};
  color: ${({ theme }) => theme.colors.label.primary};
  display: ${(props) => (props.inline ? 'inline' : 'block')};
  ${({ banner }) =>
    banner &&
    css`
      margin: 0;
      padding: 0;
      background: ${({ theme: { colors } }) => colors.red};
      color: white;
      padding: 0.5em 0;
      position: absolute;
      top: 0;
      right: 0;
      transform: translateX(30%) translateY(0%) rotate(45deg);
      transform-origin: top left;
      font-size: 12px;

      &::before,
      &::after {
        content: '';
        position: absolute;
        top: 0;
        margin: 0 -1px; /* tweak */
        width: 100%;
        height: 100%;
        background: ${({ theme: { colors } }) => colors.red};
      }
      &::before {
        right: 100%;
      }
    `}
`;
