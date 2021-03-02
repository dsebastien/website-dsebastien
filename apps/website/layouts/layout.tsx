import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import tw from 'twin.macro';
import ThemeSwitcher from '@/components/theme-switcher';
import { FaGithub } from 'react-icons/fa';

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
      <header className="sticky-nav py-4 px-8 flex flex-col sm:flex-row justify-between dark:bg-gray-800 bg-purple-400 text-white border-b-2 border-purple-700 dark:border-purple-400 shadow-lg">
        <a href="#main" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
        <div className="header-left-side flex flex-col sm:flex-row items-center object-center">
          <ThemeSwitcher />
          <div className="header-app-logo">
            <h1 className="sm:ml-2">
              <Link href="/">
                <a>dSebastien</a>
              </Link>
            </h1>
          </div>
          <nav className="header-menu sm:ml-10 flex items-baseline space-x-4 font-semibold">
            <Link href="/">
              <a className="hover:text-red-500 hover:cursor-pointer">
                <div className="wp-button text-base">Home</div>
              </a>
            </Link>
            <Link href="/blog">
              <a>
                <div className="wp-button text-base">Blog</div>
              </a>
            </Link>
            <Link href="/about">
              <a>
                <div className="wp-button text-base">About</div>
              </a>
            </Link>
          </nav>
        </div>
        <div className="header-right-side mt-2 sm:mt-0 flex flex-col sm:flex-row items-center object-center">
          <a
            href="https://github.com/dsebastien/website-dsebastien"
            className="rounded-full"
            target="_blank"
          >
            <FaGithub
              className="inline text-white dark:text-white hover:text-black dark:hover:text-purple-300"
              size="24"
            />
          </a>
        </div>
      </header>
      <main id="main" className="mt-12 px-4 sm:px-8 flex-grow">
        {children}
      </main>
    </StyledPage>
  );
};

export default Layout;
