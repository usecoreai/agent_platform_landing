# Супердетальное ТЗ / Master Prompt для Anthropic Opus

Ты — senior product designer, frontend engineer, B2B SaaS growth marketer, enterprise AI product strategist и technical writer. Нужно разработать и подготовить к публикации лендинг `CoreAI Platform` на домене `platform.core-ai.ru` через GitHub Pages.

Это не просто лендинг. Это первый публичный category-defining сайт нового enterprise AI-продукта, который выходит в конкуренцию с Ladcraft, Just AI Agent Platform, MWS AI Agents Platform и native AI-слоями в CRM/ERP.

## 0. Главная задача

Сделать современный, сильный, продающий и технологически убедительный сайт для `CoreAI Platform`.

Сайт должен создать ощущение, что CoreAI — не очередной AI-чат и не узкий CRM-виджет, а **Second Brain компании** и **agentic layer поверх корпоративных систем**.

## 1. Название продукта

Публичное название:

> CoreAI Platform

Можно использовать как категорию / объяснение:

> Second Brain компании

Можно использовать в тексте:

- агентская платформа;
- агентский слой;
- agentic layer;
- AI-хаб;
- Agent Hub;
- Skill Hub;
- Pipeline Builder;
- A2A-ready orchestration;
- Enterprise Control Plane.

Не использовать публично:

- OpenCode;
- “копия Claude Code”;
- неподтверждённое “официальный партнёр 1С”;
- чужие логотипы 1С, amoCRM, Bitrix24 и других систем без явного разрешения;
- claims уровня “все интеграции уже production-ready”, если это не подтверждено.

## 2. Категорийное позиционирование

Главная категория:

> CoreAI Platform — Second Brain компании поверх 1С, CRM, SQL, документов и внутренних систем.

CoreAI не заменяет существующие системы. CoreAI использует их как systems of record и добавляет агентский слой мышления, координации и действий.

Главный манифест:

> Хранить — задача CRM/ERP.  
> Думать, связывать и действовать — задача CoreAI.

Ключевая провокационная формула:

> Не внедряйте ещё одну систему учёта. Подключите CoreAI как агентский слой поверх 1С, CRM, SQL, документов и внутренних сервисов — с пайплайнами, скиллами, A2A-агентами, выбором моделей и enterprise-контролем.

Важно: тон должен быть провокационным, но partner-friendly. Не атаковать CRM/ERP/1С. Сказать, что у них правильная роль: хранить факты, транзакции, клиентов, заказы, остатки, документы, историю. CoreAI делает другое: понимает, связывает, координирует и помогает действовать.

## 3. Ключевая метафора продукта

`Second Brain компании` должен означать не “база знаний” и не “RAG-чат”.

Он должен означать:

> Memory + Reasoning + Agents + Pipelines + Actions + Control

Расшифровка:

- **Memory** — контекст из 1С, CRM, SQL, документов, задач, почты, чатов, базы знаний и внутренних API.
- **Reasoning** — анализ, планирование, поиск связей, объяснение отклонений, проверка источников.
- **Agents** — координатор, data-agent, finance-agent, sales-agent, report-agent, support-agent и другие роли.
- **Pipelines** — повторяемые workflows из шагов: trigger → context → agent → tool → verification → action → dashboard/log.
- **Actions** — графики, дашборды, отчёты, задачи, уведомления, документы, controlled write-actions.
- **Control** — роли, админка, логирование, audit, traces, approval, выбор модели, on-prem/private cloud.

## 4. Что уже есть / текущий MVP

Текущий MVP продукта включает:

- базовый агентский чат;
- роли пользователя и администратора;
- логирование;
- read-only интеграцию с 1С через OData;
- SQL-коннектор;
- возможность архитектурно добавлять коннекторы;
- построение графиков из ответов;
- дашборд, куда можно добавлять графики и результаты.

В ближайшие 2–3 недели команда планирует встроить / довести:

- Skill Hub;
- инструменты для A2A / multi-agent orchestration;
- Pipeline Builder;
- provider selector;
- context panel;
- trace/audit timeline;
- CRM connector layer / demo CRM scenarios;
- Telegram notifications;
- CSV/XLSX upload;
- action preview UI;
- улучшенную partner/demo упаковку.

Как это показывать на сайте:

