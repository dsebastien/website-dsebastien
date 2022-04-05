/* eslint-disable @typescript-eslint/no-var-requires */
const { promises: fs } = require('fs');
const RSS = require('rss');
const matter = require('gray-matter');
const helpers = require('../../helpers');
/* eslint-enable @typescript-eslint/no-var-requires */

const BASE_URL = "https://dsebastien.net";
const BLOG_FOLDER_NAME = "blog";
const NEWSLETTER_FOLDER_NAME = "news";
const FEED_FILENAME = "feed.xml";

async function generate() {
  try {
    const feed = new RSS({
      title: 'Sébastien Dubois',
      site_url: `${BASE_URL}`,
      feed_url: `${BASE_URL}/${FEED_FILENAME}`,
    });

    const BLOG_ROOT_FOLDER_PATH = helpers.root(`apps/website/data/${BLOG_FOLDER_NAME}/`);

    const blogPosts = await fs.readdir(BLOG_ROOT_FOLDER_PATH);

    const feedEntries = [];

    await Promise.all(
      blogPosts.map(async (name) => {
        const content = await fs.readFile(`${BLOG_ROOT_FOLDER_PATH}/${name}`, {
          encoding: 'utf-8',
        });

        const frontmatter = matter(content);

        const feedEntry = {
          title: frontmatter.data.title,
          url: `${BASE_URL}/${BLOG_FOLDER_NAME}/` + name.replace(/\.mdx?/, ''),
          date: frontmatter.data.publishedAt,
          description: frontmatter.data.summary,
          type: 'blog',
        }

        feedEntries.push(feedEntry);
      })
    );

    // Sort feed entries by date
    feedEntries.sort((a,b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0))

    feedEntries.map((feedEntry) => {
      feed.item(feedEntry);
    });

    await fs.writeFile(
      helpers.root(`apps/website/public/${FEED_FILENAME}`),
      feed.xml({ indent: true })
    );
  } catch(e) {
    console.warn("Failed to generate the RSS feed: ", e);
  }
}

generate();
