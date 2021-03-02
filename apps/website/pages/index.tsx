import React from 'react';
import Layout from '@/layouts/layout';

const IndexPage = () => {
  return (
    <Layout>
      <div className="article-content-wrapper">
        <h1 className="page-heading">Hi, I'm Sébastien Dubois</h1>
        <p>
          There's not much to see here for now, but check out{' '}
          <a href="/blog">my blog</a>, and the <a href="/about">about page</a>.
        </p>
      </div>
    </Layout>
  );
};

export default IndexPage;
