# CoreAI Platform — продуктовый backlog на 2–3 недели под сайт и демо

Цель: чтобы заявка сайта “Second Brain компании / agentic layer поверх 1С, SQL, CRM и документов” не выглядела оторванной от продукта. Нужно сделать не десятки фич, а один законченный спектакль платформы.

## Главный демо-сценарий

> Одна бизнес-цель → несколько систем → несколько агентов → pipeline → дашборд → audit.

User prompt:

> “Сравни план-факт из 1С и SQL, проверь сделки без next step в CRM, найди причины отклонений и собери дашборд для руководителя.”

Демо должно показать:

1. Coordinator Agent понял цель.
2. Data Agent пошёл в 1С/SQL.
3. Sales Agent проверил CRM/demo CRM dataset.
4. Finance Agent нашёл отклонения.
5. Report Agent собрал выводы.
6. Pipeline сохранил график на dashboard.
7. Audit log зафиксировал источники, tool calls и шаги.

## P0 — обязательно для сильного демо

### 1. Agent Workspace

Нужно:

- чат;
- выбранный агент;
- источники / context panel;
- tools panel;
- plan view;
- run trace;
- result cards;
- кнопка “добавить на дашборд”.

Критерий готовности:

- пользователь видит не просто ответ, а план, источники, использованные tools и результат.

### 2. 1С + SQL data flow

Нужно:

- read-only 1С через OData;
- SQL-коннектор;
- 1 demo dataset для план-факта;
- 1 demo query для выручки/расходов/маржи;
- отображение источника для каждого результата.

Критерий готовности:

- запрос “план-факт” действительно подтягивает данные из 1С/SQL или демонстрационного контура, а не только mock.

### 3. Графики и dashboard

Нужно:

- генерация графика из ответа;
- сохранение графика как dashboard widget;
- dashboard page / dashboard panel;
- минимум 3 widget types: line/bar/table/metric.

Критерий готовности:

- можно из чата получить график и добавить его в “CEO Dashboard”.

### 4. Audit / Trace timeline

Нужно:

- лог запуска;
- пользователь;
- агент;
- использованные источники;
- tool calls;
- время;
- результат;
- статус.

Критерий готовности:

- администратор может открыть run и увидеть цепочку действий.

### 5. Skill Hub v0

Нужно:

- каталог карточек skills;
- 8–10 карточек;
- 2–3 реально запускаемых skills;
- теги: 1С, SQL, CRM, Docs, Dashboard;
- связь skill → доступные tools.

Рабочие skills для демо:

1. План-факт по 1С и SQL.
2. Дашборд руководителя.
3. Контроль продаж на demo CRM dataset.

Критерий готовности:

- skill можно выбрать и запустить из UI.

### 6. Pipeline Builder v0

Не нужен сложный node-canvas. Достаточно step-based интерфейса.

Нужно:

- список шагов;
- status per step;
- input/output per step;
- возможность запустить pipeline;
- trace по шагам;
- 3 шаблона.

Шаблоны:

1. Weekly CEO Dashboard.
2. Sales Follow-up Control.
3. Finance Plan-Fact Review.

Критерий готовности:

- пользователь видит, что CoreAI строит процесс, а не просто отвечает.

### 7. Multi-agent orchestration v0

Нужно:

- Coordinator Agent;
- Data Agent;
- Finance Agent;
- Sales Agent;
- Report Agent;
- видимость, кто что сделал.

Можно начать с deterministic routing / простого orchestrator, без полноценного A2A protocol compliance.

Критерий готовности:

- в демо видно разделение подзадач между агентами и общий trace.

### 8. Provider selector

Нужно:

- UI selector;
- model/provider abstraction;
- минимум mock/real options:
  - Claude;
  - OpenAI;
  - GigaChat;
  - YandexGPT;
  - Local.

Критерий готовности:

- пользователь/админ видит, что платформа multi-provider; реальная маршрутизация может развиваться поэтапно.

### 9. Admin / Control Plane v0

Нужно:

- users;
- roles: user/admin;
- integrations;
- run logs;
- audit timeline;
- provider settings placeholder;
- connector status.

Критерий готовности:

- CIO/CISO видят, что это не игрушка, а управляемая система.

## P1 — желательно за 2–3 недели

### 1. CRM demo layer

Можно начать не с полноценного amoCRM API, а с synthetic/demo CRM dataset.

Нужно:

- deals;
- managers;
- next step;
- overdue tasks;
- deal amount;
- status/stage;
- risks.

Skill:

> “Покажи сделки без next step, менеджеров с просроченными задачами и клиентов, которых нужно реактивировать.”

### 2. Telegram notifications

Нужно:

- уведомление о готовом отчёте;
- уведомление ответственному;
- простая отправка сообщения из pipeline.

### 3. CSV/XLSX upload

Нужно:

- загрузка файла;
- парсинг таблицы;
- использование в answer/chart;
- источник отображается в context panel.

### 4. Action preview UI

Даже если write-actions пока не работают, нужно показать flow:

- proposed action;
- preview;
- approve/reject;
- audit.

Пример:

> “Создать задачу руководителю продаж: проверить 18 сделок без next step.”

### 5. Partner demo workspace

Нужно:

- отдельная страница/режим “Partner demo”;
- список demo skills;
- “запустить сценарий для клиента”;
- co-brand placeholder.

## Что НЕ нужно делать за 2–3 недели

- Полноценный marketplace.
- Полный официальный A2A protocol compliance.
- Сложный visual node-canvas.
- Запись в 1С в production.
- Fine-tuning.
- Полный SSO/SAML/OIDC.
- DLP.
- Полноценный MCP gateway.

Эти фичи можно заявлять как architecture/roadmap/enterprise pilot direction, но не тратить на них основной sprint до первого публичного сайта.

## Риск и mitigation

### Риск

Сайт обещает agentic platform, а демо выглядит как чат с графиком.

### Mitigation

Главное демо должно всегда показывать:

- бизнес-цель;
- несколько источников;
- несколько агентов;
- pipeline;
- chart/dashboard;
- trace/audit;
- следующий шаг/action preview.

## Формулировки доступности

Верх сайта:

- “Early Access”
- “доступно для пилотов”
- “первый релиз платформы”
- “подключается в рамках enterprise-пилота”

FAQ/disclaimer:

> CoreAI Platform доступна в Early Access. Набор коннекторов, режим deployment и enterprise-функции зависят от сценария пилота и контура клиента.

## Definition of demo readiness

Демо готово, когда можно провести 7-минутный сценарий:

1. Открыть Agent Workspace.
2. Ввести сложную бизнес-цель.
3. Показать план.
4. Показать агентов.
5. Показать источники 1С/SQL/CRM dataset.
6. Показать pipeline steps.
7. Показать график.
8. Добавить на dashboard.
9. Открыть audit trace.
10. Показать action preview.