- В hero и ключевых блоках не писать “только roadmap”. Позиционировать как возможности Early Access / первого релиза / enterprise-пилотов.
- В FAQ или мелкой подписи честно указать: “CoreAI Platform доступна в Early Access. Набор коннекторов, режим deployment и enterprise-функции зависят от сценария пилота и контура клиента.”
- Не обещать production-grade запись в 1С без approval. Для write-actions использовать формулировку: “controlled actions: preview → approval → execution → audit”.

## 5. Основная аудитория

Hero должен бить прежде всего в предпринимателей, собственников, CEO, COO и руководителей направлений.

Их боли:

- данные уже есть, но они разбросаны;
- руководителю нужно ждать отчеты;
- сотрудники тратят время на поиск информации;
- CRM/ERP/1С хранят данные, но не помогают думать;
- каждый вопрос проходит через людей, Excel и ручную сборку;
- внедрение еще одной системы учёта кажется тяжелым и дорогим;
- AI-чат сам по себе не знает контекст компании и не может действовать.

Вторичные аудитории:

### CIO/CISO
Их нужно закрыть enterprise-блоками:

- роли;
- логирование;
- audit trail;
- source tracking;
- provider selection;
- on-prem/private cloud;
- approval workflows;
- model/data governance;
- no uncontrolled write-actions.

### 1С/CRM-интеграторы
Их нужно закрыть partner-блоком:

> Усильте вашу экспертизу и предложите клиентам надёжные и прогрессивные AI-решения без разработки платформы с нуля.

### Консалтинги
Им нужно показать:

- AI-пилоты;
- ROI-blueprints;
- быстрый presale;
- совместное внедрение;
- возможность упаковать их процессную экспертизу в skills/pipelines.

## 6. Главная hero-секция

Использовать этот вариант как основной:

### Headline

> Second Brain компании поверх 1С, CRM, SQL и документов

### Subheadline

> Не внедряйте ещё одну систему учёта. Подключите CoreAI как агентский слой поверх 1С, CRM, SQL, документов и внутренних сервисов — с пайплайнами, скиллами, A2A-агентами, выбором моделей и enterprise-контролем.

### Manifest line

> Хранить — задача CRM/ERP.  
> Думать, связывать и действовать — задача CoreAI.

### CTA

Primary: `Запросить пилот`  
Secondary: `Стать партнёром`

### Badges

- Agent Hub
- Skill Hub
- Pipeline Builder
- A2A-ready orchestration
- 1С Управление Предприятием
- 1С Бухгалтерия
- 1С УТ
- Postgres SQL
- CRM connectors
- Multi-provider LLM
- On-prem / Private Cloud
- Audit & Approval

### Hero visual

Сделать сильный интерфейсный mockup, не абстрактную картинку.

Сценарий в UI:

User goal:

> “Сравни план-факт из 1С и SQL, проверь сделки без next step в CRM, найди причины отклонений и собери дашборд для руководителя.”

Agent orchestration:

- Coordinator Agent
- Data Agent
- Finance Analyst
- Sales Agent
- Report Agent

Pipeline steps:

1. Retrieve from 1C
2. Query SQL
3. Analyze CRM
4. Build chart
5. Verify sources
6. Save to dashboard
7. Notify owner
8. Log trace

Right panel / context sources:

- 1С:ERP / OData
- SQL: finance_plan
- CRM pipeline
- Регламент бюджетирования.pdf
- Dashboard: CEO View

Bottom audit line:

> Sources verified · Tool calls logged · Human approval for actions

## 7. Альтернативные hero-фразы для теста

Можно использовать в разных блоках, но не обязательно как основной hero.

### More provocative

> CRM и ERP хранят данные. CoreAI заставляет их работать.

### More founder/CEO-focused

> Ваш бизнес уже всё знает. CoreAI помогает ему думать и действовать.

### More enterprise

> Agentic Second Brain для компаний с 1С, CRM и сложным контуром данных.

## 8. Обязательные секции сайта

### 8.1 Header

Logo text: `CoreAI Platform`

Nav:

- Платформа
- Скиллы
- Пайплайны
- Коннекторы
- Enterprise
- Партнёрам
- Пилот

CTA: `Запросить пилот`

Responsive mobile menu.

### 8.2 Hero

Использовать основной hero из раздела 6.

### 8.3 Manifest section

Title:

> Не заменяем CRM и ERP. Возвращаем им правильную роль.

Copy:

