import React, {useState} from 'react';
import {getAllFilesFrontMatter} from '@/lib/mdx';
import {FrontMatter} from '@/lib/front-matter.intf';
import BlogPostSummary from '@/components/blog-post-summary';
import Layout from '@/layouts/layout';
import {FaDev, FaHashtag, FaMedium} from 'react-icons/fa';
import SocialLink from '@/components/social-link';
import {WebsiteDataType} from "@/lib/website-data-types.intf";
import NewsletterSubscribe from "@/components/newsletter-subscribe";
import {SITE_DESCRIPTION} from "../constants";
import {GetStaticProps} from "next";

interface BlogProps {
  entries: FrontMatter[];
}

/**
 * Blog homepage
 * @param input
 * @constructor
 */
export default function Blog(input: BlogProps) {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = input.entries
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
        description: SITE_DESCRIPTION,
      }}
    >
      <article className="page-content-wrapper space-y-4">
        <h1 className="page-heading">Blog</h1>
        <p className="text-gray-900 dark:text-gray-400">
          I've published <b>{`${input.entries.length}`}</b> article
          {input.entries.length > 1 && 's'} here. I usually post everything here,
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
        <div className="relative w-full">
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
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mt-8 text-black dark:text-white">
          All Posts
        </h3>
        {!filteredBlogPosts.length && (
          <p className="text-gray-900 dark:text-gray-400">
            No match found. Please refine your search criteria.
          </p>
        )}
        {filteredBlogPosts.map((post) => (
          <div
            className="blog-post-summary-container"
            key={post.title}
          >
            <BlogPostSummary {...post} />
          </div>
        ))}

        <div className="mt-4">
          <NewsletterSubscribe />
        </div>

      </article>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<BlogProps> = async(_context) => {
  const posts = await getAllFilesFrontMatter(WebsiteDataType.BLOG) as FrontMatter[]; // FIXME remove cast

  return {
    props: {
      entries: posts,
    }
  };
}
