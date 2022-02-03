import React from 'react';
import Layout from '@/layouts/layout';
import {
  FaBook,
} from 'react-icons/fa';
import tw from 'twin.macro';
import Image from 'next/image';
import NewsletterSubscribe from "@/components/newsletter-subscribe";

const StyledArticle = tw.article``;

const ProjectsPage = () => {
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

        <a href="https://focusd.app" rel="noopener">
            <article className="project-card">
              <div>
                <Image
                  alt="focusd productivity app"
                  width={132}
                  height={132}
                  src="/static/images/projects/focusd-logo-with-title.svg"
                  className="rounded-md"
                />
              </div>
              <footer>
                <span>An infinite outliner with a strong calendar integration. Take notes, block time, and focus on what really matters</span>
              </footer>
            </article>
          </a>

          <a href="https://developassion.gumroad.com/l/PersonalKnowledgeManagementLibrary" rel="noopener">
            <article className="project-card">
              <div>
                <Image
                  alt="Personal Knowledge Management Library"
                  width={132}
                  height={132}
                  src="/static/images/logos/pkm-library.svg"
                  className="rounded-md"
                />
              </div>
              <footer>
                <span>PKM Library: A collection of curated resources about Personal Knowledge Management (PKM)</span>
              </footer>
            </article>
          </a>

          <a href="https://dsebastien.net/pkm-community" rel="noopener">
            <article className="project-card">
              <div>
                <Image
                  alt="Personal Knowledge Management Community"
                  width={132}
                  height={132}
                  src="/static/images/projects/pkm-community-logo.png"
                  className="rounded-md"
                />
              </div>
              <footer>
                <span>An online community for lifelong learners and Personal Knowledge Management (PKM)</span>
              </footer>
            </article>
          </a>

          <a href="https://www.reddit.com/r/PersonalKnowledgeMgmt/" rel="noopener">
            <article className="project-card">
              <div>
                <Image
                  alt="Personal Knowledge Management subreddit"
                  width={132}
                  height={132}
                  src="/static/images/logos/reddit.svg"
                  className="rounded-md"
                />
              </div>
              <footer>
                <span>A subreddit dedicated to Personal Knowledge Management (PKM)</span>
              </footer>
            </article>
          </a>

          <a href="https://pkmjournal.com" rel="noopener">
            <article className="project-card">
              <div>
                <Image
                  alt="Personal Knowledge Management Journal"
                  width={132}
                  height={132}
                  src="/static/images/projects/pkm-journal.png"
                  className="rounded-md"
                />
              </div>
              <footer>
                <span>PKM Journal: A publication dedicated to Personal Knowledge Management (PKM)</span>
              </footer>
            </article>
          </a>

          <a href="https://personal-knowledge-management.com" rel="noopener">
            <article className="project-card">
              <div>
                <Image
                  alt="Personal Knowledge Management Homepage"
                  width={132}
                  height={132}
                  src="/static/images/logos/pkm-library.svg"
                  className="rounded-md"
                />
              </div>
              <footer>
                <span>Personal Knowledge Management (PKM) homepage</span>
              </footer>
            </article>
          </a>

          <a href="https://dsebastien.net/blog/2021-08-25-software-crafters-community" rel="noopener">
            <article className="project-card">
              <div>
                <Image
                  alt="Software Crafters Community"
                  width={132}
                  height={132}
                  src="/static/images/logos/slack.svg"
                  className="rounded-md"
                />
              </div>
              <footer>
                <span>An online community for Software Crafters</span>
              </footer>
            </article>
          </a>

          <a href="https://stark.nbb.be" rel="noopener">
            <article className="project-card">
              <div>
              <div className="h-6"></div>
                <Image
                  alt="Stark Framework"
                  width={345}
                  height={100}
                  src="/static/images/projects/stark.svg"
                  className="rounded-md"
                />
                <div className="h-6"></div>
              </div>
              <footer>
                <span>An Open Source Enterprise front-end framework on top of Angular</span>
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
                    className="rounded-md"
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

export default ProjectsPage;
