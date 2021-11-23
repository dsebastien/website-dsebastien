import React from 'react';
import hydrate from 'next-mdx-remote/hydrate';
import MDXComponents from '@/components/mdx-components';
import { FrontMatter } from '@/lib/front-matter.intf';
import { getFileBySlug, getFiles } from '@/lib/mdx';
import { WebsiteDataType } from '@/lib/website-data-types.intf';
import { MdxRemote } from 'next-mdx-remote/types';
import NewsArticleLayout from '../../layouts/news-article';

interface NewsProps {
  mdxSource: MdxRemote.Source;
  frontMatter: FrontMatter;
}

/**
 * Renders a specific newsletter edition
 * @param input
 * @constructor
 */
const NewsletterEdition = (input: NewsProps) => {
  const content = hydrate(input.mdxSource, {
    components: MDXComponents,
  });

  return (
    <NewsArticleLayout frontMatter={input.frontMatter}>
      {content}
    </NewsArticleLayout>
  );
};

/**
 * The 'slug' property name comes from the pages/news/[slug].tsx page!
 * @param input
 */
export async function getServerSideProps(input: { params: { slug: string } }) {
  const post = await getFileBySlug({
    type: WebsiteDataType.NEWS,
    slug: input.params.slug,
  });

  if(post.frontMatter.redirectUrl) {
    return {
      redirect: {
        destination: post.frontMatter.redirectUrl,
        permanent: true,
      }
    }
  }

  return {
    props: post,
  };
}

export default NewsletterEdition;
