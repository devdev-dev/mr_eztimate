import Head from 'next/head';
import React, { ReactElement } from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import AppLayout from '../components/layout/AppLayout';

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Eztimate Home</title>
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap" rel="stylesheet" />
      </Head>
      <Hero />
      <Footer />
    </>
  );
};

IndexPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default IndexPage;
