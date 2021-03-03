import React from 'react';
import Link from 'next/link';
import { FrontMatter } from '@/lib/front-matter.intf';
import tw from 'twin.macro';

const StyledLink = tw.a``;

type BlogPostSummaryProps = Pick<FrontMatter, 'title' | 'summary' | 'slug'>;

/**
 * Short summary of a blog post
 * @param title
 * @param summary
 * @param slug
 * @constructor
 */
const BlogPostSummary = ({ title, summary, slug }: BlogPostSummaryProps) => {
  return (
    <Link href={`/blog/${slug}`}>
      <StyledLink className="w-full mb-4">
        <div className="flex flex-col md:flex-row justify-between">
          <h4 className="text-lg md:text-xl font-medium mb-2 w-full text-gray-900 dark:text-gray-100">
            {title}
          </h4>
        </div>
        <p className="text-gray-900 dark:text-gray-400">{summary}</p>
      </StyledLink>
    </Link>
  );
};

export default BlogPostSummary;
