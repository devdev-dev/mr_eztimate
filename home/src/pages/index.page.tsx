import Head from 'next/head';
import React, { ReactElement } from 'react';
import Footer from './common/Footer';
import Hero from './index/Hero';
import AppLayout from './layout/AppLayout';

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Eztimate Home</title>
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