> CRM, ERP, 1С, SQL и DWH должны оставаться надёжными системами хранения фактов, клиентов, сделок, заказов, остатков, документов и транзакций. Но бизнесу нужен слой выше: тот, который понимает цель, собирает контекст, объясняет отклонения, координирует агентов и запускает действия. CoreAI Platform становится этим слоем.

Three cards:

1. **Systems of Record**  
   1С, CRM, ERP, SQL, DWH и документы хранят факты, транзакции и историю.

2. **Systems of Intelligence**  
   LLM, RAG, context management и reasoning помогают понимать данные, искать связи и объяснять выводы.

3. **Systems of Action**  
   Skills, tools, pipelines, A2A orchestration, approval и audit превращают выводы в управляемые действия.

Punchline:

> Хранить — задача CRM/ERP.  
> Думать, связывать и действовать — задача CoreAI.

### 8.4 Problem section

Title:

> Ваша компания уже накопила знания. Но они заперты в системах.

Cards:

- Данные живут в 1С, CRM, SQL, документах, почте, задачах и чатах.
- Руководители ждут отчёты, потому что данные собираются вручную.
- Обычные AI-чаты не знают ваших прав доступа, источников и бизнес-логики.
- Встроенный AI внутри одной CRM/ERP закрывает только часть сценариев.
- Интеграции каждый раз пишутся с нуля и плохо масштабируются.
- Без ролей, логов, approval и traces AI-пилоты не проходят enterprise-контроль.

### 8.5 Second Brain section

Title:

> Second Brain — это не база знаний. Это рабочий слой компании.

Copy:

> Обычная база знаний отвечает на вопросы. CoreAI понимает задачу, находит контекст в корпоративных системах, распределяет работу между агентами, вызывает инструменты, строит графики, собирает дашборды, готовит документы и логирует каждое действие.

Formula:

> Memory + Reasoning + Agents + Pipelines + Actions + Control

Cards:

- Memory
- Reasoning
- Agents
- Pipelines
- Actions
- Control

### 8.6 Platform pillars

Title:

> Платформа для агентских процессов, а не изолированных чатов

Pillars:

1. **Agent Hub**  
   Единый интерфейс, где сотрудники ставят цели, агенты строят план, используют инструменты и возвращают проверяемый результат.

2. **Skill Hub**  
   Готовые навыки для 1С, продаж, финансов, поддержки, документов, HR и управленческой аналитики.

3. **Pipeline Builder**  
   Собирайте повторяемые agentic workflows: запрос → источники → агент → tool → проверка → действие → уведомление → дашборд.

4. **A2A-ready orchestration**  
   Разделяйте сложные задачи между агентами: координатор, аналитик, data-agent, sales-agent, report-agent, support-agent.

5. **Context Layer**  
   Подключайте 1С, CRM, SQL, документы, почту, задачи и базы знаний. Агент отвечает с источниками, а не из воздуха.

6. **Enterprise Control Plane**  
   Роли, права, логи, audit trail, provider routing, on-prem/private cloud, approval и trace каждого действия.

### 8.7 How it works / Ask Verify Act

Title:

> От запроса к проверенному действию

Use the line:

> Ask · Verify · Act · in a single window

Steps:

1. **Ask** — сотрудник формулирует цель обычным языком.
2. **Understand** — CoreAI находит контекст в 1С, SQL, CRM, документах и базе знаний.
3. **Orchestrate** — платформа распределяет подзадачи между агентами и tools.
4. **Verify** — ответ сопровождается источниками, расчётами и trace.
5. **Act** — система готовит отчёт, график, уведомление, задачу или действие под approval.

### 8.8 Product demo mock section

Title:

> Одна бизнес-цель. Несколько систем. Команда агентов. Один trace.

Show visual:

- User goal
- Coordinator Agent
- Specialist agents
- Pipeline steps
- Dashboard result
- Audit timeline

Example result cards:

- “Выручка: -7.4% к плану”
- “Расходы: +4.1% к плану”
- “Сделки без next step: 18”
- “Риск по марже: высокий”
- “График добавлен в CEO Dashboard”

### 8.9 Skills section

Title:

> Скиллы для процессов, где AI даёт эффект быстро

Cards:

1. **План-факт по 1С и SQL**  
   Собирает данные, находит отклонения и объясняет причины.

2. **Дашборд руководителя**  
   Создаёт графики по запросу и сохраняет их на управленческий дашборд.

