import React from 'react';
import Layout from '@/layouts/layout';
import Link from 'next/link';
import tw from "twin.macro";

const StyledDiv = tw.div``;

const IndexPage = () => {
  return (
    <Layout>
      <StyledDiv className="article-content-wrapper">
        <h1 className="page-heading">Hi, I'm Sébastien Dubois 👋</h1>
        <p className="text-gray-900 dark:text-gray-400">
          There's not much to see here for now, but check out{' '}
          <Link href="/blog">my blog</Link>, <Link href="/news">my newsletter</Link>, and the <Link href="/about">about page</Link>.
        </p>
      </StyledDiv>
    </Layout>
  );
};

export default IndexPage;
