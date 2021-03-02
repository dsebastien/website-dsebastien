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

const AboutPage = () => {
  return (
    <Layout>
      <article className="article-content-wrapper">
        <h1 className="page-heading">
          A little about me <FaCoffee className="inline" />
        </h1>
        <section className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>
            Hey there! I'm{' '}
            <a href="https://twitter.com/dSebastien">Sébastien Dubois</a>. I
            wear many hats: father, author, software crafter, CTO, solution
            architect, mentor, coach, geek, gamer. I'm also the CEO of{' '}
            <a href="https://developassion.be">DeveloPassion</a>, a software
            development company located in Belgium.
          </p>
          <p>
            I've been working for{' '}
            <a href="https://www.linkedin.com/in/sebastiend/">
              15+ years in the IT industry
            </a>{' '}
            . Since day one, I have always been passionate about IT, software
            development, code quality, the open Web, and open-source software. I
            write about programming, architecture, code quality,
            entrepreneurship, management, leadership, and more.{' '}
            <a href="https://mailchi.mp/fb661753d54a/developassion-newsletter">
              Subscribe to my newsletter
            </a>{' '}
            if you're interested in those subjects.
          </p>
          <p>
            Back in 2019, I wrote{' '}
            <a href="https://www.amazon.com/Learn-TypeScript-Building-Applications-understanding/dp/1789615860?tag=developassion-20">
              a book called "Learn TypeScript by Building Web Applications"
            </a>{' '}
            about{' '}
            <a href="https://www.typescriptlang.org/" target="_blank">
              TypeScript
            </a>
            , a wonderful programming language.
          </p>
          <p>
            Currently (March 2021), I'm busy writing my next book:{' '}
            <a href="https://dev-concepts.dev/">Dev Concepts</a>, which explains
            a gazillion concepts around around software development. The goal of
            that book is to explain what the software craft is all about, and
            help those interested on their way to become full-stack developers.
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
          <p>
            You can find me on:
            <ul>
              <li>
                <SocialLink
                  url="https://twitter.com/dsebastien"
                  name="Twitter"
                  icon={<FaTwitter className="inline" />}
                />
              </li>
              <li>
                <SocialLink
                  url="https://www.linkedin.com/in/sebastiend"
                  name="LinkedIn"
                  icon={<FaLinkedin className="inline" />}
                />
              </li>
              <li>
                <SocialLink
                  url="https://github.com/dsebastien"
                  name="GitHub"
                  icon={<FaGithub className="inline" />}
                />
              </li>
              <li>
                <SocialLink
                  url="https://gitlab.com/dsebastien"
                  name="Gitlab"
                  icon={<FaGitlab className="inline" />}
                />
              </li>
              <li>
                <SocialLink
                  url="http://dsebastien.medium.com"
                  name="Medium"
                  icon={<FaMedium className="inline" />}
                />
              </li>
              <li>
                <SocialLink
                  url="https://dev.to/dsebastien"
                  name="DEV.to"
                  icon={<FaDev className="inline" />}
                />
              </li>
              <li>
                <SocialLink
                  url="https://www.youtube.com/channel/UCz0x-VJhvKwV-PK3E_i5G1w"
                  name="Youtube"
                  icon={<FaYoutube className="inline" />}
                />
              </li>
              <li>
                <SocialLink
                  url="https://www.twitch.tv/dsebastien"
                  name="Twitch"
                  icon={<FaTwitch className="inline" />}
                />
              </li>
              <li>
                <SocialLink
                  url="https://stackoverflow.com/users/226630/dsebastien"
                  name="StackOverflow"
                  icon={<FaStackOverflow className="inline" />}
                />
              </li>
              <li>
                <SocialLink
                  url="https://www.facebook.com/trankill"
                  name="Facebook"
                  icon={<FaFacebook className="inline" />}
                />
              </li>
              <li>
                <SocialLink
                  url="https://hashnode.com/@dSebastien"
                  name="Hashnode"
                  icon={<FaHashtag className="inline" />}
                />
              </li>
              <li>and more.. ;-)</li>
            </ul>
          </p>
        </section>
      </article>
    </Layout>
  );
};

export default AboutPage;
