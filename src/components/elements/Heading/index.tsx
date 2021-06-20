import styled from 'styled-components';

interface Props {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  white?: boolean;
  red?: boolean;
  brown?: boolean;
  text?: boolean;
  center?: boolean;
  italic?: boolean;
  inline?: boolean;
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
  color: ${(props) =>
    props.white
      ? props.theme.colors.white
      : props.red
      ? props.theme.colors.red
      : props.brown
      ? props.theme.colors.brown
      : props.theme.colors.black};
  display: ${(props) => (props.inline ? 'inline' : 'block')};
`;
