export const brand = {
  name: 'CoreAI Platform',
  domain: 'platform.core-ai.ru',
  email: 'team@core-ai.ru',
  mainSite: 'https://www.core-ai.ru',
  policy: 'https://www.core-ai.ru/policy/',
};

export const nav: { id: string; label: string }[] = [
  { id: 'platform', label: 'CoreAI решение' },
  { id: 'skills', label: 'Скиллы' },
  { id: 'pipelines', label: 'Пайплайны' },
  { id: 'connectors', label: 'Коннекторы' },
  // { id: 'enterprise', label: 'Enterprise' },
  { id: 'partners', label: 'Партнёрам' },
  { id: 'pilot', label: 'Пилот' },
];

export const hero = {
  eyebrow: 'Second Brain компании',
  headline: 'Second Brain компании поверх 1С, CRM, SQL и документов',
  subheadline:
    'Не внедряйте ещё одну систему учёта. Подключите CoreAI как агентский слой поверх 1С, CRM, SQL, документов и внутренних сервисов — с пайплайнами, скиллами, A2A-агентами, выбором моделей и enterprise-контролем.',
  manifest: ['Хранить — задача CRM/ERP.', 'Думать, связывать и действовать — задача агентов CoreAI.'],
  ctaPrimary: 'Запросить пилот',
  ctaSecondary: 'Стать партнёром',
  badges: [
    'Agent Hub',
    'Skill Hub',
    'Pipeline Builder',
    'A2A-ready orchestration',
    '1С Управление Предприятием',
    '1С Бухгалтерия',
    '1С УТ',
    'Postgres SQL',
    'CRM connectors',
    'Multi-provider LLM',
    'On-prem / Private Cloud',
    'Audit & Approval',
  ],
};

export const productMock = {
  goal:
    'Сравни план-факт из 1С и SQL, проверь сделки без next step в CRM, найди причины отклонений и собери дашборд для руководителя.',
  agents: [
    { name: 'Coordinator Agent', role: 'Планирует и распределяет' },
    { name: 'Data Agent', role: '1С · SQL · CRM' },
    { name: 'Finance Analyst', role: 'План-факт, маржа' },
    { name: 'Sales Agent', role: 'Воронка, next step' },
    { name: 'Report Agent', role: 'График и дашборд' },
  ],
  pipeline: [
    'Retrieve from 1C',
    'Query SQL',
    'Analyze CRM',
    'Build chart',
    'Verify sources',
    'Save to dashboard',
    'Notify owner',
    'Log trace',
  ],
  context: [
    '1С:ERP · OData',
    'SQL: finance_plan',
    'CRM pipeline',
    'Регламент бюджетирования.pdf',
    'Dashboard: CEO View',
  ],
  audit: 'Sources verified · Tool calls logged · Human approval for actions',
};

export const manifest = {
  title: 'Не заменяем CRM и ERP. Возвращаем им правильную роль.',
  copy: 'CRM, ERP, 1С, SQL и DWH должны оставаться надёжными системами хранения фактов, клиентов, сделок, заказов, остатков, документов и транзакций. Но бизнесу нужен слой выше: тот, который понимает цель, собирает контекст, объясняет отклонения, координирует агентов и запускает действия. CoreAI Platform становится этим слоем.',
  cards: [
    {
      title: 'Systems of Record',
      copy: '1С, CRM, ERP, SQL, DWH и документы хранят факты, транзакции и историю.',
    },
    {
      title: 'Systems of Intelligence',
      copy: 'LLM, RAG, context management и reasoning помогают понимать данные, искать связи и объяснять выводы.',
    },
    {
      title: 'Systems of Action',
      copy: 'Skills, tools, pipelines, A2A orchestration, approval и audit превращают выводы в управляемые действия.',
    },
  ],
  punchline: ['Хранить — задача CRM/ERP.', 'Думать, связывать и действовать — задача агентов CoreAI.'],
};

