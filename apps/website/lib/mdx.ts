import fs from 'fs';
import matter from 'gray-matter';
import * as mdxPrism from 'mdx-prism';
import * as rehypeSlug from 'rehype-slug';
//import * as rehypeAutoLinkHeadings from 'rehype-autolink-headings';

import path from 'path';
import readingTime from 'reading-time';
import renderToString from 'next-mdx-remote/render-to-string';
import MDXComponents from '@/components/mdx-components';
import { WebsiteDataType } from './website-data-types.intf';
import { MdxRemote } from 'next-mdx-remote/types';
import { FrontMatter } from './front-matter.intf';

const root = process.cwd();
const DATA_FOLDER_PATH = 'apps/website/data';

export async function getFiles(type: WebsiteDataType.BLOG | WebsiteDataType.NEWS): Promise<string[]> {
  return fs.readdirSync(path.join(root, DATA_FOLDER_PATH, type));
}

export interface MDXPage {
  mdxSource: MdxRemote.Source;
  frontMatter: FrontMatter;
}

/**
 * Load a specific file
 * @param type
 * @param slug
 */
export async function getFileBySlug({
  type,
  slug,
}: {
  type: WebsiteDataType;
  slug?: string;
}): Promise<{ mdxSource: MdxRemote.Source; frontMatter: FrontMatter }> {
  const source = slug
    ? fs.readFileSync(
        path.join(root, DATA_FOLDER_PATH, type, `${slug}.mdx`),
        'utf8'
      )
    : fs.readFileSync(path.join(root, DATA_FOLDER_PATH, `${type}.mdx`), 'utf8');

  const { data, content } = matter(source);
  const mdxSource = await renderToString(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [require('remark-code-titles')],
      rehypePlugins: [
        /**
         * Highlight code blocks with Prism: https://prismjs.com/
         */
        mdxPrism,
        /**
         * Add id to headings
         * Reference: https://github.com/rehypejs/rehype-slug
         */
        rehypeSlug,
        /**
         * Add anchor links to headings
         * Reference: https://github.com/rehypejs/rehype-autolink-headings
         */
        // FIXME enable once https://github.com/rehypejs/rehype-autolink-headings/issues/9 is solved
        // cfr https://github.com/dsebastien/website-dsebastien/issues/25
        // [
        //   rehypeAutoLinkHeadings,
        //   {
        //     behavior: 'append', // 'prepend' or 'wrap'
        //     content: {
        //       type: 'element',
        //       tagName: 'span',
        //       properties: {
        //         className: ['anchor-link'],
        //       },
        //       children: [],
        //     },
        //   },
        // ],
      ],
    },
  });

  const frontMatter: FrontMatter = {
    wordCount: content.split(/\s+/gu).length,
    readingTime: readingTime(content),
    slug: slug || '',
    title: '',
    publishedAt: '',
    summary: '',
    image: '',
    categories: [],
    keywords: [],
    published: true,
    ...data,
  };

  return {
    mdxSource,
    frontMatter,
  };
}

export async function getAllFilesFrontMatter(type: WebsiteDataType) { // FIXME improve typings
  const files = fs.readdirSync(path.join(root, DATA_FOLDER_PATH, type));

  type AllEntries = { slug: string }[];

  return files.reduce<AllEntries>((allEntries: AllEntries, entrySlug) => {
    const source = fs.readFileSync(
      path.join(root, DATA_FOLDER_PATH, type, entrySlug),
      'utf8'
    );

    const { data } = matter(source);

    let retVal: AllEntries = allEntries;

    /**
     * Only consider PUBLISHED elements here
     */
    if (data && data.published) {
      retVal = [
        {
          ...data,
          slug: entrySlug.replace('.mdx', ''),
        },
        ...allEntries,
      ];
    }

    return retVal;
  }, []);
}
