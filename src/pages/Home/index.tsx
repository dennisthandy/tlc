import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import styled from 'styled-components';

import Heading from '../../components/elements/Heading';
import Loading from '../../components/elements/Loading';
import Form from '../../components/Form';
// import { columns } from './columns';

// interface ScoreProps {
//   isPass?: boolean;
// }

// const Score = styled.span<ScoreProps>`
//   padding: 0.15rem 0.75rem;
//   font-weight: ${(props) => props.isPass && 600};
//   color: ${(props) => props.isPass && 'green'};
// `;

const Wrapper = styled.section`
  display: grid;
  padding: 1rem 1rem 2rem 1rem;
  gap: 2rem;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    gap: 1rem;
  }
`;

const HeadingWrapper = styled.div`
  display: grid;
`;

const Decoration = styled.img`
  width: 18rem;
  height: auto;
  margin: 0 auto;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 20rem;
  }
`;

const Home: React.FC = (): React.ReactElement => {
  const [data, setData] = useState<null | []>(null);
  const [nim, setNim] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const columns = [
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
      // format: (cell: any) => <Score isPass={cell.score >= 450}>{cell.score}</Score>,
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNim(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    let res: any = await fetch('/ss', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `idpeserta=${nim}`,
    });
    res = await res.json();
    setData(res.datax);
    setSuccess(res.success);
    setLoading(false);
  };

  const handleReset = (): void => {
    setData(null);
    setNim('');
    setSuccess('');
  };

  return (
    <Wrapper>
      <HeadingWrapper>
        <Heading center h1 as="h1">
          Cek Nilai
        </Heading>
        <Heading h1 center italic white>
          Test of English for Academic Purposes
        </Heading>
      </HeadingWrapper>
      {loading && <Loading text="Harap tunggu, Sedang memuat data..." />}

      {!loading && (
        <Form
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleReset={handleReset}
          value={nim}
        />
      )}

      {!loading && !data && !success && (
        <Decoration src="/ilustration.svg" alt="Decoration" />
      )}

      {success === 'no' && !data && (
        <>
          <Decoration src="/bg-16.svg" alt="Library" />
          <Heading brown h4 center>
            Data tidak ditemukan...
          </Heading>
        </>
      )}

      {data && !loading && (
        <>
          <Heading h4 brown text>
            Ditemukan{' '}
            <Heading inline h4 as="span" text>
              {data.length}{' '}
            </Heading>
            kali riwayat tes.
          </Heading>
          <DataTable
            columns={columns}
            data={data}
            noHeader
            striped
            style={{ borderRadius: '.25rem' }}
          />
        </>
      )}
    </Wrapper>
  );
};

export default Home;
