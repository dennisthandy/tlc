import styled from 'styled-components';

export const Wrapper = styled.header`
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem 1rem;
  border-bottom: 1.25px solid rgba(255, 255, 255, 0.3);

  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    flex-wrap: nowrap;
  }
`;

export const Brand = styled.div`
  display: grid;
  grid-auto-flow: column;
  place-content: start;
  align-items: center;
  gap: 1rem;
`;
