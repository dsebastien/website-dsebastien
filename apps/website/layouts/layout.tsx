import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import tw from 'twin.macro';
import ThemeSwitcher from '@/components/theme-switcher';
import { FaArrowUp, FaGithub } from 'react-icons/fa';
import Footer from '@/components/footer';
import ScrollToTop from '@/components/scroll-to-top';
import {BLOG_AUTHOR, BLOG_DESCRIPTION, IS_BROWSER} from '../constants';
import {propertiesOf} from "../utils/type.utils";

const StyledPage = tw.div``;

/**
 * Page metadata that pages can customize
 * Reference: https://github.com/leerob/leerob.io/blob/main/components/Container.js
 */
export interface SupportedMeta {
  siteName: string;
  author?: string;
  image: string;
  title: string;
  description: string;
  type: string;
  date?: string;
  keywords?: string;
  canonicalUrl?: string;
}

const supportedMetaProperties = propertiesOf<SupportedMeta>();

interface LayoutProps {
  children: React.ReactNode;
  customMeta?: Partial<SupportedMeta>;
}

const Layout = ({ children, customMeta }: LayoutProps) => {
  const router = useRouter();

  const siteName = "dSebastien";

  const siteMicrodata = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    alternateName: "Sébastien Dubois's Website",
    description: BLOG_DESCRIPTION,
    publisher: BLOG_AUTHOR,
    url: IS_BROWSER ? window.location.origin : '',
  };

  /**
   * Default metadata
   */
  const meta: SupportedMeta = {
    siteName: siteName,
    author: BLOG_AUTHOR.name,
    title: siteName,
    description: BLOG_DESCRIPTION,
    image: 'https://dsebastien.net/static/images/banner-2560.jpg',
    type: 'website',
    keywords:
      'programming, software development, coding, knowledge management, productivity, entrepreneurship, management, leadership, sebastien dubois',
  };

  if(customMeta) {
    for (const customMetaKey of Object.keys(customMeta ? customMeta : [])) {
      let propertyHandled = false;

      if (supportedMetaProperties("title") === customMetaKey) {
        if (customMeta.title && customMeta.title.trim().length > 0) {
          meta.title = customMeta.title;
        }
        propertyHandled = true;
      }

      if (supportedMetaProperties("date") === customMetaKey) {
        if (customMeta.date && customMeta.date.trim().length > 0) {
          meta.date = customMeta.date;
        }
        propertyHandled = true;
      }

      if (supportedMetaProperties("description") === customMetaKey) {
        if (customMeta.description && customMeta.description.trim().length > 0) {
          meta.description = customMeta.description;
        }
        propertyHandled = true;
      }

      if (supportedMetaProperties("type") === customMetaKey) {
        if (customMeta.type && customMeta.type.trim().length > 0) {
          meta.type = customMeta.type;
        }
        propertyHandled = true;
      }

      if (supportedMetaProperties("image") === customMetaKey) {
        if (customMeta.image && customMeta.image.trim().length > 0) {
          meta.image = customMeta.image;
        }
        propertyHandled = true;
      }

      if (supportedMetaProperties("keywords") === customMetaKey) {
        if (customMeta.keywords && customMeta.keywords.trim().length > 0) {
          meta.keywords = customMeta.keywords;
        }
        propertyHandled = true;
      }

      if (supportedMetaProperties("canonicalUrl") === customMetaKey) {
        if (customMeta.canonicalUrl && customMeta.canonicalUrl.trim().length > 0) {
          meta.canonicalUrl = customMeta.canonicalUrl;
        }
        propertyHandled = true;
      }

      if (supportedMetaProperties("siteName") === customMetaKey) {
        if (customMeta.siteName && customMeta.siteName.trim().length > 0) {
          meta.siteName = customMeta.siteName;
        }
        propertyHandled = true;
      }

      if (supportedMetaProperties("author") === customMetaKey) {
        if (customMeta.author && customMeta.author.trim().length > 0) {
          meta.author = customMeta.author;
        }
        propertyHandled = true;
      }

      if (!propertyHandled) {
        throw new Error(`Unhandled meta property: ${customMetaKey}`);
      }
    }
  }

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(siteMicrodata)}
      </script>
      <StyledPage className="full-page flex flex-col flex-grow dark:prose-dark">
        <Head>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
          <meta name="keywords" content={meta.keywords} />
          <meta name="robots" content="index,follow,max-image-preview:large" />
          <meta
            name="viewport"
            content="width=device-width,minimum-scale=1,initial-scale=1"
          />
          <meta
            property="og:url"
            content={`https://dsebastien.net${router.asPath}`}
          />
          <link rel="canonical" href={`https://dsebastien.net${router.asPath}`} />
          <meta property="og:type" content={meta.type} />
          <meta property="og:site_name" content={meta.siteName} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:image" content={meta.image} />
          <meta property="og:locale" content="en_US" />
          <meta property="image" content={meta.image} />
          <meta name="author" content={meta.author} />
          <meta property="article:author" content="https://dsebastien.net" />
          <meta name="twitter:creator" content="@dSebastien" />
          <meta name="twitter:site" content="@dSebastien" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <meta name="twitter:image" content={meta.image} />
          {meta.date && (
            <meta property="article:published_time" content={meta.date} />
          )}
          <meta name="theme-color" content="#3C74DB" /> {/* blue-500 */}
        </Head>
        <header className="main-header md:sticky top-0 z-50 py-4 px-8 flex flex-col sm:flex-row justify-between bg-blue-500 text-gray-100 border-b-2 border-blue-700 shadow-lg">
          <a
            href="#main"
            aria-label="Skip to the content"
            className="sr-only focus:not-sr-only"
          >
            Skip to content
          </a>
          <div className="header-left-side flex flex-col sm:flex-row flex-wrap items-center object-center">
            <ThemeSwitcher />
            <div className="header-app-logo">
              <span className="sm:ml-2 text-5xl font-semibold tracking-normal text-gray-100"><Link href="/">dSebastien</Link></span>
            </div>
            <nav className="header-menu mt-4 lg:mt-0 sm:ml-10 flex flex-col sm:flex-row flex-wrap items-center object-center gap-2 sm:gap-4 font-semibold">
              <Link href="/">
                <a
                  className="main-menu-link"
                  aria-label="Go to the home page"
                  title="Go to the home page"
                >
                  <div className="site-button text-base">Home</div>
                </a>
              </Link>
              <Link href="/blog">
                <a
                  className="main-menu-link"
                  aria-label="Go to the blog"
                  title="Go to the blog"
                >
                  <div className="site-button text-base">Blog</div>
                </a>
              </Link>
              <Link href="/news">
                <a
                  className="main-menu-link"
                  aria-label="Go to the news"
                  title="Go to the news"
                >
                  <div className="site-button text-base">Newsletter</div>
                </a>
              </Link>
              <Link href="/books">
                <a
                  className="main-menu-link"
                  aria-label="Discover my books"
                  title="Discover my books"
                >
                  <div className="site-button text-base">Books</div>
                </a>
              </Link>
              <Link href="/projects">
                <a
                  className="main-menu-link"
                  aria-label="Explore my projects"
                  title="Explore my projects"
                >
                  <div className="site-button text-base">Projects</div>
                </a>
              </Link>
              <Link href="/about">
                <a
                  className="main-menu-link"
                  aria-label="Go to the about page"
                  title="Go to the about page"
                >
                  <div className="site-button text-base">About</div>
                </a>
              </Link>
            </nav>
          </div>
          <div className="hidden sm:flex mt-2 sm:mt-0 sm:flex-row items-center object-center">
            <a
              href="https://github.com/dsebastien/website-dsebastien"
              className="rounded-full"
              target="_blank"
              aria-label="See the source code on GitHub"
              rel="noopener noreferrer"
              title="See the source code on GitHub"
            >
              <FaGithub
                className="inline text-white dark:text-white hover:text-gray-900 dark:hover:text-gray-900"
                size="24"
              />
            </a>
          </div>
        </header>
        <ScrollToTop
          smooth={true}
          scrollingElement={
            IS_BROWSER ? document.getElementById('__next')! : undefined
          }
          className="scroll-to-top"
          icon={<FaArrowUp className="w-full h-full text-white" />}
        />
        <main id="main" className="relative mt-12 px-4 sm:px-8 flex-grow">
          {children}
        </main>
        <footer className="px-4 mb-4 sm:px-8">
          <Footer />
        </footer>
      </StyledPage>
    </>
  );
};

export default Layout;
