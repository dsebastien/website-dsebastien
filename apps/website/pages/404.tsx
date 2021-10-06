import React from 'react';
import Link from 'next/link';
import Layout from '@/layouts/layout';
import tw from "twin.macro";

const StyledDiv = tw.div``;

const NotFound = () => {
  return (
    <Layout
      customMeta={{
        title: '404 Page not found – Sébastien Dubois',
      }}
    >
      <StyledDiv className="max-w-2xl mx-auto">
        <div className="page-heading">Doh...</div>
        <p className="text-gray-900 dark:text-gray-400 mb-8">
          You seem to be lost. Hold my hand (yes, it's safe here), and let me
          show you the way.
        </p>
        <Link href="/">
          <a className="site-button">Go back home</a>
        </Link>
      </StyledDiv>
    </Layout>
  );
};

export default NotFound;
