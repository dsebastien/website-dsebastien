import React from 'react';
import Layout from '@/layouts/layout';
import Link from 'next/link';
import tw from "twin.macro";
import NewsletterSubscribe from "@/components/newsletter-subscribe";

const StyledDiv = tw.div``;

const IndexPage = () => {
  return (
    <Layout>
      <StyledDiv className="article-content-wrapper">
        <div className="page-heading">Hello! <span className="animate-wave ">👋</span></div>
        <p className="text-gray-900 dark:text-gray-400 text-5xl	tracking-wide leading-normal">
          I'm <span className="font-bold text-gray-900 dark:text-gray-100">Sébastien Dubois</span>, <span className="font-bold text-gray-900 dark:text-gray-100">author ✍️</span>, <span className="font-bold text-gray-900 dark:text-gray-100">founder 🚀</span>, <span className="font-bold text-gray-900 dark:text-gray-100">CTO 🔨</span> & <span className="font-bold text-gray-900 dark:text-gray-100">bootstrapper ✨</span>.
        </p>
        <p className="text-3xl text-gray-900 dark:text-gray-400">
          Want to get in touch? 👉 <span className="font-bold"><Link href="https://twitter.com/dSebastien">@dSebastien</Link></span>
        </p>

        <NewsletterSubscribe />
      </StyledDiv>
    </Layout>
  );
};

export default IndexPage;
