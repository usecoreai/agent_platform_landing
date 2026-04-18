# CoreAI Platform — Landing

Лендинг `CoreAI Platform`. Развёрнут как статический сайт на **GitHub Pages**, домен `platform.core-ai.ru`.

Стек: **Vite + React + TypeScript + Tailwind CSS**.

## Структура

```
.
├─ index.html
├─ public/
│  ├─ CNAME              # platform.core-ai.ru
│  └─ favicon.svg
├─ src/
│  ├─ main.tsx
│  ├─ App.tsx
│  ├─ data/content.ts    # вся копия одной точкой
│  ├─ styles/index.css
│  └─ components/        # секции лендинга
├─ .github/workflows/deploy.yml
├─ vite.config.ts
├─ tailwind.config.js
└─ package.json
```

Контентные брифы и продуктовые материалы — в файлах `00_READ_THIS_FIRST.md` … `06_DEPLOYMENT_CHECKLIST.md` (используются как источник для копирайта; на сайте их нет).

## Локальная разработка

```bash
npm install
npm run dev          # dev-сервер на http://localhost:5173
npm run build        # сборка в ./dist
npm run preview      # локальный просмотр сборки
npm run typecheck    # проверка типов
```

Все CTA — `mailto:team@core-ai.ru`. Бэкенда нет.

## Редактирование копии

Вся копия и данные секций живут в одном файле:

```
src/data/content.ts
```

Компоненты в `src/components/*` — только разметка/стили. Чтобы изменить тексты, скиллы, FAQ, badges, шаги пайплайна и т.д., правьте `content.ts`.

## Деплой на GitHub Pages

Workflow `.github/workflows/deploy.yml` уже настроен. Каждый push в `main` собирает сайт и публикует на GitHub Pages.

### Однократная настройка репозитория

1. **Settings → Pages → Build and deployment → Source = GitHub Actions.**
2. **Settings → Pages → Custom domain = `platform.core-ai.ru`.** Сохранить.
3. У DNS-провайдера домена `core-ai.ru` создать запись:
   - Тип: `CNAME`
   - Хост: `platform`
   - Значение: `<github-owner>.github.io`
4. Дождаться DNS-распространения и выпуска сертификата.
5. Включить **Enforce HTTPS**.

`public/CNAME` коммитится в репозиторий и автоматически попадает в `dist/CNAME` при сборке — это то, что Pages читает для custom-домена.

## Чек-лист перед мерджем в main

- `npm run build` проходит без ошибок.
- Mobile-вёрстка не ломается (хедер, hero-mockup, таблица сравнения скроллится).
- CTA указывают на `team@core-ai.ru`.
- Ссылка на политику обрабатывается: `https://www.core-ai.ru/policy/`.
- Никаких сторонних логотипов (1С, amoCRM, Bitrix24 и т.д.) — только текстовые badge.
- Нет упоминаний внутренних кодовых названий и не подтверждённых партнёрств.

## Финальный URL

https://platform.core-ai.ru
