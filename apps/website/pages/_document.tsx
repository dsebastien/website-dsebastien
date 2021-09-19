import React, { ReactElement } from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { DocumentContext } from 'next/dist/next-server/lib/utils';

/**
 * Custom HTML document
 */
export default class CustomDocument extends Document<{
  styleTags: ReactElement[];
}> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static async getInitialProps(documentContext: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = documentContext.renderPage;

    try {
      documentContext.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(documentContext);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          {this.props.styleTags}
          {/* Preload the fonts */}
          <link
            rel="preload"
            href="/fonts/AvenirNext-Regular.woff2"
            as="font"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/AvenirNext-Bold.woff2"
            as="font"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/AvenirNext-BoldItalic.woff2"
            as="font"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/AvenirNext-DemiBold.woff2"
            as="font"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/AvenirNext-DemiBoldItalic.woff2"
            as="font"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/AvenirNext-Medium.woff2"
            as="font"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/AvenirNext-MediumItalic.woff2"
            as="font"
            crossOrigin="anonymous"
          />
          <link href="/static/favicons/favicon.ico" rel="shortcut icon" />
          {/* TODO add manifest */}
          {/*<link href="/static/site.webmanifest" rel="manifest" />*/}
          <meta content="#ffffff" name="theme-color" />
          <meta content="#ffffff" name="msapplication-TileColor" />
          <link
            href="/static/icons/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href="/static/icons/favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/static/icons/favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <link
            color="#4a9885"
            href="/static/icons/safari-pinned-tab.svg"
            rel="mask-icon"
          />
          <meta
            content="/static/browserconfig.xml"
            name="msapplication-config"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
