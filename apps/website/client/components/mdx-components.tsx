import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
import Tweet from 'react-tweet-embed';

import Step from '@/components/step';

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
  Tweet,
};

export default MDXComponents;
