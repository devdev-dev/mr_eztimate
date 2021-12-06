import Head from 'next/head';
import React, { ReactElement } from 'react';
import Footer from '../common/Footer';
import AppLayout from '../layout/AppLayout';
import SignUp from './SignUp';

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Eztimate Login</title>
      </Head>
      <SignUp />
      <Footer />
    </>
  );
};

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default LoginPage;
