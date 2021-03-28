import React, { PropsWithChildren } from 'react';
import tw from 'twin.macro';

const StyledDiv = tw.div``;

type StyledDivProps = PropsWithChildren<{}>;

/**
 * Centered content
 * @constructor
 */
const BlogPostCenteredContent = ({ children }: StyledDivProps) => {
  return <StyledDiv className="flex justify-around ">{children}</StyledDiv>;
};

export default BlogPostCenteredContent;
