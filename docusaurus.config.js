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
  title: 'Mi Guía 🔐',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/logo-escudo.svg',

  // Set the production url of your site here
  url: 'https://960439320.senati.chat.pe',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docusaurus/',


  stylesheets: [
  'https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap',
  'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap',
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

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Inicio',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo-escudo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'html',
          position: 'right',
          value: `
            <a href="https://github.com/Kazu2006/Proyecto-Docusaurus"
               class="navbar-github-link"
               target="_blank" rel="noopener">
              <span>Mi GitHub</span>
              <img src="/docusaurus/img/github-icon.svg" alt="GitHub" />
            </a>
          `,
        },
        
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentos',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/gestor-contrasenas',
            },
          ],
        },
        {
          title: 'Redes',
          items: [
            {
            html: `
               <a href="https://stackoverflow.com/questions/tagged/docusaurus"
                target="_blank" rel="noopener">
                <img src="/docusaurus/img/stack-overflow.png" alt="Stack Overflow" class="footer-icon" />
                Stack Overflow
                </a>
                `,
            },
            {
              html: `
                <a href="https://discordapp.com/invite/docusaurus"
                target="_blank" rel="noopener">
                <img src="/docusaurus/img/discord.svg" alt="Discord" class="footer-icon" />
                Discord
                </a>
                `,
            },
            {
              html: `
                <a href="https://x.com/docusaurus"
                target="_blank" rel="noopener">
                <img src="/docusaurus/img/X.png" alt="X (Twitter)" class="footer-icon" />
                Twitter
                </a>
                `,
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              html: `
                <a href="https://x.com/docusaurus"
                target="_blank" rel="noopener">
                <img src="/docusaurus/img/github-icon.svg" alt="Git (Github)" class="footer-icon" />
                Github
                </a>
                `,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mi Proyecto en Docusaurus`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;