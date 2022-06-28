/* eslint-disable react/display-name */
import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import styled from 'styled-components';

import Heading from '../../components/elements/Heading';
import Loading from '../../components/elements/Loading';
import Form from '../../components/Form';
import { columns } from './columns';

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
          <DataTable columns={columns} data={data} noHeader striped />
        </>
      )}
    </Wrapper>
  );
};

export default Home;