export const problem = {
  title: 'Ваша компания уже накопила знания. Но они заперты в системах.',
  items: [
    'Данные живут в 1С, CRM, SQL, документах, почте, задачах и чатах.',
    'Руководители ждут отчёты, потому что данные собираются вручную.',
    'Обычные AI-чаты не знают ваших прав доступа, источников и бизнес-логики.',
    'Встроенный AI внутри одной CRM/ERP закрывает только часть сценариев.',
    'Интеграции каждый раз пишутся с нуля и плохо масштабируются.',
    'Без ролей, логов, approval и traces AI-пилоты не проходят enterprise-контроль.',
  ],
};

export const secondBrain = {
  title: 'Second Brain — это не база знаний. Это рабочий слой компании.',
  copy: 'Обычная база знаний отвечает на вопросы. CoreAI понимает задачу, находит контекст в корпоративных системах, распределяет работу между агентами, вызывает инструменты, строит графики, собирает дашборды, готовит документы и логирует каждое действие.',
  formula: 'Memory + Reasoning + Agents + Pipelines + Actions + Control',
  cards: [
    { title: 'Memory', copy: 'Контекст из 1С, CRM, SQL, документов, задач, почты и чатов.' },
    { title: 'Reasoning', copy: 'Анализ, планирование, поиск связей, объяснение отклонений.' },
    { title: 'Agents', copy: 'Координатор, data, finance, sales, report и поддержка.' },
    { title: 'Pipelines', copy: 'Повторяемые workflows: trigger → context → agent → tool → action.' },
    { title: 'Actions', copy: 'Графики, дашборды, отчёты, задачи, документы и controlled actions.' },
    { title: 'Control', copy: 'Роли, audit, traces, approval, выбор модели, on-prem.' },
  ],
};

export const pillars = {
  title: 'Платформа для агентских процессов, а не изолированных чатов',
  items: [
    {
      title: 'Agent Hub',
      copy: 'Единый интерфейс, где сотрудники ставят цели, агенты строят план, используют инструменты и возвращают проверяемый результат.',
    },
    {
      title: 'Skill Hub',
      copy: 'Готовые навыки для 1С, продаж, финансов, поддержки, документов, HR и управленческой аналитики.',
    },
    {
      title: 'Pipeline Builder',
      copy: 'Собирайте повторяемые agentic workflows: запрос → источники → агент → tool → проверка → действие → уведомление → дашборд.',
    },
    {
      title: 'A2A-ready orchestration',
      copy: 'Разделяйте сложные задачи между агентами: координатор, аналитик, data-agent, sales-agent, report-agent, support-agent.',
    },
    {
      title: 'Context Layer',
      copy: 'Подключайте 1С, CRM, SQL, документы, почту, задачи и базы знаний. Агент отвечает с источниками, а не из воздуха.',
    },
    {
      title: 'Enterprise Control Plane',
      copy: 'Роли, права, логи, audit trail, provider routing, on-prem/private cloud, approval и trace каждого действия.',
    },
  ],
};

export const askVerifyAct = {
  title: 'От запроса к проверенному действию',
  tagline: 'Ask · Verify · Act · in a single window',
  steps: [
    { tag: 'Ask', title: 'Сотрудник формулирует цель', copy: 'Обычным языком, без шаблонов и ручной разметки.' },
    { tag: 'Understand', title: 'CoreAI собирает контекст', copy: 'Из 1С, SQL, CRM, документов и базы знаний.' },
    { tag: 'Orchestrate', title: 'Платформа распределяет работу', copy: 'Между агентами и tools — и держит общий план.' },
    { tag: 'Verify', title: 'Ответ с источниками и trace', copy: 'Расчёты, цитаты и tool calls видны проверяющему.' },
    { tag: 'Act', title: 'Готовое действие под approval', copy: 'Отчёт, график, уведомление, задача или write-action.' },
  ],
};

