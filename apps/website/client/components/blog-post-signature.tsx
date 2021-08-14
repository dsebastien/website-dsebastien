import React from 'react';
import tw from 'twin.macro';
import { TwitterFollowButton } from 'mdx-embed';

const StyledDiv = tw.div``;

/**
 * Signature for my blog posts
 * @constructor
 */
const BlogPostSignature = () => {
  return (
    <>
      <StyledDiv className="mb-2">
        PS: If you want to learn tons of other cool things about
        product/software/Web development, then{' '}
        <a href="https://dev-concepts.dev" rel="noopener">
          check out the Dev Concepts series
        </a>
        ,{' '}
        <a
          href="https://dsebastien.net/newsletter"
          rel="noopener"
        >
          subscribe to my newsletter
        </a>
        , and{' '}
        <a href="https://twitter.com/dSebastien" rel="noopener">
          come say hi on Twitter!
        </a>
      </StyledDiv>

      <TwitterFollowButton username="dSebastien" size="large" />
    </>
  );
};

export default BlogPostSignature;
