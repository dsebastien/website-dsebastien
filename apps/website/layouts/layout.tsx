import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import tw from 'twin.macro';
import ThemeSwitcher from '@/components/theme-switcher';
import { FaGithub } from 'react-icons/fa';
import Footer from '@/components/footer';

const StyledPage = tw.div``;

/**
 * Page metadata that pages can customize
 * Reference: https://github.com/leerob/leerob.io/blob/main/components/Container.js
 */
interface SupportedMeta {
  siteName: string;
  image: string;
  title: string;
  description: string;
  type: string;
  date?: string;
}

interface LayoutProps {
  children: React.ReactNode;
  customMeta?: Partial<SupportedMeta>;
}

const Layout = ({ children, customMeta }: LayoutProps) => {
  const router = useRouter();

  /**
   * Default metadata
   */
  const meta: SupportedMeta = {
    siteName: 'dSebastien',
    title: 'dSebastien',
    description: `Sébastien Dubois' home on the Web`,
    image: 'https://dsebastien.net/static/images/banner-2560.jpg',
    type: 'website',
    /**
     * Replace by custom values if any were defined
     */
    ...(customMeta ? customMeta : []),
  };

  return (
    <StyledPage className="full-page flex flex-col flex-grow dark:prose-dark">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
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
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dSebastien" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <header className="main-header sticky-nav py-4 px-8 flex flex-col sm:flex-row justify-between bg-purple-500 text-gray-100 border-b-2 border-purple-700 shadow-lg">
        <a
          href="#main"
          aria-label="Skip to the content"
          className="sr-only focus:not-sr-only"
        >
          Skip to content
        </a>
        <div className="header-left-side flex flex-col sm:flex-row items-center object-center">
          <ThemeSwitcher />
          <div className="header-app-logo">
            <h1 className="sm:ml-2">dSebastien</h1>
          </div>
          <nav className="header-menu sm:ml-10 flex items-baseline space-x-4 font-semibold">
            <Link href="/">
              <a className="main-menu-link" aria-label="Go to the home page">
                <div className="site-button text-base">Home</div>
              </a>
            </Link>
            <Link href="/blog">
              <a className="main-menu-link" aria-label="Go to the blog">
                <div className="site-button text-base">Blog</div>
              </a>
            </Link>
            <a
              href="https://dev-concepts.dev"
              className="main-menu-link"
              target="_blank"
            >
              <div className="site-button text-base">Dev Concepts</div>
            </a>
            <Link href="/about">
              <a className="main-menu-link" aria-label="Go to the about page">
                <div className="site-button text-base">About</div>
              </a>
            </Link>
          </nav>
        </div>
        <div className="header-right-side mt-2 sm:mt-0 flex flex-col sm:flex-row items-center object-center">
          <a
            href="https://github.com/dsebastien/website-dsebastien"
            className="rounded-full"
            target="_blank"
            aria-label="See the source on GitHub"
          >
            <FaGithub
              className="inline text-white dark:text-white hover:text-gray-900 dark:hover:text-gray-900"
              size="24"
            />
          </a>
        </div>
      </header>
      <main id="main" className="mt-12 px-4 sm:px-8 flex-grow">
        {children}
      </main>
      <footer className="px-4 mb-4 sm:px-8">
        <Footer />
      </footer>
    </StyledPage>
  );
};

export default Layout;
