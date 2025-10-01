# Деплой на GitHub Pages

## Автоматический деплой через GitHub Actions

Проект настроен для автоматического деплоя на GitHub Pages при каждом push в ветку `main`.

### Настройка GitHub Pages

1. Перейдите в настройки репозитория: `Settings` → `Pages`
2. В разделе "Source" выберите `GitHub Actions`
3. Workflow автоматически запустится при следующем push в `main`

### Ручной деплой

Для ручного деплоя используйте команду:

```bash
npm run deploy
```

Эта команда:
1. Соберет проект (`npm run build`)
2. Задеплоит в ветку `gh-pages` с помощью `gh-pages`

### Локальная сборка

Для локальной сборки и тестирования:

```bash
npm run build
npm run preview
```

### Структура деплоя

- **GitHub Actions workflow**: `.github/workflows/deploy.yml`
- **Base path**: `/useful-links/` (настроен в `vite.config.ts`)
- **Build output**: `dist/` директория
- **Deploy branch**: `gh-pages`

### URL приложения

После деплоя приложение будет доступно по адресу:
`https://[username].github.io/useful-links/`

Где `[username]` - ваш GitHub username.
