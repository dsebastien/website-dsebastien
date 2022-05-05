import React from 'react';
import Layout from '@/layouts/layout';
import NewsletterSubscribe from "@/components/newsletter-subscribe";
import {SITE_DESCRIPTION} from "../constants";

/**
 * News homepage
 * @param input
 * @constructor
 */
export default function News() {
  return (
    <Layout
      customMeta={{
        title: 'Newsletter – Sébastien Dubois',
        description: SITE_DESCRIPTION,
      }}
    >
      <article className="page-content-wrapper space-y-4">
        <h1 className="page-heading">Newsletter</h1>

        <p>
          I publish a weekly newsletter. Through it, I share a glimpse into my journey, the projects I'm working on, and the discoveries I make along the way.
        </p>

        <div className="">
          <NewsletterSubscribe />
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mt-8 text-black dark:text-white">
          Past editions
        </h3>
        <p className="prose dark:prose-dark">
          The past editions of my newsletter are available <a href="https://newsletter.dsebastien.net">on Revue</a>
        </p>

      </article>
    </Layout>
  );
}
