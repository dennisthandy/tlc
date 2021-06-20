/* eslint-disable react/display-name */
import React from 'react';
import { IDataTableColumn } from 'react-data-table-component';
import styled from 'styled-components';

interface ScoreProps {
  isPass?: boolean;
}

const Score = styled.span<ScoreProps>`
  padding: 0.15rem 0.75rem;
  font-weight: ${(props) => props.isPass && 600};
  /* background-color: ${(props) => props.isPass && 'green'}; */
  color: ${(props) => props.isPass && 'green'};
`;

const columns: IDataTableColumn<any>[] = [
  {
    name: 'No Ujian',
    selector: 'no_tes',
    sortable: true,
  },
  {
    name: 'Score',
    selector: 'score',
    sortable: true,
    width: '5rem',
    format: (cell: any) => <Score isPass={cell.score >= 450}>{cell.score}</Score>,
  },
  {
    name: 'Listening',
    selector: 'listening',
    sortable: true,
    width: '5rem',
  },
  {
    name: 'Structure',
    selector: 'structure',
    sortable: true,
    width: '5rem',
  },
  {
    name: 'Reading',
    selector: 'reading',
    sortable: true,
    width: '5rem',
  },
  {
    name: 'Nama Peserta',
    selector: 'nama_peserta',
    sortable: true,
    width: '10rem',
  },
  {
    name: 'Tgl. Tes',
    selector: 'tgl_ujian',
    sortable: true,
  },
  {
    name: 'Waktu Tes',
    selector: 'jam_ujian',
    sortable: true,
  },
  {
    name: 'Jenis Ujian',
    selector: 'jenis_ujian',
    sortable: true,
  },
];

export { columns };