export const demoFlow = {
  title: 'Одна бизнес-цель. Несколько систем. Команда агентов. Один trace.',
  goal: 'Сравни план-факт из 1С и SQL, проверь сделки без next step в CRM, найди причины отклонений и собери дашборд для руководителя.',
  results: [
    'Выручка: −7,4% к плану',
    'Расходы: +4,1% к плану',
    'Сделки без next step: 18',
    'Риск по марже: высокий',
    'График добавлен в CEO Dashboard',
  ],
};

export type Skill = { title: string; copy: string; tags: string[] };

export const skills: { title: string; items: Skill[] } = {
  title: 'Скиллы для процессов, где AI даёт эффект быстро',
  items: [
    {
      title: 'План-факт по 1С и SQL',
      copy: 'Собирает данные, находит отклонения и объясняет причины.',
      tags: ['1С', 'SQL', 'Dashboard'],
    },
    {
      title: 'Дашборд руководителя',
      copy: 'Создаёт графики по запросу и сохраняет их на управленческий дашборд.',
      tags: ['Charts', 'Dashboard'],
    },
    {
      title: 'Финансовый аналитик',
      copy: 'Готовит пояснения по выручке, расходам, маржинальности и дебиторке.',
      tags: ['1С', 'SQL', 'Reports'],
    },
    {
      title: 'Контроль продаж',
      copy: 'Находит сделки без next step, просрочки и слабые места в воронке.',
      tags: ['CRM', 'Approval'],
    },
    {
      title: 'Корпоративная база знаний',
      copy: 'Отвечает по документам, регламентам и инструкциям с источниками.',
      tags: ['Docs', 'RAG'],
    },
    {
      title: 'НСИ и номенклатура',
      copy: 'Ищет дубли, аномалии и несоответствия в справочниках.',
      tags: ['1С', 'SQL'],
    },
    {
      title: 'Поддержка и тикеты',
      copy: 'Анализирует обращения, группирует причины и предлагает ответы.',
      tags: ['Tickets', 'Docs'],
    },
    {
      title: 'Подготовка отчётов',
      copy: 'Собирает отчёт, графики и краткие выводы для руководителя.',
      tags: ['Reports', 'Charts'],
    },
    {
      title: 'Юридические документы',
      copy: 'Находит условия в договорах, цитирует пункты и готовит черновики.',
      tags: ['Docs', 'Drafts'],
    },
    {
      title: 'Операционный контроль',
      copy: 'Собирает статусы из систем, выявляет узкие места и предлагает поручения.',
      tags: ['Ops', 'Tasks'],
    },
  ],
};

export const pipelineBuilder = {
  title: 'Пайплайны вместо ручной рутины',
  copy: 'Повторяемые процессы не должны жить в инструкциях, Excel и переписках. В CoreAI их можно собрать как agentic pipeline: источники, агенты, tools, проверки, результат, уведомления и audit.',
  steps: ['Trigger', 'Context', 'Plan', 'Agents', 'Tools', 'Verify', 'Action', 'Audit'],
  examples: [
    'Еженедельный управленческий отчёт',
    'Контроль просроченных сделок',
    'План-факт и отклонения',
    'Подготовка документов',
    'Анализ обращений поддержки',
  ],
};

export const a2a = {
  title: 'A2A-ready: когда задачу решает не один бот, а команда агентов',
  copy: 'Сложные бизнес-задачи редко решаются одним запросом. CoreAI проектируется для multi-agent сценариев: координатор разбивает цель на подзадачи, специализированные агенты работают с данными, продажами, финансами, документами и отчётами, а общий trace сохраняет весь путь к результату.',
  agents: [
    { name: 'Coordinator Agent', role: 'Планирует, разбивает цель, держит контекст' },
    { name: 'Data Agent', role: 'Запросы к 1С, SQL и API' },
    { name: 'Finance Agent', role: 'Расчёты, план-факт, маржа' },
    { name: 'Sales Agent', role: 'Воронка, next step, риски' },
    { name: 'Report Agent', role: 'Графики, дашборды, выводы' },
    { name: 'Support Agent', role: 'Обращения, ответы, эскалация' },
  ],
  note: 'Полная совместимость с открытыми A2A-стандартами развивается по мере зрелости протоколов и требований enterprise-пилотов.',
};

