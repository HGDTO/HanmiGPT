// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '한미글로벌 HanmiGPT',
  tagline: 'HanmiGPT는 한미글로벌 구성원 누구나 사용이 가능한 생성형 AI 서비스로서, 당사 서비스 차별화 및 업무 지원을 위해 생성형 AI 질의응답 및 여러 플러그인 기능을 제공합니다.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://github.com/HGDTO',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Hanmigpt/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'HanmiGlobal', // Usually your GitHub org/user name.
  projectName: 'HanmiGPT', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  deploymentBranch: "gh-pages",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
            // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },    
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      // ...
      theme: {
        customCss: require.resolve('./src/css/custom.css'),
      },  
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        //title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
          href: 'https://www.hmglobal.com/',
        },
        items: [
           {
            href: 'http://localhost:3000/', //추후 URL 교체
            label: 'Home',
            position: 'right',
            target:'_self'
          },
          {
            type: 'docSidebar',
            sidebarId: 'someSidebar3',
            position: 'right',
            label: '소개',
          },     
          //{to: '/blog', label: '특징', position: 'right'},         
          {
            type: 'docSidebar',
            sidebarId: 'someSidebar',
            position: 'right',
            label: '플러그인',
          },     
          {
            type: 'docSidebar',
            sidebarId: 'someSidebar2',
            position: 'right',
            label: 'FAQ',
          },     
          //{to: '/blog', label: '이벤트', position: 'right'},
          //{to: '/blog', label: 'Blog', position: 'left'},        
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',        
        links: [
          {
            title: '한미글로벌(주)',      
            items: [
              {
                label: '서울특별시 강남구 테헤란로87길 36(삼성동)',
                 href: '#',
              },
              {
                label: '도심공항타워 9층',
                href: '#',
              },
              {
                label:'Phone: +82 2 3429 6300',
                href: 'tel:0234296300',
              },      
              {
                label:'Email:dto@hanmiglobal.com',
                href: 'mailto:dto@hanmiglobal.com',
              },   
            ],
          },
          {
            title: '개인정보처리방침',
            items: [
              {
                label: '개인정보처리방침',
                to: 'docs/pages/privacy',
              },          
            ],
          },
          {
            title: '관련 사이트',
            items: [
              {
                label: 'D/T 추진실',
                href: 'https://www.hanmiglobal.com/kr/about/lab_3.asp'
              },
              {
                label:'한미글로벌 디지털 포트폴리오',
                href: 'https://www.digitalhanmi.com/'
              },
              {
                label:'HanmiGPT 홍보사이트',
                href: 'https://doc.hanmigpt.com/#',
              },
              
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HanmiGlobal Co., Ltd. ALL RIGHTS RESERVED.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
