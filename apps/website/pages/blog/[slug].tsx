import React from 'react';
import hydrate from 'next-mdx-remote/hydrate';
import MDXComponents from '@/components/mdx-components';
import { FrontMatter } from '@/lib/front-matter.intf';
import { getFileBySlug, getFiles } from '@/lib/mdx';
import { WebsiteDataType } from '@/lib/website-data-types.intf';
import { MdxRemote } from 'next-mdx-remote/types';
import BlogArticleLayout from '../../layouts/blog-article';

interface BlogProps {
  mdxSource: MdxRemote.Source;
  frontMatter: FrontMatter;
}

/**
 * Renders a specific blog post
 * @param input
 * @constructor
 */
const BlogPost = (input: BlogProps) => {
  const content = hydrate(input.mdxSource, {
    components: MDXComponents,
  });

  return (
    <BlogArticleLayout frontMatter={input.frontMatter}>
      {content}
    </BlogArticleLayout>
  );
};

export async function getStaticPaths() {
  const posts = await getFiles(WebsiteDataType.BLOG);

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
}

/**
 * The 'slug' property name comes from the pages/blog/[slug].tsx page!
 * @param input
 */
export async function getStaticProps(input: { params: { slug: string } }) {
  const post = await getFileBySlug({
    type: WebsiteDataType.BLOG,
    slug: input.params.slug,
  });
  return { props: post };
}

export default BlogPost;