export const connectors = {
  title: 'Коннекторы к системам, которые уже живут в компании',
  copy: 'CoreAI не требует переносить данные в новую систему учёта. Платформа подключается к существующим источникам и использует их как контекст, инструменты и точки действия.',
  groups: [
    { label: 'Учёт и склад', items: ['1С через OData', 'МойСклад', 'SQL', 'CSV/XLSX'] },
    { label: 'CRM', items: ['amoCRM', 'Bitrix24'] },
    { label: 'Документы и хранилища', items: ['Google Drive', 'Яндекс.Диск', 'Email'] },
    { label: 'Задачи и поддержка', items: ['Яндекс.Трекер', 'OKDesk', 'YouGile'] },
    { label: 'Каналы и API', items: ['Telegram', 'HTTP API', 'MCP'] },
  ],
  note: 'Набор коннекторов зависит от сценария, прав доступа и контура клиента. 1С read-only и SQL — фокус первого релиза; дополнительные интеграции подключаются в рамках pilot/onboarding.',
};

export const dashboardSection = {
  title: 'Из запроса — в управленческий дашборд',
  copy: 'CoreAI не только отвечает текстом. Агент может построить график, объяснить данные, сохранить результат в дашборд и обновлять его как часть пайплайна.',
  cards: [
    { title: 'Revenue vs Plan', metric: '−7,4%', tone: 'down', detail: 'Q к плану, факт по 1С' },
    { title: 'Margin Risk', metric: 'High', tone: 'warn', detail: '4 направления под риском' },
    { title: 'Sales Follow-up Gaps', metric: '18', tone: 'down', detail: 'Сделок без next step' },
    { title: 'Expenses Deviation', metric: '+4,1%', tone: 'down', detail: 'Превышение по OPEX' },
    { title: 'Operational Alerts', metric: '6', tone: 'warn', detail: 'Узкие места в процессах' },
  ],
};

export const modelProviders = {
  title: 'Выбор моделей под задачу, контур и стоимость',
  copy: 'CoreAI проектируется как multi-provider слой: внешние модели, российские LLM, локальные модели и custom fine-tuned models. Для каждого сценария можно выбирать баланс качества, скорости, стоимости и требований безопасности.',
  providers: ['Claude', 'OpenAI', 'GigaChat', 'YandexGPT', 'Local models', 'Custom fine-tuned models'],
  note: 'Конкретный набор провайдеров зависит от требований клиента и deployment-модели.',
};

export const enterprise = {
  title: 'Enterprise-контроль для агентских систем',
  copy: 'Чем больше возможностей у агентов, тем важнее контроль. CoreAI строится как control plane для enterprise-агентов: видно, кто что запустил, какие источники использовал, какие tools вызвал, какой результат получил и какие действия были подтверждены.',
  features: [
    'Workspaces',
    'User/Admin roles',
    'RBAC policies',
    'Audit log',
    'Source tracking',
    'Tool call traces',
    'Provider selection',
    'On-prem / Private Cloud',
    'Approval workflows',
    'Secrets management',
    'Cost control',
    'Evals & regression testing',
    'Skill versioning',
    'Data masking / DLP',
    'Dev / Test / Prod',
  ],
};

export const whyCoreAI = {
  title: 'Разработано не ради AI-хайпа, а для рабочих бизнес-процессов',
  copy: 'Команда CoreAI имеет глубокий опыт в LLM, RAG, agentic systems и создании фундаментальных AI-технологий. Мы проектируем платформу не как демонстрацию возможностей модели, а как управляемый слой для реальных процессов, данных и ответственности внутри компании.',
  bullets: [
    'Опыт выходцев из GigaChat и сильных российских AI-команд',
    'Экспертиза в LLM и applied R&D',
    'Продуктовый слой + enterprise delivery',
    'Фокус на измеримом эффекте',
    'Не только чат: контекст, действия, логи и интеграции',
  ],
};

