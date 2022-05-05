import React from 'react';
import Link from 'next/link';
import { FrontMatter } from '@/lib/front-matter.intf';

type BlogPostSummaryProps = Pick<
  FrontMatter,
  'title' | 'summary' | 'slug' | 'publishedAt'
>;

/**
 * Short summary of a blog post
 * @param title
 * @param summary
 * @param slug
 * @constructor
 */
const BlogPostSummary = ({
  title,
  summary,
  slug,
  publishedAt,
}: BlogPostSummaryProps) => {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <a className="w-full my-3 px-2 flex justify-between">
        <div>
          <div className="flex flex-col md:flex-row justify-between">
            <h4 className="text-lg md:text-xl font-medium mb-2 w-full text-gray-900 dark:text-gray-100">
              {title}
            </h4>
          </div>
          <p className="text-gray-900 dark:text-gray-400">{summary}</p>
        </div>
        <div className="flex flex-col justify-end flex-shrink-0">
          <span className="text-sm text-gray-900 dark:text-gray-400">
            {publishedAt}
          </span>
        </div>
      </a>
    </Link>
  );
};

export default BlogPostSummary;
