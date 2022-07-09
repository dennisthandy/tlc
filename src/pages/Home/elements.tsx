import styled from 'styled-components';

export const Scores = styled.div`
  display: grid;
  gap: 1em;
  max-height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1em 0.5em;
`;

export const Wrapper = styled.section`
  display: grid;
  padding: 1rem 1rem 2rem 1rem;
  gap: 0.5rem;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    gap: 1rem;
  }
`;

export const HeadingWrapper = styled.div`
  display: grid;
  margin-top: 2em;
`;

export const Decoration = styled.img`
  width: 18rem;
  height: auto;
  margin: 0 auto;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 20rem;
  }
`;
