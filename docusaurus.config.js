// @ts-nocheck
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

// @ts-ignore
import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://960439320.senati.chat.pe',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docusaurus/',


    // <-- aquí abajo
    stylesheets: [
      'https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap',
      'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap'
    ],
    
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },        
      }),
    ],
  ],

  themeConfig: {
    colorMode: {
      // Habilita tema claro/oscuro con default en claro
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      style: 'primary',       // background primario
      hideOnScroll: false,
      items: [ /* tus items */ ],
    },
    docs: {
      sidebar: {
        hideable: true,       // sidebar plegable
        autoCollapseCategories: true,
      },
    },
    prism: {
      // usa un tema oscuro claro inspirados en Mintlify:
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    // paleta de colores global:
    // estos vars estarán disponibles en CSS con var(--ifm-color-...)
    // saca las que necesites para tus botones, links, navbar, etc.
    // inspírate en Mintlify: fondo verde oscuro en dark, botones blancos/transparentes, acciones en verde claro.
    colorMode: { /*…*/ },
  },
  
};

export default config;
