/* eslint-disable react/display-name */
import React, { useState } from 'react';

import Heading from '../../components/elements/Heading';
import Loading from '../../components/elements/Loading';
import Form from '../../components/Form';
import ScoreCard from '../../components/ScoreCard';
import { RecordTest } from '../../utils/types';
import { Decoration, HeadingWrapper, Scores, Wrapper } from './elements';

const Home: React.FC = (): React.ReactElement => {
  const [data, setData] = useState<null | RecordTest[]>(null);
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
        <Heading h3 center>
          Yuk cek nilai kamu 🧐
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
          <Heading h4 center>
            Data tidak ditemukan...
          </Heading>
        </>
      )}

      {data && !loading && (
        <>
          <Heading h4 text>
            Ditemukan{' '}
            <Heading inline h4 as="span" text>
              {data.length}{' '}
            </Heading>
            kali riwayat tes.
          </Heading>
          <Scores>
            {data.map((item) => (
              <ScoreCard {...item} key={item.no_tes} />
            ))}
          </Scores>
        </>
      )}
    </Wrapper>
  );
};

export default Home;
