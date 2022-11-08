import React from 'react';
import Link from 'next/link';
import Layout from '@/layouts/layout';

const NotFound = () => {
  return (
    <Layout
      customMeta={{
        title: '404 Page not found – Sébastien Dubois',
      }}
    >
      <div className="max-w-2xl mx-auto">
        <h1 className="page-heading">Doh...</h1>
        <p className="text-gray-900 dark:text-gray-400 mb-8">
          You seem to be lost. Hold my hand (yes, it's safe here), and let me
          show you the way.
        </p>
        <Link href="/" className="site-button">
          Go back home
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
