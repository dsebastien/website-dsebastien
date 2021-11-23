/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const globby = require('globby');
const prettier = require('prettier');
const helpers = require('../../helpers');
/* eslint-enable @typescript-eslint/no-var-requires */

(async () => {
  const prettierConfig = await prettier.resolveConfig(
    helpers.root('.prettierrc')
  );

  const WEBSITE_ROOT_FOLDER_PATH = helpers.root('apps/website');

  /**
   * Glob patterns
   * Reference: https://github.com/sindresorhus/globby
   */
  const pages = await globby([
    `${WEBSITE_ROOT_FOLDER_PATH}/pages/*.js`,
    `${WEBSITE_ROOT_FOLDER_PATH}/pages/*.ts`,
    `${WEBSITE_ROOT_FOLDER_PATH}/pages/*.tsx`,
    `${WEBSITE_ROOT_FOLDER_PATH}/data/blog/*.mdx`,
    `!${WEBSITE_ROOT_FOLDER_PATH}/data/uses.mdx`,
    `!${WEBSITE_ROOT_FOLDER_PATH}/pages/_*.js`,
    `!${WEBSITE_ROOT_FOLDER_PATH}/pages/_*.ts`,
    `!${WEBSITE_ROOT_FOLDER_PATH}/pages/_*.tsx`,
    `!${WEBSITE_ROOT_FOLDER_PATH}/pages/api`,
  ]);

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page
                  .replace(WEBSITE_ROOT_FOLDER_PATH, '')
                  .replace('/pages', '')
                  .replace('/data', '')
                  .replace('.mdx', '')
                  .replace('.jsx', '') // WARNING: MUST be before shorter js
                  .replace('.js', '')
                  .replace('.tsx', '') // WARNING: MUST be before shorter ts
                  .replace('.ts', '');

                const route = path === '/index' ? '' : path;

                return `
                        <url>
                            <loc>${`https://dsebastien.net${route}`}</loc>
                        </url>
                    `;
              })
              .join('')}
        </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  // eslint-disable-next-line no-sync
  fs.writeFileSync(helpers.root('apps/website/public/sitemap.xml'), formatted, {
    /**
     * Reference: https://nodejs.org/api/fs.html#fs_file_system_flags
     */
    flag: 'w',
  });
})();
