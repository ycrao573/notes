import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "My Site",
  tagline: "Coming Soooooooon...",
  favicon: "img/tangerine.svg",

  // Set the production url of your site here
  url: "https://ycrao573.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/notes",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ycrao573", // Usually your GitHub org/user name.
  projectName: "notes", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-Hans"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/ycrao573/notes",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/ycrao573/notes",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/avatar.png",
    navbar: {
      title: "Docs",
      logo: {
        alt: "Logo",
        src: "img/tangerine.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial",
        },
        { to: "/", label: "Blog", position: "left" },
        {
          href: "https://github.com/ycrao573",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Contact",
          items: [
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/yuchen-rao-a249b6180/",
            },
            {
              label: "GitHub",
              href: "https://github.com/ycrao573",
            },
          ],
        },
        {
          title: "More",
          items: [],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Yuchen Rao. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
