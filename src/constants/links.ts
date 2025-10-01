import { LinksGroup } from '#types/links';

export const LINKS_GROUPS: LinksGroup[] = [
  {
    title: 'Разработка',
    items: [
      {
        title: 'React',
        description: 'Библиотека для создания пользовательских интерфейсов',
        href: 'https://react.dev',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
      },
      {
        title: 'TypeScript',
        description: 'Типизированный JavaScript для масштабируемых приложений',
        href: 'https://www.typescriptlang.org',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png'
      },
      {
        title: 'Vite',
        description: 'Быстрый инструмент сборки для современных веб-проектов',
        href: 'https://vitejs.dev',
        imgUrl: 'https://vitejs.dev/logo.svg'
      }
    ]
  },
  {
    title: 'Дизайн',
    items: [
      {
        title: 'Figma',
        description: 'Инструмент для создания интерфейсов и прототипирования',
        href: 'https://www.figma.com',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1200px-Figma-logo.svg.png'
      },
      {
        title: 'Adobe XD',
        description: 'Платформа для дизайна и прототипирования пользовательского опыта',
        href: 'https://www.adobe.com/products/xd.html',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/1200px-Adobe_XD_CC_icon.svg.png'
      }
    ]
  },
  {
    title: 'Обучение',
    items: [
      {
        title: 'MDN Web Docs',
        description: 'Документация по веб-технологиям от Mozilla',
        href: 'https://developer.mozilla.org',
        imgUrl: 'https://developer.mozilla.org/favicon-48x48.png'
      },
      {
        title: 'Stack Overflow',
        description: 'Сообщество разработчиков для решения технических вопросов',
        href: 'https://stackoverflow.com',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/1200px-Stack_Overflow_icon.svg.png'
      },
      {
        title: 'GitHub',
        description: 'Платформа для хостинга кода и совместной разработки',
        href: 'https://github.com',
        imgUrl: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
      }
    ]
  }
];
