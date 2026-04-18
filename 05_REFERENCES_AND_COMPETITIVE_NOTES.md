# References and competitive notes for Opus

Этот файл нужен не для копирования чужого текста, а чтобы Opus понимал категорию, паттерны рынка и референсы.

## 1. Direct / close competitors in Russia

### Ladcraft
URL: https://ladcraft.ru/

Why study:
- главный ориентир по российской категории “автономные агенты для бизнеса”;
- активно продаёт skills, память, автономных агентов, интеграции и ROI-пилоты;
- важно понять, как они упаковывают enterprise AI не как чат, а как операционную систему агентов.

What to pay attention to:
- hero language;
- list of integrations;
- claims around autonomous agents, skills, self-programming, A2A;
- deployment/security language;
- pilot/ROI packaging;
- role/use-case cards.

How CoreAI should differ:
- CoreAI = Second Brain + agentic layer over existing systems;
- не “AI-сотрудник вместо человека”, а “слой мышления, координации и действий поверх CRM/ERP/1С/SQL/docs”.

### Just AI Agent Platform
URL: https://just-ai.com/agent-platform

Why study:
- enterprise agent platform reference;
- no-code/pro-code, on-prem, RAG, channels, integrations, governance.

What to pay attention to:
- how they describe platform components;
- how they combine builder + integrations + enterprise deployment;
- how they talk to CIO/enterprise buyers.

CoreAI differentiation:
- more direct “Second Brain company” and “above CRM/ERP” positioning;
- stronger 1С/SQL/CRM/data-action story;
- partner-first message for integrators.

### MWS AI Agents Platform
URL: https://mts.ai/product/ai-agents-platform/

Why study:
- heavy enterprise reference;
- lifecycle management, AgentOps/LLMOps/MLOps, observability, role model, security.

What to pay attention to:
- enterprise-ready claims;
- lifecycle management language;
- observability/AgentOps packaging;
- vendor-agnostic and ready assistants.

CoreAI differentiation:
- less heavy-enterprise “platform brochure”, more sharp category:
  “CRM/ERP store. CoreAI thinks, connects and acts.”

## 2. Native AI inside CRM/ERP — threat and positioning

### amoCRM AI Agent
URL: https://www.amocrm.ru/ai-agent/

Why study:
- shows what CRM-native AI will absorb: answers, qualification, tasks, field updates, sales automations.

What to pay attention to:
- simple sales scenarios;
- how they show AI directly inside CRM;
- customer-facing agent language.

CoreAI positioning:
- do not compete as “AI bot inside amoCRM”; 
- say: CRM-native AI is limited to one system; CoreAI connects CRM + 1С + SQL + docs + tasks + agent workflows.

### Bitrix24 CoPilot
URL: https://www.bitrix24.com/tools/copilot-ai-powered-tools-for-business.php
URL: https://helpdesk.bitrix24.com/section/157576/

Why study:
- another example of AI becoming native inside business apps;
- shows that basic summarization, task creation, CRM field filling etc. are becoming table stakes.

CoreAI positioning:
- native AI features are useful but fragmented;
- CoreAI is cross-system Second Brain and enterprise control plane.

## 3. Global category references

### Anthropic MCP
URL: https://www.anthropic.com/news/model-context-protocol
URL: https://modelcontextprotocol.io/docs/getting-started/intro
URL: https://modelcontextprotocol.io/specification/2025-11-25

Why study:
- MCP is the canonical reference for connecting AI apps/agents to external systems, data and tools;
- supports CoreAI narrative around connectors, tool layer, context access and future MCP gateway.

What to pay attention to:
- “secure two-way connections between data sources and AI-powered tools”;
- “USB-C for AI applications” framing;
- standardized integration layer.

How to use on site:
- mention MCP as roadmap/architecture direction, not as fully finished if not implemented.

### Google A2A / Agent2Agent Protocol
URL: https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/
URL: https://github.com/a2aproject/A2A
URL: https://codelabs.developers.google.com/intro-a2a-purchasing-concierge

Why study:
- A2A is a global reference for agent-to-agent collaboration;
- supports CoreAI “A2A-ready orchestration” language.

What to pay attention to:
- agents communicate, securely exchange information and coordinate actions;
- A2A complements MCP: MCP connects agents with tools/data, A2A connects agents with agents.

How to use on site:
- use “A2A-ready” rather than “fully A2A compliant” unless compliance is implemented.

