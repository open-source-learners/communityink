// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Community Ink',
  tagline: '',
  url: 'https://communityink.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon/favicon.ico',
  
  // Creative Club blogs
  plugins: [
    //plugin progressive web app
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
  organizationName: 'open-source-learners', 
  projectName: 'communityink', // Usually your repo name.
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
          remarkPlugins: [math],
          rehypePlugins: [katex],
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

  /** Navbar head config */
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // SEO
      metadata: [{name: 'keywords', content: 'GSU, GOMBE STATE UNIVERSITY, COMMUNITY INK'}],
      // 
      liveCodeBlock: {
        playgroundPosition: 'bottom',
      }, 
      // // search features
      // algolia: {
      //   // The application ID provided by Algolia
      //   appId: 'YOUR_APP_ID',
  
      //   // Public API key: it is safe to commit it
      //   apiKey: 'YOUR_SEARCH_API_KEY',
  
      //   indexName: 'YOUR_INDEX_NAME',
  
      //   // Optional: see doc section below
      //   contextualSearch: true,
  
      //   // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      //   externalUrlRegex: 'external\\.com|domain\\.com',
  
      //   // Optional: Algolia search parameters
      //   searchParameters: {},
  
      //   // Optional: path for search page that enabled by default (`false` to disable it)
      //   searchPagePath: 'search',
  
      //   //... other Algolia params
      // },
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
         'We need your feedbacks, please fill <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/AfUgcHo8Tdc4qgCc8">this survey</a>',
         backgroundColor: '#fafbfc',
        //  #4fddbf ,#fafbfc
         textColor: '#091E42',
        //  `⭐️ If you like Community Ink, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/open-source-learners/comminityink">GitHub</a>`,
      },
      // navbar 
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
                type: 'docSidebar',
                label: 'Science',
                sidebarId: 'Faculties',
                
              },                    
            ],
          },
          /* blogs */
          {
            type: 'dropdown',
            label: 'Blogs',
            position: 'left',
            items: [
              {to: '/blog', label: 'Generals'}          
            ],
          },
        ],
      },
      stylesheets: [
        {
          href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
          type: 'text/css',
          integrity:
            'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
          crossorigin: 'anonymous',
        },
      ],
      // navbar end

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Faculties',
                to: 'docs/category/faculties'
                
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'linkedin',
                href: 'https://www.linkedin.com/company/opls/',
              },
              {
                label: 'github',
                href: 'https://github.com/open-source-learners/',
              },
              {
                label: 'WhatsApp',
                href: 'https://chat.whatsapp.com/FLe6SMFmPqV9tSFTbpGqrz/',
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
          copyright: `Copyright © ${new Date().getFullYear()} open-source-learners`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

