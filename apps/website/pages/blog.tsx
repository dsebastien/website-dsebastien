import React, { useState } from 'react';
import { getAllFilesFrontMatter } from '@/lib/mdx';
import { FrontMatter } from '@/lib/front-matter.intf';
import BlogPostSummary from '@/components/blog-post-summary';
import Layout from '@/layouts/layout';
import { FaDev, FaHashtag, FaMedium } from 'react-icons/fa';
import SocialLink from '@/components/social-link';
import tw from 'twin.macro';

const StyledArticle = tw.article``;

/**
 * Blog homepage
 * @param input
 * @constructor
 */
export default function Blog(input: { posts: FrontMatter[] }) {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = input.posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((post) => {
      if (!post.title) {
        throw new Error(`Invalid post title: ${JSON.stringify(post, null, 2)}`);
      }
      return post.title.toLowerCase().includes(searchValue.toLowerCase());
    });

  return (
    <Layout
      customMeta={{
        title: 'Blog – Sébastien Dubois',
        description:
          'A glimpse of my journey. I write about programming, software/IT/solution architecture, code quality, IT security, entrepreneurship, management, leadership, and more.',
      }}
    >
      <StyledArticle className="page-content-wrapper">
        <h1 className="page-heading">Blog</h1>
        <p className="text-gray-900 dark:text-gray-400 mb-4">
          I've published {`${input.posts.length}`} article
          {input.posts.length > 1 && 's'} here. I usually post everything here,
          but you can also find my some of my content on{' '}
          <SocialLink
            url="http://dsebastien.medium.com"
            name="Medium"
            icon={
              <FaMedium className="inline hover:text-black hover:bg-white" />
            }
            ariaLabelText="Go to my blog on Medium"
            titleText="Go to my blog on Medium"
          />
          ,{' '}
          <SocialLink
            url="https://dev.to/dsebastien"
            name="DEV.to"
            icon={<FaDev className="inline hover:text-black hover:bg-white" />}
            ariaLabelText="Go to my blog on DEV.to"
            titleText="Go to my blog on DEV.to"
          />{' '}
          and{' '}
          <SocialLink
            url="https://dsebastien.hashnode.dev"
            name="Hashnode"
            icon={<FaHashtag className="inline" />}
            ariaLabelText="Go to my blog on HashNode"
            titleText="Go to my blog on HashNode"
          />
          . Use the search below to filter by title.
        </p>
        <div className="relative w-full mb-4">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles"
            className="px-4 py-2 border-2 border-gray-300 dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
          <svg
            className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          All Posts
        </h3>
        {!filteredBlogPosts.length && (
          <p className="text-gray-900 dark:text-gray-400 mb-4">
            No posts found.
          </p>
        )}
        {filteredBlogPosts.map((post) => (
          <div
            className="mt-4 border-2 rounded-md p-2 border-gray-300 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-400 hover:shadow-md transition-all ease-in duration-150 hover:cursor-pointer"
            key={post.title}
          >
            <BlogPostSummary {...post} />
          </div>
        ))}
      </StyledArticle>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}
