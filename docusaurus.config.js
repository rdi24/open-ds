
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenDS',
  tagline: 'Open Dataspace Platform',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // Website URL
  url: 'https://rdi24.github.io',
  baseUrl: '/open-ds/',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },

        // Disable blog
        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: false,
    },

    navbar: {
      title: '',
      logo: {
        alt: 'OpenDS',
        src: 'img/logo.svg',
      },
      items: [],
    },

    footer: {
      style: 'light',
      copyright: `© ${new Date().getFullYear()} OpenDS`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