3. **Финансовый аналитик**  
   Готовит пояснения по выручке, расходам, маржинальности и дебиторке.

4. **Контроль продаж**  
   Находит сделки без next step, просрочки и слабые места в воронке.

5. **Корпоративная база знаний**  
   Отвечает по документам, регламентам и внутренним инструкциям с источниками.

6. **НСИ и номенклатура**  
   Ищет дубли, аномалии и несоответствия в справочниках.

7. **Поддержка и тикеты**  
   Анализирует обращения, группирует причины и предлагает ответы.

8. **Подготовка отчётов**  
   Собирает отчёт, графики и краткие выводы для руководителя.

9. **Юридические документы**  
   Находит условия в договорах, цитирует пункты и готовит черновики уведомлений.

10. **Операционный контроль**  
   Собирает статусы из систем, выявляет узкие места и предлагает поручения.

Each card should have small tags: `1С`, `SQL`, `CRM`, `Docs`, `Dashboard`, `Approval`, etc.

### 8.10 Pipeline Builder section

Title:

> Пайплайны вместо ручной рутины

Copy:

> Повторяемые процессы не должны жить в инструкциях, Excel и переписках. В CoreAI их можно собрать как agentic pipeline: источники, агенты, tools, проверки, результат, уведомления и audit.

Show pipeline mock:

Trigger → Context → Plan → Agents → Tools → Verify → Dashboard/Action → Audit

Examples:

- Еженедельный управленческий отчёт.
- Контроль просроченных сделок.
- План-факт и отклонения.
- Подготовка документов.
- Анализ обращений поддержки.

### 8.11 A2A section

Title:

> A2A-ready: когда задачу решает не один бот, а команда агентов

Copy:

> Сложные бизнес-задачи редко решаются одним запросом. CoreAI проектируется для multi-agent сценариев: координатор разбивает цель на подзадачи, специализированные агенты работают с данными, продажами, финансами, документами и отчётами, а общий trace сохраняет весь путь к результату.

Cards:

- Coordinator Agent
- Data Agent
- Finance Agent
- Sales Agent
- Report Agent
- Support Agent

Small note:

> Полная совместимость с открытыми A2A-стандартами развивается по мере зрелости протоколов и требований enterprise-пилотов.

### 8.12 Connectors section

Title:

> Коннекторы к системам, которые уже живут в компании

Grid with text badges, no logos:

- 1С через OData
- SQL
- CSV/XLSX
- amoCRM
- Bitrix24
- МойСклад
- Google Drive
- Яндекс.Диск
- Email
- Telegram
- Яндекс.Трекер
- OKDesk
- YouGile
- HTTP API
- MCP

Copy:

> CoreAI не требует переносить данные в новую систему учёта. Платформа подключается к существующим источникам и использует их как контекст, инструменты и точки действия.

Small note:

> Набор коннекторов зависит от сценария, прав доступа и контура клиента. 1С read-only и SQL — фокус первого релиза; дополнительные интеграции подключаются в рамках pilot/onboarding.

### 8.13 Dashboard section

Title:

> Из запроса — в управленческий дашборд

Copy:

> CoreAI не только отвечает текстом. Агент может построить график, объяснить данные, сохранить результат в дашборд и обновлять его как часть пайплайна.

Show dashboard mock with cards:

- Revenue vs Plan
- Margin Risk
- Sales Follow-up Gaps
- Expenses Deviation
- Operational Alerts

### 8.14 Model Providers section

Title:

> Выбор моделей под задачу, контур и стоимость

Copy:

> CoreAI проектируется как multi-provider слой: внешние модели, российские LLM, локальные модели и custom fine-tuned models. Для каждого сценария можно выбирать баланс качества, скорости, стоимости и требований безопасности.

Text badges:

- Claude
- OpenAI
- GigaChat
- YandexGPT
- Local models
- Custom fine-tuned models

Note:

> Конкретный набор провайдеров зависит от требований клиента и deployment-модели.

### 8.15 Enterprise section

Title:

> Enterprise-контроль для агентских систем

Feature grid:

- Workspaces
- User/Admin roles
- RBAC policies
- Audit log
- Source tracking
- Tool call traces
- Provider selection
- On-prem/private cloud
- Approval workflows
- Secrets management
- Cost control
- Evals and regression testing
- Skill versioning
- Data masking / DLP
- Dev/Test/Prod environments

