import Link from 'next/link';
import React, { ReactElement } from 'react';
import AppLayout from '../components/layout/AppLayout';

const IndexPage = () => {
  return (
    <div>
      <Link href="/eztimate">
        <a>Eztimate</a>
      </Link>
    </div>
  );
};

IndexPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default IndexPage;
