// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Community Ink',
  tagline: '',
  url: 'https://communityink.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon/favicon.ico',
  
  //plugin progressive web app
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/favicon/logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/static/manifest.json', 
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/favicon/logo.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/logo.svg',
            color: 'rgb(37, 194, 160)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/img/favicon/logo.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
    ],
  ],
// plugins end here
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'open-source-learners', // Usually your GitHub org/user name.
  projectName: 'communityink', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
//
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
     ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/open-source-learners/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/open-source-learners/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
          // google analytics 4
        gtag: { 
                trackingID: 'G-TEZF0NJ9BE',
                anonymizeIP: true,
             },
      }),
    ],
  ],

  //navbar
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // 
      liveCodeBlock: {
        playgroundPosition: 'bottom',
      }, 
      // ducs
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      // Announcement  
      announcementBar: {
        id: 'announcementBar-2', // Increment on change
        isCloseable: false,
        content: 
        //  'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
        // backgroundColor: '#fafbfc',
        // textColor: '#091E42',
         `⭐️ If you like Community Ink, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/open-source-learners/comminityink">GitHub</a>`,
      },
      navbar: {
        // hideOnScroll: true,
        title: 'Community Ink',
        logo: {
          alt: 'My Site Logo',
          src: 'img/favicon/logo.png',
        },
        items: [             
          {
            type: 'search',
            position: 'right',
          },
          // Navbar dropdown
          {
            type: 'dropdown',
            label: 'Materials',
            position: 'left',
            items: [
              {
                type: 'doc',
                label: 'HandBook',
                docId: 'handBook/handBook',
              },
              {
                type: 'doc',
                label: 'Science',
                docId: 'intro',
                
              },
              {
                type: 'doc',
                label: 'Arts and Social Science',
                docId: 'intro',
                
              },
              {
                type: 'doc',
                label: 'Education',
                docId: 'intro',
                
              },
                     
            ],
          },
          {to: '/blog', label: 'Blogs', position: 'left'},
          {
            href: 'https://github.com/open-source-learners/communityink',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },

        ],
      },
      // navbar end

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Materials',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://github.com/open-source-learners/',
              },
              {
                label: 'Discord',
                href: 'https://github.com/open-source-learners/',
              },
              {
                label: 'whatsApp',
                href: 'https://github.com/open-source-learners/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/open-source-learners',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} open-source-learners, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

