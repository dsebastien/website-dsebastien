/* eslint-disable @typescript-eslint/no-var-requires */
const { promises: fs } = require('fs');
const RSS = require('rss');
const matter = require('gray-matter');
const helpers = require('../../helpers');
/* eslint-enable @typescript-eslint/no-var-requires */

async function generate() {
  const feed = new RSS({
    title: 'Sébastien Dubois',
    site_url: 'https://dsebastien.net',
    feed_url: 'https://dsebastien.net/feed.xml',
  });

  const BLOG_ROOT_FOLDER_PATH = helpers.root('apps/website/data/blog');

  const posts = await fs.readdir(BLOG_ROOT_FOLDER_PATH);

  await Promise.all(
    posts.map(async (name) => {
      const content = await fs.readFile(`${BLOG_ROOT_FOLDER_PATH}/${name}`, {
        encoding: 'utf-8',
      });
      const frontmatter = matter(content);

      feed.item({
        title: frontmatter.data.title,
        url: 'https://dsebastien.net/blog/' + name.replace(/\.mdx?/, ''),
        date: frontmatter.data.publishedAt,
        description: frontmatter.data.summary,
      });
    })
  );

  await fs.writeFile(
    helpers.root('apps/website/public/feed.xml'),
    feed.xml({ indent: true })
  );
}

generate();
