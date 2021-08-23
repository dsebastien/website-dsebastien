import React from 'react';
import Layout from '@/layouts/layout';
import {
  FaCoffee,
  FaDev,
  FaFacebook,
  FaGithub,
  FaGitlab,
  FaHashtag,
  FaLinkedin,
  FaMedium,
  FaStackOverflow,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import Link from 'next/link';
import SocialLink from '@/components/social-link';
import tw from 'twin.macro';
import Image from 'next/image';
import NewsletterSubscribe from "@/components/newsletter-subscribe";

const StyledArticle = tw.article``;

const AboutPage = () => {
  return (
    <Layout>
      <StyledArticle className="article-content-wrapper">
        <h1 className="page-heading">
          A little about me <FaCoffee className="inline" />
        </h1>
        <section className="mb-8 prose leading-6 text-gray-900 dark:text-gray-400">
          <p>
            Hey there! I'm{' '}
            <a href="https://twitter.com/dSebastien" rel="noopener">
              Sébastien Dubois
            </a>{' '}
            👋
          </p>
          <div className="">
            <Image
              alt="Dubois Sébastien"
              height={317}
              width={264}
              src="/static/images/sebastien.png"
              className="rounded-lg"
            />
          </div>
          <p>
            I wear many hats: father, husband, author, software crafter, CTO,
            solution architect, mentor, coach, entrepreneur, geek, gamer. I'm
            also the CEO of{' '}
            <a href="https://developassion.be" rel="noopener">
              DeveloPassion
            </a>
            , a software development company located in Belgium.
          </p>
          <p>
            I've been working for{' '}
            <a href="https://www.linkedin.com/in/sebastiend/" rel="noopener">
              15+ years in the IT industry
            </a>{' '}
            . Since day one, I have always been passionate about IT, software
            development, IT security, code quality, the open Web, and
            open-source software. I write about programming, architecture, code
            quality, entrepreneurship, management, leadership, and more.{' '}
            <a
              href="https://dsebastien.net/newsletter"
              rel="noopener"
            >
              Subscribe to my newsletter
            </a>{' '}
            if you're interested in those subjects.
          </p>
          <p>
            Back in 2019, I wrote{' '}
            <a
              href="https://www.amazon.com/Learn-TypeScript-Building-Applications-understanding/dp/1789615860?tag=dsebastien-20"
              rel="noopener"
            >
              a book called "Learn TypeScript by Building Web Applications"
            </a>{' '}
            about{' '}
            <a
              href="https://www.typescriptlang.org/"
              rel="noopener noreferrer"
              target="_blank"
            >
              TypeScript
            </a>
            , a wonderful programming language.
          </p>
          <p>
            Currently (March 2021), I'm busy writing my next book:{' '}
            <a href="https://dev-concepts.dev/" rel="noopener">
              Dev Concepts
            </a>
            , which explains a gazillion concepts around around software
            development. The goal of that book is to explain what the software
            craft is all about, and help those interested on their way to become
            full-stack developers.
          </p>
          <p>
            I grew up when the world was waking up to the World Wide Web. I
            started playing with computers when I was 8, and never stopped
            since. I also have a few other passions like photography, board
            games, piano, and errr... well too many other things ;-) I could
            tell you more, but you'll have to ask ;-)
          </p>
          <p>
            If you're curious, I wrote a page about the{' '}
            <Link href="/uses">stuff I use</Link>.
          </p>
          <div>
            You can find me on:
            <ul>
              <li>
                <SocialLink
                  url="https://twitter.com/dsebastien"
                  name="Twitter"
                  icon={<FaTwitter className="inline hover:text-blue-500" />}
                  ariaLabelText="Go to my Twitter profile"
                  titleText="Go to my Twitter profile"
                />
              </li>
              <li>
                <SocialLink
                  url="https://www.linkedin.com/in/sebastiend"
                  name="LinkedIn"
                  icon={
                    <FaLinkedin className="inline hover:text-blue-500 hover:bg-white" />
                  }
                  ariaLabelText="Go to my LinkedIn profile"
                  titleText="Go to my LinkedIn profile"
                />
              </li>
              <li>
                <SocialLink
                  url="https://github.com/dsebastien"
                  name="GitHub"
                  icon={<FaGithub className="inline hover:text-black" />}
                  ariaLabelText="Go to my GitHub profile"
                  titleText="Go to my GitHub profile"
                />
              </li>
              <li>
                <SocialLink
                  url="https://gitlab.com/dsebastien"
                  name="Gitlab"
                  icon={<FaGitlab className="inline hover:text-orange-500" />}
                  ariaLabelText="Go to my GitLab profile"
                  titleText="Go to my GitLab profile"
                />
              </li>
              <li>
                <SocialLink
                  url="http://dsebastien.medium.com"
                  name="Medium"
                  icon={
                    <FaMedium className="inline hover:text-black hover:bg-white" />
                  }
                  ariaLabelText="Go to my blog on Medium"
                  titleText="Go to my blog on Medium"
                />
              </li>
              <li>
                <SocialLink
                  url="https://dev.to/dsebastien"
                  name="DEV.to"
                  icon={
                    <FaDev className="inline hover:text-black hover:bg-white" />
                  }
                  ariaLabelText="Go to my blog on DEV.to"
                  titleText="Go to my blog on DEV.to"
                />
              </li>
              <li>
                <SocialLink
                  url="https://www.youtube.com/channel/UCz0x-VJhvKwV-PK3E_i5G1w"
                  name="Youtube"
                  icon={
                    <FaYoutube className="inline hover:text-red hover:bg-white" />
                  }
                  ariaLabelText="Go to my Youtube channel"
                  titleText="Go to my Youtube channel"
                />
              </li>
              <li>
                <SocialLink
                  url="https://www.twitch.tv/dsebastien"
                  name="Twitch"
                  icon={
                    <FaTwitch className="inline hover:text-blue-500 hover:bg-white" />
                  }
                  ariaLabelText="Go to my Twitch channel"
                  titleText="Go to my Twitch channel"
                />
              </li>
              <li>
                <SocialLink
                  url="https://stackoverflow.com/users/226630/dsebastien"
                  name="StackOverflow"
                  icon={
                    <FaStackOverflow className="inline hover:text-orange-500" />
                  }
                  ariaLabelText="Go to my profile on StackOverflow"
                  titleText="Go to my profile on StackOverflow"
                />
              </li>
              <li>
                <SocialLink
                  url="https://www.facebook.com/trankill"
                  name="Facebook"
                  icon={
                    <FaFacebook className="inline hover:text-blue-500 hover:bg-white" />
                  }
                  ariaLabelText="Go to my Facebook profile"
                  titleText="Go to my Facebook profile"
                />
              </li>
              <li>
                <SocialLink
                  url="https://dsebastien.hashnode.dev"
                  name="Hashnode"
                  icon={<FaHashtag className="inline" />}
                  ariaLabelText="Go to my blog on HashNode"
                  titleText="Go to my blog on HashNode"
                />
              </li>
              <li><a href="https://updates.dsebastien.net/" rel="noopener">Polywork</a></li>
              <li>and more.. ;-)</li>
            </ul>
          </div>
        </section>
        <section>
          <NewsletterSubscribe />
        </section>
      </StyledArticle>
    </Layout>
  );
};

export default AboutPage;