Copy:

> Чем больше возможностей у агентов, тем важнее контроль. CoreAI строится как control plane для enterprise-агентов: видно, кто что запустил, какие источники использовал, какие tools вызвал, какой результат получил и какие действия были подтверждены.

### 8.16 Why CoreAI section

Title:

> Разработано не ради AI-хайпа, а для рабочих бизнес-процессов

Copy:

> Команда CoreAI имеет глубокий опыт в LLM, RAG, agentic systems и создании фундаментальных AI-технологий. Мы проектируем платформу не как демонстрацию возможностей модели, а как управляемый слой для реальных процессов, данных и ответственности внутри компании.

Bullets:

- опыт выходцев из GigaChat и сильных российских AI-команд;
- экспертиза в LLM и applied R&D;
- продуктовый слой + enterprise delivery;
- фокус на измеримом эффекте;
- не только чат, а контекст, действия, логи и интеграции.

### 8.17 Use cases by role

Cards:

#### Предприниматель / CEO
Pain: нет единой картины бизнеса.  
CoreAI: собирает данные из 1С/SQL/CRM, строит дашборды и объясняет отклонения.  
Effect: быстрее управленческие решения.

#### Финансовый директор
Pain: отчёты собираются вручную.  
CoreAI: делает план-факт, анализирует расходы, маржинальность и дебиторку.  
Effect: меньше ручной аналитики.

#### Руководитель продаж
Pain: сделки теряются, менеджеры не делают next step.  
CoreAI: анализирует воронку, просрочки, коммуникации и риски.  
Effect: выше контроль и конверсия.

#### Операционный директор
Pain: статусы разбросаны по системам.  
CoreAI: собирает сводку, находит узкие места и готовит поручения.  
Effect: прозрачнее операционка.

#### CIO/CISO
Pain: AI-пилоты небезопасны и неуправляемы.  
CoreAI: роли, логи, audit, private deployment, provider control.  
Effect: управляемое внедрение AI.

#### 1С/CRM-интегратор
Pain: клиенты спрашивают AI, но строить свою платформу долго.  
CoreAI: даёт AI-слой, скиллы, коннекторы и методику пилотов.  
Effect: новая AI-практика для клиентской базы.

### 8.18 Partner section

Title:

> Для интеграторов: добавьте агентский слой к вашим CRM/ERP-проектам

Subheadline:

> Усильте вашу экспертизу и предложите клиентам по-настоящему надёжные и прогрессивные AI-решения без разработки платформы с нуля.

Copy:

> CRM/ERP-интеграторы уже знают процессы, данные и ограничения клиента. CoreAI добавляет то, чего не хватает существующим системам: агентский интерфейс, скиллы, пайплайны, A2A, выбор моделей, логи, approval и on-prem/private cloud deployment.

Partner cards:

- Demo workspace для партнёров
- Skill templates
- 1С/SQL пилоты
- Совместный presale
- Co-brand / white-label options
- Методика ROI
- Поддержка внедрения
- Roadmap под отраслевые сценарии

CTA:

> Обсудить партнёрство

### 8.19 Pilot section

Title:

> Пилот за 2–4 недели: один процесс, один KPI, понятный результат

Timeline:

Week 1 — выбор процесса, данных и KPI.  
Week 2 — подключение 1С/SQL, настройка ролей и базовых скиллов.  
Week 3 — тестирование на реальных задачах, графики, дашборды, feedback.  
Week 4 — измерение эффекта, roadmap масштабирования, решение по production.

KPI examples:

- время подготовки отчёта;
- количество ручных операций;
- скорость ответа руководителю;
- число найденных отклонений;
- ошибки в данных;
- SLA по внутренним запросам;
- конверсия/выручка для sales-сценариев.

### 8.20 Comparison section

Do not name Ladcraft or competitors directly. Use category comparison.

Columns:

- Обычный AI-чат
- AI внутри одной CRM/ERP
- Узкий AI-виджет
- CoreAI Platform

Rows:

- Кросс-системный контекст
- Second Brain компании
- Agent Hub
- Skill Hub
- Pipeline Builder
- A2A-ready orchestration
- 1С + SQL + CRM + документы
- Графики и дашборды
- Выбор LLM-провайдера
- AgentOps traces
- Approval & audit
- On-prem/private cloud
- Партнёрская кастомизация