### Microsoft AI agent governance / Agent 365
URL: https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/governance-security-across-organization
URL: https://www.microsoft.com/en-us/microsoft-agent-365

Why study:
- global benchmark for enterprise agent control plane;
- Microsoft explicitly talks about agents as organizational risk because they access data, take actions and use delegated authority.

What to pay attention to:
- “single control plane for AI agents”;
- every agent must be observable, governed and secure;
- leaders need to identify agents, owners, access, behavior and stop unsafe agents.

How to use on site:
- “Enterprise Control Plane” section;
- roles, access, logs, audit, source tracking, provider control.

### Salesforce AgentExchange
URL: https://agentexchange.salesforce.com/
URL: https://www.salesforce.com/agentforce/agentexchange/
URL: https://trailhead.salesforce.com/content/learn/modules/agentexchange-quick-look/experience-the-new-agentexchange

Why study:
- reference for marketplace of agents/apps/tools/skills;
- helpful for Skill Hub / future marketplace / partner ecosystem.

What to pay attention to:
- marketplace language;
- pre-built agents and skills;
- security review/compliance as trust factor;
- partner ecosystem packaging.

How to use on site:
- not necessarily “marketplace” in first hero;
- position Skill Hub and partner templates as future scalable system.

## 4. AgentOps / Observability references

### MLflow LLMOps
URL: https://mlflow.org/llmops

Why study:
- good reference for tracing, evaluation, prompt management, monitoring and production operations of LLM apps.

### AgentOps.ai
URL: https://www.agentops.ai/

Why study:
- shows UI/positioning for tracing, debugging and deploying AI agents.

### AgentOps paper
URL: https://arxiv.org/html/2411.05285v2

Why study:
- taxonomy of artifacts/data that should be traced through agent lifecycle;
- supports “AgentOps traces” section.

How CoreAI should use this:
- include audit/trace section in product mockups;
- show tool calls, sources, agents, cost/latency placeholders and final outcome.

## 5. 1С / OData references

### 1C REST interface
URL: https://1c-dn.com/1c_enterprise/rest_interface/

Why study:
- official reference for REST interface in 1C;
- confirms that reading/writing via REST interface follows access rights and handler events.

### 1C integration methods / OData
URL: https://1c-dn.com/blog/methods-of-integration-with-1c-enterprise-applications/

Why study:
- explains REST/OData support and integration methods.

### 1C OData publishing
URL: https://kb.1ci.com/1C_Enterprise_Platform/FAQ/Development/Integration/How_to_use_the_oData_protocol_when_publishing_an_infobase_to_web_server/

Why study:
- useful for technical notes around publishing infobase via OData.

CoreAI positioning:
- say “1С read-only through OData” for current MVP;
- for writes use “controlled actions” with preview/approval/audit.

## 6. GitHub Pages / Vite deployment references

### Vite static deploy
URL: https://vite.dev/guide/static-deploy

Why study:
- official Vite deployment instructions;
- GitHub Pages source should be GitHub Actions because Vite requires build step.

### GitHub Pages custom domain
URL: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
URL: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages

Why study:
- official reference for custom domain and CNAME configuration.

Implementation note:
- For subdomain `platform.core-ai.ru`, create DNS CNAME: `platform` → `<github-owner>.github.io`.
- In GitHub repo Settings → Pages, set custom domain.
- If using custom GitHub Actions workflow, do not rely only on CNAME file; configure the custom domain in Settings → Pages.

## 7. Current CoreAI / DeepDesk reference

### CoreAI main site
URL: https://www.core-ai.ru
URL policy: https://www.core-ai.ru/policy/

Why study:
- brand context;
- existing positioning around AI agents/platforms;
- footer/legal links;
- tone and style reference.

### DeepDesk deck
File: `Deepdesk_eng_23.11.25.pdf`

Why study:
- strong existing framing:
  - “Ask · Verify · Act · in a single window”;
  - AI-hub for company knowledge and operations;
  - verified answers with sources;
  - actions in CRM/ERP;
  - corporate security: on-prem/VPC, RBAC, action auditing;
  - ROI through routine time savings.

How to use:
- translate the DeepDesk idea from “knowledge/operations hub” into platform-level story: “Second Brain company over CRM/ERP/1С/SQL/docs”.

## 8. What not to copy

Do not copy:

- competitor visuals;
- red/black Ladcraft identity;
- exact feature wording from competitors;
- logos without rights;
- unverifiable customer claims.

Use references only to understand market expectations and category language.
