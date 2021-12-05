import React, {ReactElement} from 'react';
import AppLayout from "../components/layout/AppLayout";

const IndexPage = () => {
    return (<>THE PAGE</>)
}

IndexPage.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout>{page}</AppLayout>;
};

export default IndexPage;