### 8.21 FAQ

Questions and answers:

#### Вы заменяете CRM, ERP или 1С?
Нет. Мы считаем, что CRM, ERP и 1С должны оставаться системами хранения и учёта. CoreAI работает поверх них как агентский слой: ищет данные, объясняет выводы, строит пайплайны и помогает запускать действия.

#### Почему Second Brain, а не просто база знаний?
База знаний отвечает на вопросы. CoreAI соединяет память компании с агентами, инструментами, пайплайнами, моделями и enterprise-контролем. Это не только поиск, а путь от запроса к проверенному действию.

#### Что значит A2A-ready?
Платформа проектируется для сценариев, где несколько агентов могут разделять задачу, обмениваться результатами и работать через общий trace. Полная совместимость с открытыми протоколами агентского взаимодействия развивается по мере зрелости стандартов и требований enterprise-пилотов.

#### Что значит Pipeline Builder?
Это способ собирать повторяемые агентские процессы из шагов: источники, агент, tool, проверка, действие, уведомление, дашборд. В Early Access доступны базовые pipeline-сценарии и шаблоны под пилоты.

#### Какие коннекторы доступны?
В первом релизе фокус на 1С read-only через OData и SQL. CRM-коннекторы и дополнительные интеграции подключаются в рамках пилота в зависимости от контура клиента.

#### Может ли агент записывать данные в 1С?
В первом релизе 1С работает в read-only режиме. Запись проектируется как controlled action: preview, подтверждение пользователем, выполнение и audit log.

#### Можно ли развернуть в закрытом контуре?
Да. CoreAI Platform проектируется для private cloud/on-prem deployment и enterprise-пилотов в защищённом контуре.

#### Какие модели поддерживаются?
Архитектура проектируется как multi-provider: внешние модели, российские LLM и локальные модели. Конкретный набор зависит от требований клиента и deployment-модели.

#### Это продукт или консалтинг?
Это продуктовая платформа с внедренческой методикой. Мы можем запускать пилоты напрямую или вместе с интеграторами и консалтингами.

#### Что нужно для пилота?
Один процесс, владелец процесса, доступ к данным, KPI и безопасный контур подключения.

### 8.22 Final CTA

Title:

> Превратите корпоративные данные в Second Brain компании

Copy:

> Подключите CoreAI как агентский слой поверх 1С, CRM, SQL, документов и внутренних сервисов — и начните с пилота на одном процессе.

CTA:

- Запросить пилот
- Стать партнёром

### 8.23 Footer

CoreAI Platform  
Email: `team@core-ai.ru`

Links:

- Основной сайт: `https://www.core-ai.ru`
- Политика обработки персональных данных: `https://www.core-ai.ru/policy/`

Copyright:

> © 2026 Core AI. Все права защищены.

Small disclaimer:

> CoreAI Platform доступна в Early Access. Набор коннекторов, режим deployment и enterprise-функции зависят от сценария пилота и контура клиента.

## 9. Дизайн

### Style direction

Использовать CoreAI / DeepDesk визуальную ДНК:

- чистый enterprise дизайн;
- много воздуха;
- белый / графит / чёрный;
- фирменный оранжевый акцент;
- минималистичные схемы;
- interface-first mockups;
- ощущение “инфраструктура для бизнеса”, не “AI magic”.

### Palette suggestion

- Background light: `#FAF8F4` / `#F7F4EF`
- Text: `#151515` / `#202124`
- Graphite: `#111111`
- Deep dark: `#080808`
- Orange accent: `#FF5A1F` or close brand orange
- Subtle orange: `#FFE5D8`
- Border: `rgba(0,0,0,0.08)`
- Dark border: `rgba(255,255,255,0.12)`

### Visual style

- big typography;
- clean grids;
- sharp sections;
- subtle shadows;
- rounded but not childish cards;
- strong UI mockups;
- animated but lightweight gradients;
- no heavy animation libraries.

### Product visuals

Создать CSS/HTML mockups:

1. Hero agent workspace.
2. Agent orchestration diagram.
3. Pipeline builder mock.
4. Dashboard mock.
5. Audit timeline.
6. Connectors grid.
7. Partner workspace / demo tenant mock.

## 10. Технический стек

Use:

- Vite
- React
- TypeScript
- Tailwind CSS
- Static site
- GitHub Pages
- GitHub Actions
- Custom domain: `platform.core-ai.ru`

