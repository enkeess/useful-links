export type LinkItem = {
  title: string;
  url: string;
  description?: string;
};

export type LinkGroup = {
  title: string;
  links: LinkItem[];
};

export const CURSOR_LINKS: LinkGroup[] = [
  {
    title: 'Документация',
    links: [
      {
        title: 'Подключение к LLM',
        url: 'https://cloud.ru/docs/foundation-models/ug/topics/tutorials__connect-vscode?source-platform=Evolution',
        description: 'Документация по LLM для работы в VS Code',
      },
    ],
  },
  {
    title: 'Cloud.ru',
    links: [
      {
        title: 'Телеграм канал Cloud.ru',
        url: 'https://t.me/cloudruprovider',
        description: 'Официальный телеграм канал Cloud.ru',
      },
      {
        title: 'Стань частью нашей команды',
        url: 'https://cloud.ru/career/vacancies',
        description: 'Вакансии в Cloud.ru',
      },
    ],
  },
  {
    title: 'Промт инжиниринг',
    links: [
      {
        title: 'Техники промт инжиниринга',
        url: 'https://www.promptingguide.ai/ru/techniques',
        description: 'Подробное руководство по техникам создания эффективных промтов',
      },
      {
        title: 'Эффективные промты',
        url: 'https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents',
        description: 'Инженерные подходы к созданию контекста для AI агентов',
      },
    ],
  },
  {
    title: 'Cursor Rules',
    links: [
      {
        title: 'Рулы документация',
        url: 'https://cursor.com/docs/context/rules',
        description: 'Официальная документация по правилам контекста',
      },
      {
        title: 'Рулы коллекция',
        url: 'https://cursor.directory/rules',
        description: 'Коллекция готовых правил для Cursor',
      },
    ],
  },
  {
    title: 'Миграция с других IDE',
    links: [
      {
        title: 'Миграция с VSCode',
        url: 'https://cursor.com/docs/configuration/migrations/vscode',
        description: 'Пошаговая инструкция по переходу с Visual Studio Code',
      },
      {
        title: 'Миграция с JetBrains',
        url: 'https://cursor.com/docs/configuration/migrations/jetbrains',
        description: 'Руководство по миграции с JetBrains IDE',
      },
    ],
  },
  {
    title: 'Управление контекстом',
    links: [
      {
        title: 'Символы контекста',
        url: 'https://cursor.com/docs/context/symbols',
        description: 'Работа с символами и индексацией кода',
      },
      {
        title: 'Обзор вкладок',
        url: 'https://cursor.com/docs/tab/overview',
        description: 'Управление вкладками и контекстом',
      },
      {
        title: 'AI агент',
        url: 'https://cursor.com/docs/agent/overview',
        description: 'Возможности AI агента в Cursor',
      },
    ],
  },
  {
    title: 'Конфигурация',
    links: [
      {
        title: 'Shell Commands',
        url: 'https://cursor.com/docs/configuration/shell',
        description: 'Настройка команд терминала',
      },
    ],
  },
  {
    title: 'MCP (Model Context Protocol)',
    links: [
      {
        title: 'MCP Документация',
        url: 'https://cursor.com/docs/context/mcp',
        description: 'Официальная документация по MCP',
      },
      {
        title: 'MCP коллекция',
        url: 'https://cursor.directory/mcp',
        description: 'Коллекция MCP серверов и инструментов',
      },
    ],
  },
  {
    title: 'Обучение',
    links: [
      {
        title: 'Курс от Cursor',
        url: 'https://cursor.com/learn/how-ai-models-work',
        description: 'Изучение принципов работы AI моделей',
      },
    ],
  },
];
