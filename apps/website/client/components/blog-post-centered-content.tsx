import React, { PropsWithChildren } from 'react';

type BlogPostCenteredContentProps = PropsWithChildren<{}>;

/**
 * Centered content
 * @constructor
 */
const BlogPostCenteredContent = ({ children }: BlogPostCenteredContentProps) => {
  return <div className="flex justify-around ">{children}</div>;
};

export default BlogPostCenteredContent;
