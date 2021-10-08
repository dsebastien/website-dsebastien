import React, {useState} from 'react';
import {getAllFilesFrontMatter} from '@/lib/mdx';
import {FrontMatter} from '@/lib/front-matter.intf';
import Layout from '@/layouts/layout';
import tw from 'twin.macro';
import {WebsiteDataType} from "@/lib/website-data-types.intf";
import NewsletterEditionSummary from "@/components/newsletter-edition-summary";
import NewsletterSubscribe from "@/components/newsletter-subscribe";
import {BLOG_DESCRIPTION} from "../constants";

const StyledArticle = tw.article``;

/**
 * News homepage
 * @param input
 * @constructor
 */
export default function News(input: { entries: FrontMatter[] }) {
  const [searchValue, setSearchValue] = useState('');
  const filteredEntries = input.entries
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((entry) => {
      if (!entry.title) {
        throw new Error(`Invalid entry title: ${JSON.stringify(entry, null, 2)}`);
      }
      return entry.title.toLowerCase().includes(searchValue.toLowerCase());
    });

  return (
    <Layout
      customMeta={{
        title: 'Newsletter – Sébastien Dubois',
        description: BLOG_DESCRIPTION,
      }}
    >
      <StyledArticle className="page-content-wrapper space-y-4">
        <h1 className="page-heading">Newsletter</h1>
        <p className="text-gray-900 dark:text-gray-400">
          I've published <b>{`${input.entries.length}`}</b> edition{input.entries.length > 1 && 's'} of my newsletter. You can browse the past editions below.
        </p>

        <div className="">
          <NewsletterSubscribe />
        </div>

        <div className="relative w-full">
          <input
            aria-label="Search newsletters"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search newsletters"
            className="px-4 py-2 border-2 border-gray-300 dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
          <svg
            className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mt-8 text-black dark:text-white">
          Past Editions
        </h3>
        {!filteredEntries.length && (
          <p className="text-gray-900 dark:text-gray-400">
            No match found. Please refine your search criteria.
          </p>
        )}
        {filteredEntries.map((newsletterEdition) => (
          <div
            className="newsletter-edition-summary-container"
            key={newsletterEdition.title}
          >
            <NewsletterEditionSummary {...newsletterEdition} />
          </div>
        ))}
      </StyledArticle>
    </Layout>
  );
}

export async function getStaticProps() {
  const newsletterEditions = await getAllFilesFrontMatter(WebsiteDataType.NEWS);

  return { props: { entries:  newsletterEditions } };
}