export const useCases = [
  {
    role: 'Предприниматель / CEO',
    pain: 'Нет единой картины бизнеса.',
    coreai: 'Собирает данные из 1С/SQL/CRM, строит дашборды и объясняет отклонения.',
    effect: 'Быстрее управленческие решения.',
  },
  {
    role: 'Финансовый директор',
    pain: 'Отчёты собираются вручную.',
    coreai: 'Делает план-факт, анализирует расходы, маржинальность и дебиторку.',
    effect: 'Меньше ручной аналитики.',
  },
  {
    role: 'Руководитель продаж',
    pain: 'Сделки теряются, менеджеры не делают next step.',
    coreai: 'Анализирует воронку, просрочки, коммуникации и риски.',
    effect: 'Выше контроль и конверсия.',
  },
  {
    role: 'Операционный директор',
    pain: 'Статусы разбросаны по системам.',
    coreai: 'Собирает сводку, находит узкие места и готовит поручения.',
    effect: 'Прозрачнее операционка.',
  },
  {
    role: 'CIO / CISO',
    pain: 'AI-пилоты небезопасны и неуправляемы.',
    coreai: 'Роли, логи, audit, private deployment, provider control.',
    effect: 'Управляемое внедрение AI.',
  },
  {
    role: '1С / CRM-интегратор',
    pain: 'Клиенты спрашивают AI, но строить свою платформу долго.',
    coreai: 'Даёт AI-слой, скиллы, коннекторы и методику пилотов.',
    effect: 'Новая AI-практика для клиентской базы.',
  },
];

export const partner = {
  title: 'Для интеграторов: добавьте агентский слой к вашим CRM/ERP-проектам',
  subheadline:
    'Усильте вашу экспертизу и предложите клиентам по-настоящему надёжные и прогрессивные AI-решения без разработки платформы с нуля.',
  copy: 'CRM/ERP-интеграторы уже знают процессы, данные и ограничения клиента. CoreAI добавляет то, чего не хватает существующим системам: агентский интерфейс, скиллы, пайплайны, A2A, выбор моделей, логи, approval и on-prem/private cloud deployment.',
  cards: [
    'Demo workspace для партнёров',
    'Skill templates',
    '1С / SQL пилоты',
    'Совместный presale',
    'Co-brand / white-label options',
    'Методика ROI',
    'Поддержка внедрения',
    'Roadmap под отраслевые сценарии',
  ],
  cta: 'Обсудить партнёрство',
};

export const pilot = {
  title: 'Пилот за 2–4 недели: один процесс, один KPI, понятный результат',
  weeks: [
    { tag: 'Week 1', title: 'Скоупинг', copy: 'Выбор процесса, данных и KPI.' },
    { tag: 'Week 2', title: 'Подключение', copy: 'Интеграция 1С/SQL, роли и базовые скиллы.' },
    { tag: 'Week 3', title: 'Тестирование', copy: 'Реальные задачи, графики, дашборды, feedback.' },
    { tag: 'Week 4', title: 'Эффект', copy: 'Измерение KPI, roadmap масштабирования, решение по production.' },
  ],
  kpis: [
    'время подготовки отчёта',
    'количество ручных операций',
    'скорость ответа руководителю',
    'число найденных отклонений',
    'ошибки в данных',
    'SLA по внутренним запросам',
    'конверсия / выручка для sales-сценариев',
  ],
};

