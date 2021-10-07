import React from 'react';
import Layout from '@/layouts/layout';
import {
  FaBook,
} from 'react-icons/fa';
import tw from 'twin.macro';
import Image from 'next/image';
import NewsletterSubscribe from "@/components/newsletter-subscribe";

const StyledArticle = tw.article``;

const BooksPage = () => {
  return (
    <Layout
      customMeta={{
        title: 'Books – Sébastien Dubois',
        description: 'My books',
      }}
    >
      <StyledArticle className="article-content-wrapper">
        <div className="page-heading">
          My Books <FaBook className="inline" />
        </div>

        <section className="mb-8 text-gray-900 dark:text-gray-400 grid grid-cols-1 md:grid-cols-2 items-center gap-6">

          <a href="https://dev-concepts.dev" rel="noopener">
            <article className="book-card">
              <div>
                <Image
                  alt="Dev Concepts"
                  width={320}
                  height={367}
                  src="/static/images/books/dev-concepts-full-edition-cover-3d.png"
                  className="rounded-md"
                />
              </div>
              <footer>
                <span>A collection of 12 e-books about Software Development and IT, exploring various sub-domains of the field. A solid reference for Software Crafters.</span>
              </footer>
            </article>
          </a>

          <a href="https://www.amazon.com/Learn-TypeScript-Building-Applications-understanding/dp/1789615860?tag=dsebastien00-20" rel="noopener">
            <article className="book-card">
              <div>
                <Image
                  alt="Learn TypeScript 3 By Building Web Applications"
                  width={250}
                  height={309}
                  src="/static/images/books/learn-typescript-3-by-building-web-applications.png"
                  className="rounded-md"
                />
              </div>
              <footer>
                <span>Learn TypeScript and many of its features by building state of art web applications from scratch with the help of modern tooling, frameworks, and libraries.</span>
              </footer>
            </article>
          </a>

        </section>
        <section>
          <NewsletterSubscribe />
        </section>
      </StyledArticle>
    </Layout>
  );
};

export default BooksPage;
