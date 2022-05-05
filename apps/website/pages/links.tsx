import React from 'react';
import Layout from '@/layouts/layout';
import {
  FaLink,
} from 'react-icons/fa';
import Image from 'next/image';
import NewsletterSubscribe from "@/components/newsletter-subscribe";

const LinksPage = () => {
  return (
    <Layout
      customMeta={{
        title: 'Links – Sébastien Dubois',
        description: 'My links',
      }}
    >
      <article className="article-content-wrapper">
        <h1 className="page-heading">
          My Links <FaLink className="inline" />
        </h1>

        Below are projects that I wholeheartedly support. I'm an affiliate for some, but I really care about those.

        <section className="mt-4 mb-8 text-gray-900 dark:text-gray-400 flex grid grid-cols-1 sm:grid-cols-2 grid-flow-row items-center gap-6">

          <a href="https://gumroad.com/a/249779315/cUQxC" rel="noopener">
            <article className="project-card">
              <div>
                <Image
                  alt="Rosie.land"
                  width={132}
                  height={132}
                  src="/static/images/links/rosie.land.webp"
                  className="rounded-md bg-white"
                />
              </div>
              <footer>
                <span>Rosie.land - A treasure trove of community building information curated by Rosie Sherry</span>
              </footer>
            </article>
          </a>

          <a href="https://gumroad.com/a/249779315/GoImj" rel="noopener">
            <article className="project-card">
              <div>
                <Image
                  alt="The Indiependent Community"
                  width={132}
                  height={132}
                  src="/static/images/links/indiependent.webp"
                  className="rounded-md bg-white"
                />
              </div>
              <footer>
                <span>The Indiependent Community - A community for indie founders led by Rosie Sherry</span>
              </footer>
            </article>
          </a>

          <a href="https://gumroad.com/a/535516275/VtAjF" rel="noopener">
            <article className="project-card">
              <div>
                <Image
                  alt="Calmer Notes"
                  width={132}
                  height={132}
                  src="/static/images/links/calmer-notes.jpg"
                  className="rounded-md bg-white"
                />
              </div>
              <footer>
                <span>Calmer Notes - A book about Personal Knowledge Management (PKM)</span>
              </footer>
            </article>
          </a>

        </section>
        <section>
          <NewsletterSubscribe />
        </section>
      </article>
    </Layout>
  );
};

export default LinksPage;
