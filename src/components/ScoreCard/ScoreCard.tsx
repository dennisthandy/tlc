import React, { useMemo } from 'react';

import { RecordTest } from '../../utils/types';
import { Container, Date, Desc, Icon, Score, Title, Wrapper } from './elements';

type Props = RecordTest;

export const ScoreCard: React.FC<Props> = (props) => {
  const isPass = useMemo(() => parseInt(props.score) > 450, []);

  return (
    <Container>
      <Title>
        {props.no_tes} | {props.jenis_ujian}
      </Title>
      <Wrapper style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Wrapper style={{ alignItems: 'center' }} gap="0.5em">
          <Icon>{isPass ? '😀' : '😭'}</Icon>
          <Wrapper direction="column">
            <Date>
              {props.tgl_ujian} / {props.jam_ujian}
            </Date>
            <Score isPass={isPass}>{props.score}</Score>
            <Desc>
              Listening {props.listening}, Reading {props.reading}, Structure{' '}
              {props.structure}
            </Desc>
          </Wrapper>
        </Wrapper>
        {/* <Detail>Detail</Detail> */}
      </Wrapper>
    </Container>
  );
};
