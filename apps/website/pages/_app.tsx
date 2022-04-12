import React from 'react';
import { AppProps } from 'next/app';
import Script from "next/script";
import '../styles/fonts.scss';
import '../styles/styles.scss';
import { ThemeProvider } from 'next-themes';
import GlobalStylesComponent from '@/components/global-styles';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '@/components/mdx-components';
import useRouterScroll from '../utils/use-router-scroll';
import Head from 'next/head';

/**
 * Wrapper around all pages
 * @param Component the wrapped component
 * @param pageProps
 * @constructor
 */
const App = ({ Component, pageProps }: AppProps) => {
  useRouterScroll({
    behavior: 'smooth',
    idOfElementToScroll: '__next',
  });

  return (
    <>
      <Head>
        {/* Why here? https://nextjs.org/docs/messages/no-document-viewport-meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStylesComponent />
      {/* Use the ThemeProvider of next-themes, combined with Tailwind: https://github.com/pacocoursey/next-themes#with-tailwind */}
      <ThemeProvider attribute="class">
        <MDXProvider components={MDXComponents}>
          <Component {...pageProps} />
        </MDXProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
