import React, { ReactElement } from 'react';
import AppLayout from '../components/layout/AppLayout';
import { supabase } from '../utils/supabase';

const IndexPage = () => {
  console.log(supabase.auth.session());
  return <>THE PAGE</>;
};

IndexPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default IndexPage;
