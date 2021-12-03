import React from 'react';
import tw from 'twin.macro';
import { TwitterFollowButton } from 'mdx-embed';
import NewsletterSubscribe from "@/components/newsletter-subscribe";

const StyledDiv = tw.div``;

/**
 * Signature for my blog posts
 * @constructor
 */
const BlogPostSignature = () => {
  return (
    <>
      <StyledDiv className="mb-2">
        PS: <a href="https://dev-concepts.dev" rel="noopener">
          check out the Dev Concepts collection of e-books</a>
        ,{' '}<a href="https://dsebastien.net/blog/2021-11-12-personal-knowledge-management-community" rel="noopener">
        join the Software Crafters community</a>, the <a href="https://dsebastien.net/pkm-community" rel="noopener">Personal Knowledge Management community</a>
        , and{' '}
        <a href="https://twitter.com/dSebastien" rel="noopener">
          come say hi on Twitter!
        </a>
        <div className="mt-6">
          <NewsletterSubscribe />
        </div>
      </StyledDiv>

      <TwitterFollowButton username="dSebastien" size="large" />
    </>
  );
};

export default BlogPostSignature;