Do not use:

- Next.js
- backend
- paid UI kit
- external logos without rights
- heavyweight animation dependencies

Forms:

- Prefer mailto CTAs to `team@core-ai.ru`.
- If adding form, it must be frontend-only and include consent checkbox with policy link, but no backend submission is required.

SEO:

Title:

> CoreAI Platform — Second Brain компании поверх 1С, CRM и корпоративных данных

Description:

> Agentic Second Brain и enterprise-ready AI-платформа поверх 1С, CRM, SQL, документов и внутренних систем: агенты, скиллы, пайплайны, A2A-ready orchestration, выбор моделей, audit и on-prem.

Open Graph:

- og:title
- og:description
- og:type = website
- og:url = https://platform.core-ai.ru

## 11. Файловая структура

Create:

```txt
package.json
index.html
vite.config.ts
tailwind.config.js
postcss.config.js
src/main.tsx
src/App.tsx
src/data/content.ts
src/styles/index.css
src/components/Header.tsx
src/components/Hero.tsx
src/components/ProductMock.tsx
src/components/Manifest.tsx
src/components/Problem.tsx
src/components/SecondBrain.tsx
src/components/PlatformPillars.tsx
src/components/AskVerifyAct.tsx
src/components/DemoFlow.tsx
src/components/SkillHub.tsx
src/components/PipelineBuilder.tsx
src/components/A2ASection.tsx
src/components/Connectors.tsx
src/components/DashboardSection.tsx
src/components/ModelProviders.tsx
src/components/EnterpriseControl.tsx
src/components/WhyCoreAI.tsx
src/components/UseCases.tsx
src/components/PartnerSection.tsx
src/components/PilotTimeline.tsx
src/components/Comparison.tsx
src/components/FAQ.tsx
src/components/Footer.tsx
public/CNAME
.github/workflows/deploy.yml
README.md
```

Architecture:

- Put all content arrays in `src/data/content.ts`.
- Keep `App.tsx` as composition of sections.
- Use reusable components.
- Use semantic HTML.
- Add smooth scroll.
- Add mobile nav.
- Ensure good mobile responsiveness.
- Ensure TypeScript build passes.

## 12. GitHub Pages deployment

Custom domain:

- `public/CNAME` should contain:

```txt
platform.core-ai.ru
```

Vite config:

- base should be `/`.

GitHub Actions workflow:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

README must include manual steps:

1. GitHub repo Settings → Pages → Source = GitHub Actions.
2. Set custom domain: `platform.core-ai.ru`.
3. DNS provider: create CNAME record `platform` → `<github-owner>.github.io`.
4. Wait for certificate.
5. Enable Enforce HTTPS.

## 13. Acceptance criteria

1. Site builds with `npm run build` without errors.
2. Site looks premium, enterprise-ready, not “AI-hype landing”.
3. Hero clearly positions CoreAI as Second Brain / agentic layer above 1С, CRM, SQL and docs.
4. Manifest phrase is visible:
   “Хранить — задача CRM/ERP. Думать, связывать и действовать — задача CoreAI.”
5. Site explains that CoreAI does not replace CRM/ERP/1С.
6. Site includes Agent Hub, Skill Hub, Pipeline Builder, A2A-ready, Context Layer, Enterprise Control Plane.
7. Site includes demo flow with several systems, several agents, pipeline, dashboard and audit.
8. Site includes partner section for 1С/CRM-integrators and consultancies.
9. Site includes enterprise security/control section.
10. Site includes FAQ with honest Early Access framing.
11. No OpenCode mention.
12. No claim of official 1C partnership.
13. No third-party logos without rights.
14. Includes email `team@core-ai.ru`.
15. Includes policy link `https://www.core-ai.ru/policy/`.
16. GitHub Pages workflow exists.
17. `public/CNAME` exists with `platform.core-ai.ru`.
18. README explains DNS and GitHub Pages manual steps.
19. Responsive mobile layout is clean.
20. Codebase is clean and maintainable.

## 14. Final answer expected from Opus

After implementation, report:

- What was created.
- Files changed.
- Build status.
- Deployment workflow status.
- Manual domain/DNS steps still required.
- Final expected URL: `https://platform.core-ai.ru`.
- Any assumptions or limitations.

Do not produce vague marketing copy only. Produce actual codebase and deployment setup.
