import React from 'react';
import Link from 'next/link';
import { FrontMatter } from '@/lib/front-matter.intf';
import tw from "twin.macro";

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
      <StyledLink className="w-full hover:cursor-pointer">
        <div className="border-2 rounded-md p-2 hover:border-gray-600 hover:shadow-md transition-all ease-in duration-150">
          <div className="mb-4 w-full">
            <div className="flex flex-col md:flex-row justify-between">
              <h4 className="text-lg md:text-xl font-medium mb-2 w-full text-gray-900 dark:text-gray-100">
                {title}
              </h4>
            </div>
            <p className="text-gray-900 dark:text-gray-400">{summary}</p>
          </div>
        </div>
      </StyledLink>
    </Link>
  );
};

export default BlogPostSummary;
