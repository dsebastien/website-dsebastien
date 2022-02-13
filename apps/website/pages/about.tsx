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
  FaReddit,
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
    <Layout
      customMeta={{
        title: 'About – Sébastien Dubois',
        description: 'A few things about who I am',
      }}
    >
      <StyledArticle className="article-content-wrapper">
        <div className="page-heading">
          A little about me <FaCoffee className="inline" />
        </div>
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
              width={264}
              height={317}
              src="/static/images/sebastien.png"
              className="rounded-lg"
            />
          </div>
          <p>
            I wear many hats: father, husband, author, software crafter, CTO,
            solution architect, mentor, coach, entrepreneur, indie hacker, bootstrapper, thinker, geek, gamer. I'm
            also the founder of{' '}
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
            . Since day one (and actually long before that), I have always been passionate about IT, software
            development, IT security, code quality, the open Web, and
            open-source software. I write about knowledge management, software development, entrepreneurship, indie hacking, bootstrapping, management, leadership, personal development, productivity, and more.{' '}
            <a
              href="https://newsletter.dsebastien.net"
              rel="noopener"
            >
              Subscribe to my newsletter
            </a>{' '}
            if you're interested in any of those subjects.
          </p>
          <p>
            I grew up when the world was waking up to the World Wide Web. I
            started playing with computers when I was 8, and never stopped
            since. I also have a few other passions like photography, board
            games, piano, and errr... well too many other things ;-) I could
            tell you more, but you'll have to ask ;-)
          </p>
          <p>
            Back in 2019, I wrote{' '}
            <a
              href="https://www.amazon.com/Learn-TypeScript-Building-Applications-understanding/dp/1789615860?tag=dsebastien00-20"
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
            Currently, I'm busy writing a collection of 12 books called{' '}
            <a href="https://dev-concepts.dev/" rel="noopener">
              Dev Concepts
            </a>
            , which explains a gazillion concepts around software
            development. The goal of that collection is to explain what the software
            craft is all about, and help those interested on their way to become
            full-stack developers.
          </p>
          <p>
            I have create a <a href="https://dsebastien.net/blog/2021-08-25-software-crafters-community">community for Software Crafters</a>; artisans of code.
          </p>
          <p>
            Next to that, I'm working on a Zen productivity app called <a href="https://focusd.app">focusd</a>. It is an infinite outliner with a strong calendar integration. With it, people will be able to take notes, easily introduce time-blocking in their lives (a super useful productivity technique), and focus on what really matters. We have also created a <a href="https://dsebastien.net/blog/2022-01-31-a-community-focused-on-zen-productivity">community to discuss Zen productivity</a>.
          </p>
          <p>I also invest a lot of time and energy into Personal Knowledge Management (PKM). Throughout 2021, I've spent countless hours researching the PKM space in order to prepare for a startup project, but also to improve my writing and note-taking skills. I've regrouped all the information in a Notion space that you can find <a href="https://developassion.gumroad.com/l/PersonalKnowledgeManagementLibrary">here</a>. I'm now working hard to help the PKM community. I've launched the <a href="https://pkmjournal.com">PKM Journal</a>, an online publication dedicated to PKM. I've also created <a href="https://dsebastien.net/blog/2021-11-12-personal-knowledge-management-community">a community on Slack</a>, a <a href="https://www.reddit.com/r/PersonalKnowledgeMgmt">subreddit</a> and <a href="https://twitter.com/PkmDaily">PKM Daily</a>, a Twitter account to share regular news about PKM.
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
                  url="https://dsebastien.hashnode.dev"
                  name="Hashnode"
                  icon={<FaHashtag className="inline" />}
                  ariaLabelText="Go to my blog on HashNode"
                  titleText="Go to my blog on HashNode"
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
                  url="https://www.reddit.com/user/lechtitseb/"
                  name="Reddit"
                  icon={<FaReddit className="inline" />}
                  ariaLabelText="Go to my profile on Reddit"
                  titleText="Go to my profile on Reddit"
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