export const comparison = {
  title: 'CoreAI vs другие подходы',
  columns: ['Обычный AI-чат', 'AI внутри одной CRM/ERP', 'Узкий AI-виджет', 'CoreAI Platform'],
  rows: [
    { label: 'Кросс-системный контекст', values: [false, false, false, true] },
    { label: 'Second Brain компании', values: [false, false, false, true] },
    { label: 'Agent Hub', values: [false, false, false, true] },
    { label: 'Skill Hub', values: [false, true, false, true] },
    { label: 'Pipeline Builder', values: [false, false, false, true] },
    { label: 'A2A-ready orchestration', values: [false, false, false, true] },
    { label: '1С + SQL + CRM + документы', values: [false, false, false, true] },
    { label: 'Графики и дашборды', values: [false, true, true, true] },
    { label: 'Выбор LLM-провайдера', values: [false, false, false, true] },
    { label: 'AgentOps traces', values: [false, false, false, true] },
    { label: 'Approval & audit', values: [false, true, false, true] },
    { label: 'On-prem / Private Cloud', values: [false, false, false, true] },
    { label: 'Партнёрская кастомизация', values: [false, false, false, true] },
  ],
};

export const faq = [
  {
    q: 'Вы заменяете CRM, ERP или 1С?',
    a: 'Нет. Мы считаем, что CRM, ERP и 1С должны оставаться системами хранения и учёта. CoreAI работает поверх них как агентский слой: ищет данные, объясняет выводы, строит пайплайны и помогает запускать действия.',
  },
  {
    q: 'Почему Second Brain, а не просто база знаний?',
    a: 'База знаний отвечает на вопросы. CoreAI соединяет память компании с агентами, инструментами, пайплайнами, моделями и enterprise-контролем. Это не только поиск, а путь от запроса к проверенному действию.',
  },
  {
    q: 'Что значит A2A-ready?',
    a: 'Платформа проектируется для сценариев, где несколько агентов могут разделять задачу, обмениваться результатами и работать через общий trace. Полная совместимость с открытыми протоколами агентского взаимодействия развивается по мере зрелости стандартов и требований enterprise-пилотов.',
  },
  {
    q: 'Что значит Pipeline Builder?',
    a: 'Это способ собирать повторяемые агентские процессы из шагов: источники, агент, tool, проверка, действие, уведомление, дашборд. В Early Access доступны базовые pipeline-сценарии и шаблоны под пилоты.',
  },
  {
    q: 'Какие коннекторы доступны?',
    a: 'В первом релизе фокус на 1С read-only через OData и SQL. CRM-коннекторы и дополнительные интеграции подключаются в рамках пилота в зависимости от контура клиента.',
  },
  {
    q: 'Может ли агент записывать данные в 1С?',
    a: 'В первом релизе 1С работает в read-only режиме. Запись проектируется как controlled action: preview, подтверждение пользователем, выполнение и audit log.',
  },
  {
    q: 'Можно ли развернуть в закрытом контуре?',
    a: 'Да. CoreAI Platform проектируется для private cloud / on-prem deployment и enterprise-пилотов в защищённом контуре.',
  },
  {
    q: 'Какие модели поддерживаются?',
    a: 'Архитектура проектируется как multi-provider: внешние модели, российские LLM и локальные модели. Конкретный набор зависит от требований клиента и deployment-модели.',
  },
  {
    q: 'Это продукт или консалтинг?',
    a: 'Это продуктовая платформа с внедренческой методикой. Мы можем запускать пилоты напрямую или вместе с интеграторами и консалтингами.',
  },
  {
    q: 'Что нужно для пилота?',
    a: 'Один процесс, владелец процесса, доступ к данным, KPI и безопасный контур подключения.',
  },
];

export const finalCta = {
  title: 'Превратите корпоративные данные в Second Brain компании',
  copy: 'Подключите CoreAI как агентский слой поверх 1С, CRM, SQL, документов и внутренних сервисов — и начните с пилота на одном процессе.',
};

export const footerDisclaimer =
  'CoreAI Platform доступна в Early Access. Набор коннекторов, режим deployment и enterprise-функции зависят от сценария пилота и контура клиента.';

export const mailto = {
  pilot: `mailto:${brand.email}?subject=${encodeURIComponent('Запрос на пилот CoreAI Platform')}`,
  partner: `mailto:${brand.email}?subject=${encodeURIComponent('Партнёрство — CoreAI Platform')}`,
  general: `mailto:${brand.email}`,
};
