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
        <h1 className="page-heading">Hello! <span className="animate-wave ">👋</span></h1>
        <p className="text-gray-900 dark:text-gray-400 text-5xl	tracking-wide leading-normal">
          I'm <span className="font-bold">Sébastien Dubois</span>, an <span className="font-bold">author ✍️</span>, <span className="font-bold">crafter 🔨</span>, <span className="font-bold">CTO 🚀</span>, and <span className="font-bold">IndieHacker ✨</span>
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
