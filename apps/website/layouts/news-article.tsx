import React, { PropsWithChildren } from 'react';
import Image from 'next/image';
import { parseISO, format } from 'date-fns';

import { FrontMatter } from '@/lib/front-matter.intf';
import Layout from './layout';
import tw from 'twin.macro';

const StyledArticle = tw.article``;

interface EntryDetails {
  publishedAt: string;
  slug: string;
}

const editUrl = (details: EntryDetails) =>
  `https://github.com/dsebastien/website-dsebastien/edit/main/apps/website/data/news/${details.publishedAt}-${details.slug}.mdx`;

const discussUrl = (details: EntryDetails) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://dsebastien.net/news/${details.publishedAt}-${details.slug}`
  )}`;

type NewsLayoutProps = PropsWithChildren<{
  frontMatter: FrontMatter;
}>;

/**
 * Layout for news articles
 * @param children
 * @param frontMatter
 * @constructor
 */
const NewsArticleLayout = ({ children, frontMatter }: NewsLayoutProps) => {
  return (
    <Layout
      customMeta={{
        title: `${frontMatter.title} – Dubois Sébastien`,
        description: frontMatter.summary,
        image: `https://dsebastien.net${frontMatter.image}`,
        date: new Date(frontMatter.publishedAt).toISOString(),
        type: 'article',
        keywords: frontMatter.keywords.join(', '),
      }}
    >
      <StyledArticle className="article-content-wrapper">
        <h1 className="page-heading">{frontMatter.title}</h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2 mb-8">
          <div className="flex items-center">
            <a href="https://twitter.com/dSebastien" className="rounded-full">
              <Image
                alt="Dubois Sébastien"
                height={24}
                width={24}
                src="/avatar.jpeg"
                className="rounded-full"
              />
            </a>
            <p className="text-sm text-gray-700 dark:text-gray-300 ml-2">
              {frontMatter.by}
              {'Sébastien Dubois / '}
              {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
          <p className="text-sm text-gray-500 mt-2 md:mt-0">
            {frontMatter.readingTime?.text}
          </p>
        </div>
        <div className="prose dark:prose-dark max-w-none w-full">
          {children}
        </div>
        <div className="mt-8 text-sm text-gray-700 dark:text-gray-300">
          <a
            href={discussUrl({ publishedAt: frontMatter.publishedAt, slug: frontMatter.slug })}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Discuss on Twitter'}
          </a>
          {` • `}
          <a
            href={editUrl({ publishedAt: frontMatter.publishedAt, slug: frontMatter.slug })}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Edit on GitHub'}
          </a>
        </div>
      </StyledArticle>
    </Layout>
  );
};

export default NewsArticleLayout;
