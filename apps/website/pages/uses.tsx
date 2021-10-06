import React from 'react';
import hydrate from 'next-mdx-remote/hydrate';
import { getFileBySlug, MDXPage } from '@/lib/mdx';
import MDXComponents from '@/components/mdx-components';
import { WebsiteDataType } from '@/lib/website-data-types.intf';
import { InferGetStaticPropsType } from 'next';
import Layout from '@/layouts/layout';
import tw from "twin.macro";

const StyledArticle = tw.article``;

type UsesProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Uses({ mdxSource }: UsesProps) {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });

  return (
    <Layout
      customMeta={{
        title: 'Uses – Sébastien Dubois',
        description: 'Stuff I use',
      }}
    >
      <StyledArticle className="article-content-wrapper">
        <div className="page-heading">
          What I use, like, enjoy, love, or can't live without
        </div>
        <p className="text-black dark:text-gray-300 mt-2 mb-8">
          Everyone has their own "toolkit". Here's a glimpse into mine. I don't
          intend to convince anyone that there are good choices. They're mine;
          that's all!
          <br />
          <br />
          Links for hardware are affiliate links.
        </p>
        <div>{content}</div>
      </StyledArticle>
    </Layout>
  );
}

export async function getStaticProps(): Promise<{ props: MDXPage }> {
  const uses = await getFileBySlug({ type: WebsiteDataType.USES });
  return { props: uses };
}
