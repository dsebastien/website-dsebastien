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
        title: 'Projects – Sébastien Dubois',
        description: 'My projects',
      }}
    >
      <StyledArticle className="article-content-wrapper">
        <h1 className="page-heading">
          My projects <FaBook className="inline" />
        </h1>

        <section className="mb-8 text-gray-900 dark:text-gray-400 flex grid grid-cols-1 sm:grid-cols-2 grid-flow-row items-center gap-6">

          <a href="https://dsebastien.net/blog/2021-08-25-software-crafters-community" rel="noopener">
            <article className="project-card">
              <div>
                <Image
                  alt="Community"
                  width={200}
                  height={200}
                  src="/static/images/projects/community.svg"
                  className="rounded-md bg-white"
                />
              </div>
              <footer>
                <span>An online community for Software Crafters.</span>
              </footer>
            </article>
          </a>

          <a href="https://stark.nbb.be" rel="noopener">
            <article className="project-card">
              <div>
                <Image
                  alt="Stark Framework"
                  width={345}
                  height={100}
                  src="/static/images/projects/stark.svg"
                  className="rounded-md bg-white"
                />
              </div>
              <footer>
                <span>An Open Source Enterprise front-end framework on top of Angular.</span>
              </footer>
            </article>
          </a>

          <a href="https://github.com/NationalBankBelgium/REST-API-Design-Guide/wiki" rel="noopener">
            <article className="project-card">
              <div>
                <Image
                  alt="REST API Design Guide"
                  width={345}
                  height={100}
                  src="/static/images/projects/rest.png"
                  className="rounded-md bg-white"
                />
              </div>
              <footer>
                <span>A comprehensive Open Source design guide for RESTful APIs</span>
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
