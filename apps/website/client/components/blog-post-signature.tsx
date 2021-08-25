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
        PS: If you want to learn tons of other cool things about
        product/software/Web development, then{' '}
        <a href="https://dev-concepts.dev" rel="noopener">
          check out the Dev Concepts series of books
        </a>
        ,{' '}<a href="https://join.slack.com/t/softwarecrafterstalk/shared_invite/zt-umgx3v06-4rtJ20PXz867GTPzCk1zeQ" rel="noopener">
        join the Software Crafters community
      </a>
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
