import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 14px;
  background-color: ${({ theme: { colors } }) => colors.bg.tertiary};
  box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(80px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 9px 8px 8px;
  gap: 8px;
  width: 100%;
  height: 108px;
  color: ${({ theme: { colors } }) => colors.label.primary};
`;

export const Title = styled.p`
  color: ${({ theme: { colors } }) => colors.label.secondary};
  font-size: 13px;
  font-weight: 600;
  padding-bottom: 0.5em;
  border-bottom: 1.5px solid;
  border-color: ${({ theme: { colors } }) => colors.label.secondary};
  width: 100%;
`;

export const Icon = styled.div`
  display: grid;
  place-items: center;
  background-color: #000000;
  border-radius: 10px;
  width: 76px;
  height: 56px;
  font-size: 20px;
`;

export const Date = styled.p`
  color: ${({ theme: { colors } }) => colors.label.secondary};
  font-size: 12px;
  font-weight: 500;
`;

export const Score = styled.strong<{ isPass?: boolean }>`
  color: ${({ theme: { colors }, isPass }) =>
    isPass ? colors.green : colors.label.primary};
  font-size: 13px;
  font-weight: 600;
`;

export const Desc = styled.p`
  color: ${({ theme: { colors } }) => colors.label.secondary};
  font-size: 11px;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* max-width: 200px; */
`;

export const Wrapper = styled.div<Partial<{ direction: 'column' | 'row'; gap: string }>>`
  display: flex;
  width: 100%;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap};
`;

export const Detail = styled.button`
  background-color: ${({ theme: { colors } }) => colors.gray[1]};
  color: #ffffff;
  border-radius: 1em;
  border: none;
  padding: 4px 20px;
  height: 26px;
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
`;
