import styled from 'styled-components';

interface props {
  readonly center?: boolean;
  readonly px?: string;
}

export default styled.div<props>`
  max-width: 100%;
  margin: 0 ${(props) => (props.center ? 'auto' : 0)};

  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    max-width: ${(props) => props.theme.breakpoints.sm};
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    max-width: ${(props) => props.theme.breakpoints.md};
    padding: 0 ${(props) => (props.px ? props.px : 0)};
  }

  /* @media screen and (min-width: ${(props) => props.theme.breakpoints.lg}) {
    max-width: ${(props) => props.theme.breakpoints.lg};
    padding: 0 ${(props) => (props.px ? props.px : 0)};
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.xl}) {
    max-width: ${(props) => props.theme.breakpoints.xl};
    padding: 0 ${(props) => (props.px ? props.px : 0)};
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.xxl}) {
    max-width: ${(props) => props.theme.breakpoints.xxl};
    padding: 0 ${(props) => (props.px ? props.px : 0)};
  } */
`;
