import { Question } from "../types";

/**
 * Domain: Self Service & Automation (17% of the exam)
 * Source: SNAF Module 5 (Configure Self Service) — Knowledge Management,
 * Service Catalog and Workflow Studio / flow automation.
 */
export const selfServiceAutomationQuestions: Question[] = [
  // ---------------------------------------------------------------- Portals
  {
    id: 1301,
    domain: "Self Service & Automation",
    type: "multiple",
    question:
      "Which of the following are baseline Self-Service portals in the platform? (Choose 4)",
    options: [
      "Employee Center (/esc)",
      "Service Portal (/sp)",
      "Knowledge Portal (/kb)",
      "Security Center",
      "CMDB Workspace",
    ],
    correct: [0, 1, 2, 3],
    explanation:
      "Baseline self-service portals include Employee Center (/esc), Service Portal (/sp), Knowledge Portal (/kb) and Security Center. Now Mobile is also a self-service channel, and Virtual Agent / Now Assist are increasingly used as entry points. CMDB Workspace is not a self-service portal.",
    explanation_pt:
      "Os portais self-service baseline incluem Employee Center (/esc), Service Portal (/sp), Knowledge Portal (/kb) e Security Center. O Now Mobile também é um canal self-service, e Virtual Agent / Now Assist são cada vez mais usados como pontos de entrada. O CMDB Workspace não é um portal self-service.",
    source: "SNAF Module 5 · 5.1 Overview of baseline Self-Service options",
  },
  {
    id: 1302,
    domain: "Self Service & Automation",
    type: "single",
    question:
      "Which tool is used to CUSTOMIZE baseline portals such as Employee Center and Service Portal?",
    options: [
      "UI Builder",
      "Service Portal Designer",
      "Theme Builder",
      "Form Builder",
    ],
    correct: 1,
    explanation:
      "Service Portal Designer is used to customize baseline portals (Employee Center, Service Portal, etc.). UI Builder is used to build pages for CSM configurable workspaces, App Engine Studio generated workspaces/portals, or custom web experiences.",
    explanation_pt:
      "O Service Portal Designer é usado para customizar portais baseline (Employee Center, Service Portal, etc.). O UI Builder é usado para construir páginas de workspaces configuráveis do CSM, workspaces/portais gerados pelo App Engine Studio ou experiências web customizadas.",
    source: "SNAF Module 5 · 5.1 Overview of baseline Self-Service options",
  },

  // ------------------------------------------------------ Knowledge Management
  {
    id: 1303,
    domain: "Self Service & Automation",
    type: "single",
    question:
      "How many knowledge bases can a single knowledge article be associated with?",
    options: [
      "Only one",
      "Up to three",
      "Unlimited, as long as the categories match",
      "One per language",
    ],
    correct: 0,
    explanation:
      "An article can only be associated with ONE knowledge base. You can change the knowledge base, but only if the selected article template is available in the target knowledge base.",
    explanation_pt:
      "Um artigo só pode estar associado a UMA knowledge base. É possível trocar a knowledge base, mas apenas se o template do artigo estiver disponível na knowledge base de destino.",
    source: "SNAF Module 5 · 5.1 Knowledge Base architecture",
  },
  {
    id: 1304,
    domain: "Self Service & Automation",
    type: "single",
    question:
      "At which level is User Criteria applied for Knowledge Management, and what happens if a knowledge base has NO user criteria on Can Read?",
    options: [
      "At the article level; the article is hidden from everyone",
      "At the Knowledge Base level; without user criteria on Can Read the knowledge base becomes open to the public",
      "At the category level; access falls back to the itil role",
      "At the portal level; only admins can read",
    ],
    correct: 1,
    explanation:
      "User Criteria is applied at the Knowledge Base level. If a knowledge base has no user criteria selected, its articles are available to all users — if there is no user criteria on the Can Read related list the knowledge base becomes open to the public. Administrators can use the property glide.knowman.block_access_with_no_user_criteria to restrict access to logged-in users only.",
    explanation_pt:
      "User Criteria é aplicada no nível da Knowledge Base. Se uma knowledge base não tiver user criteria selecionada, seus artigos ficam disponíveis para todos os usuários — sem user criteria na related list Can Read, a knowledge base fica aberta ao público. Administradores podem usar a propriedade glide.knowman.block_access_with_no_user_criteria para limitar o acesso apenas a usuários autenticados.",
    source: "SNAF Module 5 · 5.1 Knowledge security and visibility: User Criteria",
  },
  {
    id: 1305,
    domain: "Self Service & Automation",
    type: "multiple",
    question:
      "Which User Criteria outcomes are available for a knowledge base? (Choose 4)",
    options: ["canRead", "cantRead", "canContribute", "cantContribute", "canApprove"],
    correct: [0, 1, 2, 3],
    explanation:
      "Knowledge base user criteria outcomes are: canRead (can read all KB articles), cantRead (cannot read, create or modify articles), canContribute (can read, create and modify articles) and cantContribute (cannot create or modify articles). Cannot Read / Cannot Contribute are added by configuring the related lists on the form.",
    explanation_pt:
      "Os resultados de user criteria de uma knowledge base são: canRead (pode ler todos os artigos), cantRead (não pode ler, criar ou modificar), canContribute (pode ler, criar e modificar) e cantContribute (não pode criar ou modificar). Cannot Read / Cannot Contribute são adicionados configurando as related lists no formulário.",
    source: "SNAF Module 5 · 5.1 Knowledge security and visibility: User Criteria",
  },
  {
    id: 1306,
    domain: "Self Service & Automation",
    type: "single",
    question:
      "When creating a User Criteria record, what is the effect of the 'Match All' check box?",
    options: [
      "Selected: the user must match ALL populated criteria fields; cleared (default): meeting one or more criteria is enough",
      "Selected: the criteria applies to all knowledge bases",
      "Selected: the record matches all users in the instance",
      "It has no effect on knowledge bases, only on catalog items",
    ],
    correct: 0,
    explanation:
      "The Match All check box determines whether ALL elements from each populated criteria field must match. If selected, only users who match all criteria are given access. If cleared (the default), the user must meet one or more of the criteria to be given access.",
    explanation_pt:
      "O check box Match All determina se TODOS os elementos de cada campo preenchido devem corresponder. Se marcado, apenas usuários que atendem a todos os critérios recebem acesso. Se desmarcado (padrão), basta o usuário atender a um ou mais critérios.",
    source: "SNAF Module 5 · 5.1 Knowledge security and visibility: User Criteria",
  },
  {
    id: 1307,
    domain: "Self Service & Automation",
    type: "single",
    question:
      "What controls the publishing and retirement processes of a knowledge article?",
    options: [
      "The article's category",
      "Flows defined for the Knowledge Base that the article belongs to",
      "The knowledge_admin role of the author",
      "A UI Policy on the kb_knowledge table",
    ],
    correct: 1,
    explanation:
      "The publishing and retirement processes are controlled by flows defined for the Knowledge Base the article belongs to. Different flows can be assigned to each knowledge base, and you can use a default flow or create your own.",
    explanation_pt:
      "Os processos de publicação e aposentadoria são controlados por flows definidos na Knowledge Base à qual o artigo pertence. Cada knowledge base pode ter flows diferentes, e é possível usar um flow padrão ou criar o seu.",
    source: "SNAF Module 5 · 5.1 Knowledge Base: Flows",
  },
  {
    id: 1308,
    domain: "Self Service & Automation",
    type: "single",
    question:
      "Which baseline knowledge flow requests approval from a manager of the Knowledge Base before moving an article to the PUBLISHED state, leaving the article in draft if rejected?",
    options: [
      "Knowledge – Instant Publish",
      "Knowledge – Approval Publish",
      "Knowledge – Publish Knowledge",
      "Knowledge – Approval Retire",
    ],
    correct: 1,
    explanation:
      "Knowledge – Approval Publish requests approval from a KB manager before publishing; if any manager rejects, the flow is canceled and the article remains in draft. Knowledge – Approval Retire does the same for retirement. Instant Publish/Instant Retire act immediately with no approval, and Publish Knowledge / Retire Knowledge are subflows used inside custom flows.",
    explanation_pt:
      "Knowledge – Approval Publish solicita aprovação de um gerente da KB antes de publicar; se algum gerente rejeitar, o flow é cancelado e o artigo permanece em draft. Knowledge – Approval Retire faz o mesmo para a aposentadoria. Instant Publish/Instant Retire agem imediatamente sem aprovação, e Publish Knowledge / Retire Knowledge são subflows usados em flows customizados.",
    source: "SNAF Module 5 · 5.1 Knowledge Base: Flows (notes)",
  },
  {
    id: 1309,
    domain: "Self Service & Automation",
    type: "single",
    question:
      "How do you create knowledge articles from existing Word documents, and what happens when several documents are uploaded at once?",
    options: [
      "All > Knowledge > Articles > Import Articles; one article is created for each uploaded document",
      "System Import Sets > Load Data; all documents are merged into one article",
      "Knowledge Center > Merge Duplicates; the documents become knowledge blocks",
      "Attach the documents to an existing article; they become sections",
    ],
    correct: 0,
    explanation:
      "Navigate to All > Knowledge > Articles > Import Articles, select the Knowledge Base and Category, add the Word file(s) and select Import > Continue. Uploading multiple documents creates ONE article per uploaded item. Titles, headings, images, links, bold/italic/underline, lists and tables are preserved.",
    explanation_pt:
      "Navegue até All > Knowledge > Articles > Import Articles, selecione a Knowledge Base e a Category, adicione o(s) arquivo(s) Word e selecione Import > Continue. Fazer upload de vários documentos cria UM artigo por item enviado. Títulos, cabeçalhos, imagens, links, negrito/itálico/sublinhado, listas e tabelas são preservados.",
    source: "SNAF Module 5 · 5.1 Knowledge Base: Import a Word document",
  },
  {
    id: 1310,
    domain: "Self Service & Automation",
    type: "single",
    question:
      "What are Knowledge Blocks?",
    options: [
      "Categories used to group articles inside a knowledge base",
      "Reusable content components secured by user criteria, so different users see different content in the same article",
      "Templates that define the article approval flow",
      "Blocked articles awaiting manager approval",
    ],
    correct: 1,
    explanation:
      "Knowledge blocks are reusable content components secured by user criteria. They allow you to build flexible articles where different users see different content based on their roles or attributes.",
    explanation_pt:
      "Knowledge blocks são componentes de conteúdo reutilizáveis protegidos por user criteria. Permitem construir artigos flexíveis, onde usuários diferentes veem conteúdos diferentes conforme suas roles ou atributos.",
    source: "SNAF Module 5 · 5.1 Knowledge Center",
  },
  {
    id: 1311,
    domain: "Self Service & Automation",
    type: "single",
    question:
      "In Knowledge Center, why does the article length scan flag articles with fewer than 300 words or more than 10,000 words?",
    options: [
      "Short articles cannot be translated; long articles cannot be printed",
      "Articles under 300 words may not rank well in search; articles over 10,000 words will not appear in AI-powered search",
      "The platform rejects articles outside those limits",
      "It is a licensing restriction of Knowledge Management",
    ],
    correct: 1,
    explanation:
      "The article length scan checks search-optimization standards: articles with fewer than 300 words are flagged because they may not rank well in search results, and articles exceeding 10,000 words are flagged because they will not appear in AI-powered search. Knowledge Center also offers Reading Ease scan, Gap Analysis, Insights Dashboard and Merge Duplicates.",
    explanation_pt:
      "O article length scan verifica padrões de otimização de busca: artigos com menos de 300 palavras são sinalizados porque podem não ranquear bem nos resultados, e artigos com mais de 10.000 palavras são sinalizados porque não aparecerão na busca com IA. O Knowledge Center também oferece Reading Ease scan, Gap Analysis, Insights Dashboard e Merge Duplicates.",
    source: "SNAF Module 5 · 5.1 Knowledge Center",
  },

  // ------------------------------------------------------------ Service Catalog
  {
    id: 1312,
    domain: "Self Service & Automation",
    type: "single",
    question:
      "Which roles can manage MULTIPLE service catalogs and provide services to different teams in the organization?",
    options: [
      "itil or itil_admin",
      "admin or catalog_admin",
      "knowledge_admin or catalog_editor",
      "user_criteria_admin only",
    ],
    correct: 1,
    explanation:
      "The platform supports multiple Service Catalogs. Users with the admin or catalog_admin roles can manage multiple catalogs (IT Services, Human Resources, Facilities Management) and catalog items can be shared across multiple catalogs.",
    explanation_pt:
      "A plataforma suporta múltiplos Service Catalogs. Usuários com as roles admin ou catalog_admin podem gerenciar vários catálogos (IT Services, Recursos Humanos, Facilities) e os catalog items podem ser compartilhados entre múltiplos catálogos.",
    source: "SNAF Module 5 · 5.2 What is Service Catalog?",
  },
  {
    id: 1313,
    domain: "Self Service & Automation",
    type: "single",
    question:
      "An employee orders a laptop and a desktop in a single Service Catalog order. Which records are created?",
    options: [
      "Two Requests (REQ), each with its own Catalog Tasks",
      "One Request (REQ) containing two Requested Items (RITM), each of which can have one or more Catalog Tasks (SCTASK)",
      "One Requested Item (RITM) containing two Requests (REQ)",
      "One Incident (INC) with two Catalog Tasks",
    ],
    correct: 1,
    explanation:
      "REQ [sc_request] is the order container — think of it as the shopping cart. Each discrete item ordered gets its own RITM [sc_req_item], which manages delivery of that item. Each RITM can have one or more SCTASK [sc_task] records, which are the assigned tasks needed to fulfil it.",
    explanation_pt:
      "REQ [sc_request] é o contêiner do pedido — como um carrinho de compras. Cada item distinto pedido recebe seu próprio RITM [sc_req_item], que gerencia a entrega daquele item. Cada RITM pode ter uma ou mais SCTASK [sc_task], que são as tarefas atribuídas necessárias para o atendimento.",
    source: "SNAF Module 5 · 5.2 Service Catalog item request output",
  },
  {
    id: 1314,
    domain: "Self Service & Automation",
    type: "multiple",
    question:
      "Match the Service Catalog output tables. Which statements are correct? (Choose 3)",
    options: [
      "REQ records are stored on the Request [sc_request] table",
      "RITM records are stored on the Requested Item [sc_req_item] table",
      "SCTASK records are stored on the Catalog Task [sc_task] table",
      "REQ records are stored on the Task [task] table only",
    ],
    correct: [0, 1, 2],
    explanation:
      "Request [sc_request] holds REQ records (order container), Requested Item [sc_req_item] holds RITM records (individual line items) and Catalog Task [sc_task] holds SCTASK records (fulfilment work, with fields such as Assignment group, Due date, Work start and Work end).",
    explanation_pt:
      "Request [sc_request] armazena registros REQ (contêiner do pedido), Requested Item [sc_req_item] armazena RITM (itens individuais) e Catalog Task [sc_task] armazena SCTASK (trabalho de atendimento, com campos como Assignment group, Due date, Work start e Work end).",
    source: "SNAF Module 5 · 5.2 Service Catalog item request output (notes)",
  },
  {
    id: 1315,
    domain: "Self Service & Automation",
    type: "single",
    question:
      "You need users to open an INCIDENT from the Service Catalog rather than generate a Requested Item. What should you build?",
    options: [
      "A catalog item with a variable set",
      "A record producer",
      "An order guide",
      "A catalog UI policy",
    ],
    correct: 1,
    explanation:
      "A record producer is a type of catalog item that creates TASK-BASED records (incidents, HR cases, facility requests) directly from the service catalog, instead of a requested item. Its variables are MAPPED to fields on the target table. Catalog items should be used when the goal is to create a requested item (RITM).",
    explanation_pt:
      "Um record producer é um tipo de catalog item que cria registros BASEADOS EM TASK (incidents, HR cases, solicitações de facilities) diretamente do service catalog, em vez de um requested item. Suas variáveis são MAPEADAS para campos da tabela de destino. Catalog items devem ser usados quando o objetivo é criar um requested item (RITM).",
    source: "SNAF Module 5 · 5.2 Record Producers",
  },
  {
    id: 1316,
    domain: "Self Service & Automation",
    type: "single",
    question:
      "What is a Variable Set, and what is the benefit of using one?",
    options: [
      "A group of catalog items sold together; it reduces the number of REQs",
      "A collection of variables that can be shared between catalog items; updating the set updates every associated catalog item",
      "A set of choices for a single variable; it prevents typing errors",
      "A container for catalog client scripts only",
    ],
    correct: 1,
    explanation:
      "A Variable Set is a collection of variables shared between catalog items. Functionally it is just a container with two fields (Name and Description) plus a related list of variables. When a Variable Set is updated, the change is reflected across all associated catalog items — saving time and avoiding repetitive, error-prone configuration.",
    explanation_pt:
      "Um Variable Set é uma coleção de variáveis compartilhada entre catalog items. Funcionalmente é apenas um contêiner com dois campos (Name e Description) e uma related list de variáveis. Quando um Variable Set é atualizado, a mudança é refletida em todos os catalog items associados — economizando tempo e evitando configuração repetitiva e sujeita a erros.",
    source: "SNAF Module 5 · 5.2 Service Catalog major components",
  },
  {
    id: 1317,
    domain: "Self Service & Automation",
    type: "multiple",
    question:
      "Which of the following are common Service Catalog VARIABLE types? (Choose 4)",
    options: [
      "Multiple Choice",
      "Select Box",
      "Single Line Text",
      "Reference",
      "Import Set",
    ],
    correct: [0, 1, 2, 3],
    explanation:
      "Common variable types include Multiple Choice (radio buttons), Select Box (choice list), Single Line Text, Reference (a record on another table) and Check box. Variables define the questions asked of the requester and can affect the order price.",
    explanation_pt:
      "Tipos comuns de variáveis incluem Multiple Choice (radio buttons), Select Box (lista de escolha), Single Line Text, Reference (registro em outra tabela) e Check box. Variáveis definem as perguntas feitas ao solicitante e podem afetar o preço do pedido.",
    source: "SNAF Module 5 · 5.2 Service Catalog items and variables",
  },
  {
    id: 1318,
    domain: "Self Service & Automation",
    type: "single",
    question:
      "What is the default scope flag of Service Catalog variables, and what does it mean?",
    options: [
      "Local by default — the variable is visible only on the catalog item form",
      "Global by default — the variable displays in all execution tasks of a requested item",
      "Private by default — only the requester can view the value",
      "Read-only by default — fulfillers cannot change the value",
    ],
    correct: 1,
    explanation:
      "By default Service Catalog variables are flagged as Global, which means they will display in all execution tasks of a requested item. A variable is defined once and can be used in multiple places.",
    explanation_pt:
      "Por padrão, as variáveis do Service Catalog são marcadas como Global, o que significa que aparecem em todas as tarefas de execução de um requested item. Uma variável é definida uma vez e pode ser usada em vários lugares.",
    source: "SNAF Module 5 · 5.2 Service Catalog major components (notes)",
  },
  {
    id: 1319,
    domain: "Self Service & Automation",
    type: "single",
    question:
      "Which field establishes the sequence in which variables and items are displayed?",
    options: ["The Sequence field", "The Order field", "The Weight field", "The Priority field"],
    correct: 1,
    explanation:
      "The Order field used by items and variables establishes the display sequence — an item with an Order value of 100 displays before an item with an Order value of 200.",
    explanation_pt:
      "O campo Order usado por itens e variáveis define a sequência de exibição — um item com Order 100 aparece antes de um item com Order 200.",
    source: "SNAF Module 5 · 5.2 Service Catalog items and variables (notes)",
  },
  {
    id: 1320,
    domain: "Self Service & Automation",
    type: "single",
    question:
      "An Order Guide is best described as which of the following?",
    options: [
      "A knowledge article that documents how to order items",
      "A type of catalog item with its own variables and a Rule Base that determines which items to present based on the answers given, allowing multiple related items to be ordered as one request",
      "A flow that approves multiple requests at once",
      "A dashboard showing all open requests",
    ],
    correct: 1,
    explanation:
      "Order Guides let users order multiple, related items as ONE request (useful for onboarding). An order guide is a type of catalog item with variables; the important part is the Rule Base, which determines which items are presented based on the answers. The items must exist before they can be referenced, and Order Guides are NOT created using Catalog Builder (use All > Service Catalog > Catalog Definition > Order Guides).",
    explanation_pt:
      "Order Guides permitem pedir vários itens relacionados como UM único request (útil para onboarding). Um order guide é um tipo de catalog item com variáveis; o ponto principal é o Rule Base, que determina quais itens são apresentados com base nas respostas. Os itens precisam existir antes de serem referenciados, e Order Guides NÃO são criados no Catalog Builder (use All > Service Catalog > Catalog Definition > Order Guides).",
    source: "SNAF Module 5 · 5.2 Order Guides",
  },
  {
    id: 1321,
    domain: "Self Service & Automation",
    type: "single",
    question:
      "Where do the progress STAGES shown for a requested item come from?",
    options: [
      "From the State field of the RITM record",
      "From the flow attached to the catalog item",
      "From the approval record only",
      "From the SLA definition applied to the request",
    ],
    correct: 1,
    explanation:
      "Stages come from the flow attached to the catalog item and give summary-level feedback about the item's progress in the delivery process (Waiting for approval, Approved, Pending, Fulfillment, Delivery, Completed). Stages can be configured in Workflow Studio and grouped into Stage Sets.",
    explanation_pt:
      "As stages vêm do flow anexado ao catalog item e fornecem uma visão resumida do progresso do item no processo de entrega (Waiting for approval, Approved, Pending, Fulfillment, Delivery, Completed). As stages podem ser configuradas no Workflow Studio e agrupadas em Stage Sets.",
    source: "SNAF Module 5 · 5.2 Progress stages for a requested item",
  },
  {
    id: 1322,
    domain: "Self Service & Automation",
    type: "single",
    question:
      "Which related lists on a catalog item or category are used to apply User Criteria?",
    options: [
      "Can Read and Can Contribute",
      "Available for and Not available for",
      "Roles and Groups",
      "Allow If and Deny Unless",
    ],
    correct: 1,
    explanation:
      "In the Service Catalog, user criteria is applied through the 'Available for' and 'Not available for' related lists on the item or category — this controls who can SEE and order it. Knowledge Management instead uses Can Read / Can Contribute. The ability to CREATE or EDIT catalog items is controlled separately, through roles (catalog_admin, catalog_editor).",
    explanation_pt:
      "No Service Catalog, a user criteria é aplicada pelas related lists 'Available for' e 'Not available for' no item ou na categoria — isso controla quem pode VER e pedir. O Knowledge Management usa Can Read / Can Contribute. A capacidade de CRIAR ou EDITAR catalog items é controlada separadamente, por roles (catalog_admin, catalog_editor).",
    source: "SNAF Module 5 · 5.2 Catalog security: User Criteria",
  },
  {
    id: 1323,
    domain: "Self Service & Automation",
    type: "single",
    question:
      "A business owner cannot edit a catalog item in the classic view (Maintain Items). What is the most likely cause?",
    options: [
      "The item is inactive",
      "The item is still open/checked out in Catalog Builder — the 'Checked out' field is true",
      "The user is missing the itil role",
      "The item belongs to a different update set",
    ],
    correct: 1,
    explanation:
      "An item cannot be edited in Maintain Items and Catalog Builder at the same time. When a user is editing the item in Catalog Builder the 'Checked out' field is set to true; it must be false before the item can be edited in the classic view.",
    explanation_pt:
      "Um item não pode ser editado simultaneamente em Maintain Items e no Catalog Builder. Quando alguém está editando o item no Catalog Builder, o campo 'Checked out' fica true; ele precisa estar false para que o item seja editado na visão clássica.",
    source: "SNAF Module 5 · 5.2 Catalog Builder (notes)",
  },
  {
    id: 1324,
    domain: "Self Service & Automation",
    type: "single",
    question:
      "What is the purpose of Catalog Builder?",
    options: [
      "To create catalog items with a visual, guided experience and templates that provide prefilled values and restrictions, so catalog creation can be delegated to business users",
      "To build the underlying flows that fulfil catalog items",
      "To design the portal pages where catalog items appear",
      "To import catalog items from a spreadsheet",
    ],
    correct: 0,
    explanation:
      "Catalog Builder gives a visual and guided experience for creating or editing a catalog item or record producer, with specified restrictions. A catalog admin creates templates for a business group (restricting catalogs, categories, variable types and portal settings) so business owners can safely create items. It supports common, simple use cases; complex needs are handled by catalog administrators through traditional platform methods.",
    explanation_pt:
      "O Catalog Builder oferece uma experiência visual e guiada para criar ou editar um catalog item ou record producer, com restrições definidas. Um catalog admin cria templates para um grupo de negócio (restringindo catálogos, categorias, tipos de variáveis e configurações de portal) para que donos de negócio criem itens com segurança. Ele suporta casos comuns e simples; necessidades complexas são tratadas por catalog administrators pelos métodos tradicionais da plataforma.",
    source: "SNAF Module 5 · 5.2 Catalog Builder",
  },
  {
    id: 1325,
    domain: "Self Service & Automation",
    type: "single",
    question:
      "Which statement about Virtual Agent is correct?",
    options: [
      "It only answers questions from the Knowledge Base",
      "It is a conversational platform that helps users obtain information, make decisions and perform common work tasks, including content from Knowledge Base and Service Catalog, with the option to switch to a live human agent",
      "It replaces the Service Catalog for ordering items",
      "It requires the user to have the itil role",
    ],
    correct: 1,
    explanation:
      "Virtual Agent is a conversational platform that helps users obtain information, make decisions and perform common work tasks in a messaging interface — including information stored in the Knowledge Base and Service Catalog. Through live agent support users can switch to a human agent at any time. It uses NLU/AI and is available for Service Portal, iOS and Android, plus Slack and Microsoft Teams adapters.",
    explanation_pt:
      "O Virtual Agent é uma plataforma conversacional que ajuda usuários a obter informações, tomar decisões e executar tarefas comuns em uma interface de mensagens — incluindo informações da Knowledge Base e do Service Catalog. Com o suporte de live agent, o usuário pode transferir para um agente humano a qualquer momento. Usa NLU/IA e está disponível no Service Portal, iOS e Android, além de adaptadores para Slack e Microsoft Teams.",
    source: "SNAF Module 5 · 5.2 Virtual Agent",
  },

  // ---------------------------------------------------------- Workflow Studio
  {
    id: 1326,
    domain: "Self Service & Automation",
    type: "single",
    question: "What is a Flow in ServiceNow?",
    options: [
      "A scheduled job that runs a script every night",
      "Automated business logic for a particular application or process — such as approvals, tasks, notifications and record operations — built from a trigger, actions and data",
      "A visual report showing the stages of a request",
      "A container that groups update sets for migration",
    ],
    correct: 1,
    explanation:
      "Flows automate business logic for a particular application or process such as approvals, tasks, notifications and record operations. The three components to know are the TRIGGER, the ACTIONS and the DATA. Flows are built in Workflow Studio (All > Process Automation > Workflow Studio).",
    explanation_pt:
      "Flows automatizam lógica de negócio para uma aplicação ou processo, como aprovações, tarefas, notificações e operações em registros. Os três componentes a conhecer são o TRIGGER, as ACTIONS e o DATA. Flows são construídos no Workflow Studio (All > Process Automation > Workflow Studio).",
    source: "SNAF Module 5 · 5.3 What is a Flow?",
  },
  {
    id: 1327,
    domain: "Self Service & Automation",
    type: "multiple",
    question:
      "Triggers instantiate a flow. Which three trigger categories exist? (Choose 3)",
    options: [
      "Record-based",
      "Date-based",
      "Application-based",
      "Field-based",
    ],
    correct: [0, 1, 2],
    explanation:
      "Triggers can be record-based (run after a record is created, updated or deleted — the triggering record can be used later as input), date-based (run at specified dates and times, such as daily/weekly/monthly) or application-based (added when the associated application spoke is activated).",
    explanation_pt:
      "Triggers podem ser record-based (executam após um registro ser criado, atualizado ou excluído — o registro que disparou pode ser usado depois como entrada), date-based (executam em datas e horários definidos, como diário/semanal/mensal) ou application-based (adicionados quando o spoke da aplicação associada é ativado).",
    source: "SNAF Module 5 · 5.3 Flow components: Triggers",
  },
  {
    id: 1328,
    domain: "Self Service & Automation",
    type: "single",
    question:
      "What is the benefit of creating a trigger INDEPENDENT of a flow (New > Trigger on the Workflow Studio homepage)?",
    options: [
      "It makes the flow run faster",
      "The trigger can be published and reused in multiple flows",
      "It bypasses the need for conditions",
      "It converts the flow into a subflow automatically",
    ],
    correct: 1,
    explanation:
      "Triggers can now be created outside of a flow so they can be reused in multiple flows. On the Workflow Studio homepage select New > Trigger, choose the trigger type and table, then publish the trigger to make it available for users.",
    explanation_pt:
      "Triggers agora podem ser criados fora de um flow para serem reutilizados em vários flows. Na home do Workflow Studio selecione New > Trigger, escolha o tipo de trigger e a tabela, e publique o trigger para disponibilizá-lo aos usuários.",
    source: "SNAF Module 5 · 5.3 Flow components: Triggers",
  },
  {
    id: 1329,
    domain: "Self Service & Automation",
    type: "single",
    question:
      "In Workflow Studio, what is created automatically each time you add an ACTION to a flow?",
    options: [
      "A subflow",
      "A data pill that stores the action's results",
      "A stage record",
      "An update set entry",
    ],
    correct: 1,
    explanation:
      "Each time you add an action to a flow, Workflow Studio adds a DATA PILL to store its results. Data pills are referenced in later actions by dragging and dropping them or using the Data Pill Picker. Use the sequence value (Trigger, 1, 2, 3…) to pick the correct pill — for example, after an Update Record action use the most recently updated version of the record, not the trigger's.",
    explanation_pt:
      "Cada vez que você adiciona uma action a um flow, o Workflow Studio cria um DATA PILL para armazenar seus resultados. Data pills são referenciados em ações posteriores arrastando-os ou usando o Data Pill Picker. Use o valor de sequência (Trigger, 1, 2, 3…) para escolher o pill correto — por exemplo, após uma ação Update Record, use a versão mais recente do registro, não a do trigger.",
    source: "SNAF Module 5 · 5.3 Flow components: Data",
  },
  {
    id: 1330,
    domain: "Self Service & Automation",
    type: "single",
    question:
      "When using the Data Pill Picker, how do you dot-walk to fields on other tables?",
    options: [
      "Type the full dot-walked path manually",
      "Use the arrow keys to dot-walk to fields in other tables",
      "Dot-walking is not supported in flows",
      "Add a Look Up Record action for each level",
    ],
    correct: 1,
    explanation:
      "When using the Data Pill Picker icon, use the ARROW KEYS to dot-walk to fields in other tables (for example Assigned to → Manager → Email). A data pill's runtime value stays consistent for the duration of the flow.",
    explanation_pt:
      "Ao usar o ícone Data Pill Picker, use as SETAS DO TECLADO para fazer dot-walk até campos de outras tabelas (por exemplo Assigned to → Manager → Email). O valor de runtime de um data pill permanece consistente durante toda a execução do flow.",
    source: "SNAF Module 5 · 5.3 Flow components: Data (notes)",
  },
  {
    id: 1331,
    domain: "Self Service & Automation",
    type: "multiple",
    question:
      "Which of the following are ServiceNow CORE actions available in Workflow Studio? (Choose 4)",
    options: [
      "Ask for Approval",
      "Create Record",
      "Look Up Record",
      "Wait for Condition",
      "Commit Update Set",
    ],
    correct: [0, 1, 2, 3],
    explanation:
      "Core actions include Ask for Approval (approvals with rules for approval, rejection, cancellation and due date), Create Record, Delete Record, Look Up Record and Wait for Condition (pause until record conditions are met). New application-specific core actions become available by activating the associated spoke.",
    explanation_pt:
      "Ações core incluem Ask for Approval (aprovações com regras de aprovação, rejeição, cancelamento e prazo), Create Record, Delete Record, Look Up Record e Wait for Condition (pausa até as condições do registro serem atendidas). Novas ações específicas de aplicação ficam disponíveis ao ativar o spoke correspondente.",
    source: "SNAF Module 5 · 5.3 Flow components: Actions",
  },
  {
    id: 1332,
    domain: "Self Service & Automation",
    type: "single",
    question: "What is a SPOKE in Workflow Studio / Integration Hub?",
    options: [
      "A scheduled job that synchronizes two instances",
      "An application scope containing triggers and actions dedicated to a particular application (for example the ITSM Spoke), activated when its parent application is activated",
      "A type of data pill used for third-party data",
      "A portal widget used to display integration status",
    ],
    correct: 1,
    explanation:
      "A spoke contains triggers and actions dedicated to a particular application — for example the ITSM Spoke contains actions for managing Task records such as Create Task. Spokes are activated when their parent application is activated. Integration Hub provides pre-built spokes for Workday, Microsoft Teams, Jira, AWS, Salesforce and hundreds of other systems.",
    explanation_pt:
      "Um spoke contém triggers e actions dedicados a uma aplicação específica — por exemplo, o ITSM Spoke contém ações para gerenciar registros de Task, como Create Task. Spokes são ativados quando a aplicação pai é ativada. O Integration Hub fornece spokes pré-construídos para Workday, Microsoft Teams, Jira, AWS, Salesforce e centenas de outros sistemas.",
    source: "SNAF Module 5 · 5.3 Flow components: Triggers / Integration Hub",
  },
  {
    id: 1333,
    domain: "Self Service & Automation",
    type: "single",
    question:
      "Which statement correctly describes inbound versus outbound integrations in relation to Integration Hub?",
    options: [
      "Both inbound and outbound are delivered by Integration Hub spokes",
      "Inbound is where ServiceNow passively receives data (configured through Connections and external event sources, not Integration Hub); outbound is where Integration Hub spokes take action in a third-party system",
      "Inbound uses spokes; outbound uses import sets",
      "Integration Hub only supports inbound connections",
    ],
    correct: 1,
    explanation:
      "Inbound: ServiceNow receives data from external systems (a monitoring tool detects an outage and an incident is created) — configured through Connections and external event sources, not Integration Hub. Outbound: Integration Hub spokes let ServiceNow take action in a third-party system (update a Workday record, post to a Teams channel, update a Jira task). ServiceNow counts OUTBOUND activity as Integration Hub transactions.",
    explanation_pt:
      "Inbound: o ServiceNow recebe dados de sistemas externos (uma ferramenta de monitoramento detecta uma indisponibilidade e um incident é criado) — configurado por Connections e fontes de eventos externas, não pelo Integration Hub. Outbound: spokes do Integration Hub permitem que o ServiceNow execute ações em sistemas de terceiros (atualizar registro no Workday, postar em canal do Teams, atualizar task no Jira). O ServiceNow contabiliza a atividade OUTBOUND como transações do Integration Hub.",
    source: "SNAF Module 5 · 5.3 Integration Hub",
  },
  {
    id: 1334,
    domain: "Self Service & Automation",
    type: "single",
    question:
      "What are Playbooks in Workflow Studio used for?",
    options: [
      "To document flows for auditors",
      "To author cross-enterprise processes as a single unified process, with triggers, lanes and activities, giving end users a simplified task-oriented view",
      "To replace Access Control rules with visual permissions",
      "To schedule the execution of update sets",
    ],
    correct: 1,
    explanation:
      "Playbooks let owners author cross-enterprise flows and create a single unified process, and provide end users a simplified, task-oriented view. You create a Process Definition with triggers, lanes and activities, activate it, and the system creates an Execution. Playbooks connect and reuse existing flows, subflows and actions, and define a consistent record life cycle.",
    explanation_pt:
      "Playbooks permitem criar fluxos que atravessam a empresa como um único processo unificado e oferecem ao usuário final uma visão simplificada e orientada a tarefas. Você cria uma Process Definition com triggers, lanes e activities, ativa-a, e o sistema cria uma Execution. Playbooks conectam e reutilizam flows, subflows e actions existentes, e definem um ciclo de vida consistente do registro.",
    source: "SNAF Module 5 · 5.3 Playbooks in Workflow Studio",
  },
  {
    id: 1335,
    domain: "Self Service & Automation",
    type: "multiple",
    question:
      "Which flow trigger types are supported by the Flow DIAGRAMMING view? (Choose 4)",
    options: [
      "Record triggers",
      "Date triggers",
      "Inbound email",
      "Service Catalog",
      "Business Rule triggers",
    ],
    correct: [0, 1, 2, 3],
    explanation:
      "The flow diagramming view only displays flows with these trigger types: Record, Date, Inbound email, Service Catalog and SLA Task. It also only supports certain flow logic types (Call a flow, Do the following in parallel, Dynamic Flows, Else If, End Flow, For Each, Get Flow Outputs, If, Set Flow Variables, Wait for a duration of time). Workflow Studio disables the diagramming view when a flow contains unsupported components.",
    explanation_pt:
      "A visão de diagrama só exibe flows com estes tipos de trigger: Record, Date, Inbound email, Service Catalog e SLA Task. Também suporta apenas certos tipos de lógica (Call a flow, Do the following in parallel, Dynamic Flows, Else If, End Flow, For Each, Get Flow Outputs, If, Set Flow Variables, Wait for a duration of time). O Workflow Studio desabilita a visão de diagrama quando o flow contém componentes não suportados.",
    source: "SNAF Module 5 · 5.3 Flow Diagramming View",
  },
  {
    id: 1336,
    domain: "Self Service & Automation",
    type: "multiple",
    question:
      "Which roles might be required to work with Workflow Studio? (Choose 3)",
    options: ["flow_designer", "flow_operator", "action_designer", "catalog_admin"],
    correct: [0, 1, 2],
    explanation:
      "The roles that might be required to work with Workflow Studio in one capacity or another are flow_designer, flow_operator and action_designer.",
    explanation_pt:
      "As roles que podem ser necessárias para trabalhar com o Workflow Studio, em diferentes capacidades, são flow_designer, flow_operator e action_designer.",
    source: "SNAF Module 5 · 5.3 What is a Flow? (notes)",
  },
  {
    id: 1337,
    domain: "Self Service & Automation",
    type: "single",
    question:
      "Which Workflow Studio page displays execution details by flow type so you can monitor and troubleshoot processes?",
    options: ["Homepage", "Operations", "Integrations", "Decision Tables"],
    correct: 1,
    explanation:
      "Workflow Studio has three main menu items: the Homepage (hub to create and view flows), Operations (view execution details by flow type) and Integrations (connection details for spokes; configure inbound and outbound connections). Workflow Studio is distributed through a store application with updates every 3 months.",
    explanation_pt:
      "O Workflow Studio tem três itens principais de menu: Homepage (hub para criar e visualizar flows), Operations (ver detalhes de execução por tipo de flow) e Integrations (detalhes de conexão dos spokes; configurar conexões inbound e outbound). O Workflow Studio é distribuído como aplicação da store, com atualizações a cada 3 meses.",
    source: "SNAF Module 5 · 5.3 Workflow Studio",
  },
  {
    id: 1338,
    domain: "Self Service & Automation",
    type: "single",
    question:
      "Which Workflow Studio component decouples decision logic from code through the creation and maintenance of decision rules?",
    options: ["Subflows", "Decision Tables", "Actions", "Playbook lanes"],
    correct: 1,
    explanation:
      "Decision Tables decouple decision logic from code through the creation and maintenance of decision rules. The flow types selectable in Workflow Studio are Processes (Playbooks), Flows, Subflows, Actions and Decision Tables.",
    explanation_pt:
      "Decision Tables desacoplam a lógica de decisão do código por meio da criação e manutenção de regras de decisão. Os tipos selecionáveis no Workflow Studio são Processes (Playbooks), Flows, Subflows, Actions e Decision Tables.",
    source: "SNAF Module 5 · 5.3 Workflow Studio",
  },
  {
    id: 1339,
    domain: "Self Service & Automation",
    type: "single",
    question:
      "Which Workflow Studio menu option lets you set breakpoints and step through a paused flow to review configuration and runtime values?",
    options: ["Test", "Debug", "Deactivate", "Executions"],
    correct: 1,
    explanation:
      "Menu options for flows include Test (run the flow to check it behaves as expected), Debug (set breakpoints on flows and subflows and step through a paused flow to review configuration and runtime values), Deactivate, Activate, Save and More actions (Properties, Executions, Flow Stages and more).",
    explanation_pt:
      "As opções de menu para flows incluem Test (executar o flow para conferir o comportamento), Debug (definir breakpoints em flows e subflows e percorrer um flow pausado para revisar configuração e valores de runtime), Deactivate, Activate, Save e More actions (Properties, Executions, Flow Stages, entre outros).",
    source: "SNAF Module 5 · 5.3 Additional menus for building flows",
  },
  {
    id: 1340,
    domain: "Self Service & Automation",
    type: "single",
    question:
      "When building a flow to fulfil a Service Catalog item, which action should be used to create the fulfilment task attached to the requested item?",
    options: [
      "Create Task",
      "Create Catalog Task",
      "Create Record on the Task [task] table",
      "Ask for Approval",
    ],
    correct: 1,
    explanation:
      "For Service Catalog fulfilment you must use the Create Catalog Task action (which creates an SCTASK on sc_task attached to the RITM), not the generic Create Task action. Choosing the wrong action is a common mistake in the flow lab.",
    explanation_pt:
      "Para o atendimento do Service Catalog, use a action Create Catalog Task (que cria uma SCTASK em sc_task vinculada ao RITM), e não a action genérica Create Task. Escolher a ação errada é um erro comum no laboratório de flows.",
    source: "SNAF Module 5 · Lab 5.3.1 (notes)",
  },
  {
    id: 1341,
    domain: "Self Service & Automation",
    type: "single",
    question:
      "A Service Catalog order totals more than $1000 and an unexpected approval appears before the catalog task is created. What is happening?",
    options: [
      "The flow failed and rolled back",
      "A Request-level approval was activated by the order value, and the catalog task is only created after it is approved",
      "The item was checked out in Catalog Builder",
      "The requester lacks the approver_user role",
    ],
    correct: 1,
    explanation:
      "Pricing options on variables can push the order value above $1000, which activates a Request-level approval. Until that approval is granted the catalog task is not created — check the REQ record for pending approvers.",
    explanation_pt:
      "Opções de preço nas variáveis podem elevar o valor do pedido acima de $1000, o que ativa uma aprovação em nível de Request. Enquanto essa aprovação não for concedida, a catalog task não é criada — verifique o registro REQ para ver aprovadores pendentes.",
    source: "SNAF Module 5 · Lab 5.3.1 (notes)",
  },
  {
    id: 1342,
    domain: "Self Service & Automation",
    type: "single",
    question:
      "Which statement about Knowledge Management roles and knowledge bases is correct?",
    options: [
      "Only the system administrator can own a knowledge base",
      "Administrators and users with the knowledge_admin role can manage multiple knowledge bases, and each knowledge base can be assigned to individual managers with unique lifecycle flows, user criteria and category structures",
      "All knowledge bases share the same publishing flow",
      "Knowledge managers must also hold the security_admin role",
    ],
    correct: 1,
    explanation:
      "Administrators and users with the knowledge_admin role can manage multiple knowledge bases. Administrators can create multiple knowledge bases and assign them to individual managers, and each knowledge base can have unique lifecycle flows, user criteria, category structures and management assignments.",
    explanation_pt:
      "Administradores e usuários com a role knowledge_admin podem gerenciar múltiplas knowledge bases. Administradores podem criar várias knowledge bases e atribuí-las a gerentes individuais, e cada knowledge base pode ter flows de ciclo de vida, user criteria, estrutura de categorias e responsáveis próprios.",
    source: "SNAF Module 5 · 5.1 What is Knowledge Management?",
  },
];
