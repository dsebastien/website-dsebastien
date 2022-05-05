import React from 'react';
import Layout from '@/layouts/layout';
import Link from 'next/link';
import NewsletterSubscribe from "@/components/newsletter-subscribe";

const IndexPage = () => {
  return (
    <Layout>
      <div className="article-content-wrapper">
        <h1 className="page-heading">Hello! <span className="animate-wave">👋</span></h1>
        <p className="text-gray-900 dark:text-gray-400 text-5xl	tracking-wide leading-normal">
          I'm <span className="font-bold text-gray-900 dark:text-gray-100">Sébastien Dubois</span>, <span className="font-bold text-gray-900 dark:text-gray-100">Author</span> ✍, <span className="font-bold text-gray-900 dark:text-gray-100">Founder</span> 🚀, <span className="font-bold text-gray-900 dark:text-gray-100">CTO</span> 🔨 & <span className="font-bold text-gray-900 dark:text-gray-100">Indie Hacker</span> ✨.
        </p>
        <p className="text-3xl text-gray-900 dark:text-gray-400">
          Want to get in touch? 👉 <span className="font-bold"><Link href="https://twitter.com/dSebastien">@dSebastien</Link></span>
        </p>

        <NewsletterSubscribe />
      </div>
    </Layout>
  );
};

export default IndexPage;
