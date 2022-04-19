import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import Step from '@/components/step';
import {
  CodePen,
  Gist,
  Spotify,
  Tweet,
  Twitch,
  TwitterFollowButton,
  YouTube,
} from 'mdx-embed';
import BlogPostSignature from './blog-post-signature';
import BlogPostWarning from './blog-post-warning';
import BlogPostCenteredContent from './blog-post-centered-content';
import BlogPostTip from './blog-post-tip';
import BlogPostQuote from "./blog-post-quote";
import BlogPostNote from "@/components/blog-post-note";
import PKMSignature from "@/components/pkm-signature";

type CustomLinkProps = { href: string } & any;

const CustomLink = (props: CustomLinkProps) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents = {
  Image,
  a: CustomLink,
  Step,
  Gist,
  CodePen,
  Spotify,
  Twitch,
  Tweet,
  YouTube,
  TwitterFollowButton,
  BlogPostNote,
  BlogPostQuote,
  BlogPostSignature,
  BlogPostTip,
  BlogPostWarning,
  BlogPostCenteredContent,
  PKMSignature,
};

export default MDXComponents;
