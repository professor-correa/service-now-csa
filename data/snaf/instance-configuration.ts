import { Question } from "../types";

/**
 * Domain: Instance Configuration (11% of the exam)
 * Source: SNAF Module 2 (Explore the Power of the ServiceNow Platform),
 * Module 3 §3.3 (UI properties) and Module 7 §7.2 (application scopes).
 */
export const instanceConfigurationQuestions: Question[] = [
  {
    id: 1101,
    domain: "Instance Configuration",
    type: "single",
    question: "What is a baseline implementation in ServiceNow?",
    options: [
      "An instance with all plugins activated",
      "A set of installed applications on a ServiceNow instance, before any configuration or customization has been done",
      "The production instance after go-live",
      "A backup taken before an upgrade",
    ],
    correct: 1,
    explanation:
      "A baseline implementation is the set of installed applications on a ServiceNow instance BEFORE any configuration or customization has been done. An instance is a copy of a ServiceNow environment specific to a customer.",
    explanation_pt:
      "Uma baseline implementation é o conjunto de aplicações instaladas em uma instância ServiceNow ANTES de qualquer configuração ou customização. Uma instância é uma cópia de um ambiente ServiceNow específica de um cliente.",
    source: "SNAF Module 2 · 2.1 Baseline implementation",
  },
  {
    id: 1102,
    domain: "Instance Configuration",
    type: "single",
    question:
      "How many instances is every customer organization provisioned with by default?",
    options: [
      "One production instance only",
      "At least two: a production instance and a non-production (sub-production) instance",
      "Three: development, test and production",
      "One instance per department",
    ],
    correct: 1,
    explanation:
      "By default every customer organization is provisioned with at least two instances: one production and one non-production (sub-production). Additional non-production instances can be requested for UAT, development, review or QA.",
    explanation_pt:
      "Por padrão, toda organização cliente recebe pelo menos duas instâncias: uma de produção e uma de não-produção (sub-produção). Instâncias não-produtivas adicionais podem ser solicitadas para UAT, desenvolvimento, revisão ou QA.",
    source: "SNAF Module 2 · 2.1 Baseline implementation (notes)",
  },
  {
    id: 1103,
    domain: "Instance Configuration",
    type: "single",
    question:
      "Which architecture does ServiceNow employ as its standard offering?",
    options: [
      "Single-instance, multi-tenant — customers share one database",
      "Multi-instance, single-tenant — each instance has an isolated database with its own data, applications and customizations",
      "Multi-instance, multi-tenant with shared application servers",
      "On-premise only architecture",
    ],
    correct: 1,
    explanation:
      "ServiceNow employs a multi-instance, single-tenant architecture. Each instance operates with an isolated database containing its own data, applications and customizations, providing enhanced security and flexibility. Each instance has a unique URL, typically https://<instance_name>.service-now.com.",
    explanation_pt:
      "O ServiceNow utiliza uma arquitetura multi-instance, single-tenant. Cada instância opera com um banco de dados isolado contendo seus próprios dados, aplicações e customizações, o que aumenta segurança e flexibilidade. Cada instância tem uma URL única, normalmente https://<nome_instancia>.service-now.com.",
    source: "SNAF Module 2 · 2.1 Baseline implementation (notes)",
  },
  {
    id: 1104,
    domain: "Instance Configuration",
    type: "single",
    question: "What is the primary purpose of a Personal Developer Instance (PDI)?",
    options: [
      "It is the customer's production environment for a single developer",
      "An independent instance where developers and others may install, configure, develop and learn",
      "A read-only clone of production used for reporting",
      "An instance used exclusively for User Acceptance Testing",
    ],
    correct: 1,
    explanation:
      "A Personal Developer Instance (PDI) is an independent instance where developers and others may install, configure, develop and learn. It is obtained free from developer.servicenow.com.",
    explanation_pt:
      "Uma Personal Developer Instance (PDI) é uma instância independente onde desenvolvedores e outros usuários podem instalar, configurar, desenvolver e aprender. É obtida gratuitamente em developer.servicenow.com.",
    source: "SNAF Module 2 · 2.1 Baseline implementation",
  },
  {
    id: 1105,
    domain: "Instance Configuration",
    type: "single",
    question:
      "Which of the following is an example of CONFIGURATION rather than customization?",
    options: [
      "Enhancing a portal widget to display lists with complex access controls",
      "Adding a table for special billing requirements",
      "Extending a table for a new hardware class",
      "Writing a script include to calculate a custom SLA",
    ],
    correct: 2,
    explanation:
      "Configuration is what administrators primarily do and consists mostly of things that can be done without code: updating a list of categories on a form, adding baseline fields to a form, configuring list views, creating a service catalog and catalog items, and extending a table for a new hardware class. Customization adds functionality that does not exist in the platform (enhancing a widget, adding a table for special billing).",
    explanation_pt:
      "Configuração é o que os administradores mais fazem e consiste principalmente em coisas feitas sem código: atualizar a lista de categorias de um formulário, adicionar campos baseline a um formulário, configurar list views, criar um service catalog e catalog items, e estender uma tabela para uma nova classe de hardware. Customização adiciona funcionalidades que não existem na plataforma (melhorar um widget, criar tabela para faturamento especial).",
    source: "SNAF Module 2 · 2.1 Configuration and customization",
  },
  {
    id: 1106,
    domain: "Instance Configuration",
    type: "multiple",
    question:
      "Some changes require SPECIAL HANDLERS in update sets because they represent information stored across multiple tables. Which of the following are tracked with special handlers? (Choose 4)",
    options: [
      "Form sections",
      "Choice lists",
      "Incident records",
      "Field labels",
      "System dictionary entries",
    ],
    correct: [0, 1, 3, 4],
    explanation:
      "Changes tracked with special handlers include Workflows, Form sections, Lists and related lists, Choice lists, System dictionary entries and Field labels. Task/process DATA (such as incident records) is never captured in an update set. Warning: special handlers delete and reinsert records on commit, which can cause data loss — always test in non-production first.",
    explanation_pt:
      "Mudanças rastreadas com special handlers incluem Workflows, Form sections, Lists e related lists, Choice lists, entradas do System dictionary e Field labels. DADOS de tarefa/processo (como registros de incident) nunca são capturados em update set. Atenção: special handlers apagam e reinserem registros no commit, o que pode causar perda de dados — sempre teste em não-produção primeiro.",
    source: "SNAF Module 2 · 2.1 Configuration and customization (notes)",
  },
  {
    id: 1107,
    domain: "Instance Configuration",
    type: "single",
    question:
      "You want to update the logo, colors, fonts and corner shapes of your ServiceNow instance in an upgrade-safe way. Which tool should you use?",
    options: [
      "CSS customization in UI Scripts",
      "Theme Builder (All > Now Experience Framework > Theme Management > Theme Builder)",
      "System Properties > UI Properties",
      "Form Builder",
    ],
    correct: 1,
    explanation:
      "Theme Builder lets administrators create and apply visual themes reflecting the organization's brand, without design or coding skills, in an upgrade-safe way. Navigate to All > Now Experience Framework > Theme Management > Theme Builder. It also offers AI-powered color palette generation, dark mode and icon customization.",
    explanation_pt:
      "O Theme Builder permite que administradores criem e apliquem temas visuais refletindo a marca da organização, sem habilidades de design ou código, de forma upgrade-safe. Navegue até All > Now Experience Framework > Theme Management > Theme Builder. Também oferece geração de paletas com IA, dark mode e customização de ícones.",
    source: "SNAF Module 2 · 2.1 Theme Builder",
  },
  {
    id: 1108,
    domain: "Instance Configuration",
    type: "single",
    question:
      "Where do you personalize the banner image and instance logo for your company?",
    options: [
      "All > System Properties > My Company",
      "All > System Definition > Dictionary",
      "User menu > Preferences > Display",
      "All > System Security > High Security Settings",
    ],
    correct: 0,
    explanation:
      "To personalize the banner image and instance logo, go to All > System Properties > My Company. Browser tabs can also be modified with visual cues to make it easier to distinguish between instances.",
    explanation_pt:
      "Para personalizar a imagem do banner e o logo da instância, acesse All > System Properties > My Company. As abas do navegador também podem ser modificadas com indicações visuais para facilitar a distinção entre instâncias.",
    source: "SNAF Module 2 · 2.1 Branding your instance",
  },
  {
    id: 1109,
    domain: "Instance Configuration",
    type: "single",
    question:
      "Where do you go to configure basic user settings such as Display, Accessibility, Notifications, Debugging, Language & Region and User Experience?",
    options: [
      "All > System Properties > Basic Configuration",
      "The User menu > Preferences",
      "All > System Definition > Client Scripts",
      "Theme Builder > Manager",
    ],
    correct: 1,
    explanation:
      "To configure basic instance settings such as Display, Accessibility, Notifications, Debugging, Language & Region and User Experience, navigate to the User menu and select Preferences. Accessibility toggles are enabled under Preferences > Accessibility.",
    explanation_pt:
      "Para configurar ajustes básicos como Display, Accessibility, Notifications, Debugging, Language & Region e User Experience, navegue até o User menu e selecione Preferences. Os toggles de acessibilidade ficam em Preferences > Accessibility.",
    source: "SNAF Module 2 · 2.1 Branding your instance / Module 0 accessibility",
  },
  {
    id: 1110,
    domain: "Instance Configuration",
    type: "single",
    question:
      "Not all system properties appear under the System Properties categories in the All menu. How do you view the COMPLETE list of properties?",
    options: [
      "Navigate to sys_properties.list in the Filter navigator",
      "Navigate to All > System Definition > Tables",
      "Open the Application Manager",
      "Run the Property Scanner in Security Center",
    ],
    correct: 0,
    explanation:
      "Not all properties are exposed through the System Property categories in the All menu. To view the complete list, type sys_properties.list into the Filter navigator.",
    explanation_pt:
      "Nem todas as propriedades aparecem nas categorias de System Properties do menu All. Para ver a lista completa, digite sys_properties.list no Filter navigator.",
    source: "SNAF Module 2 · 2.1 Branding your instance (notes)",
  },
  {
    id: 1111,
    domain: "Instance Configuration",
    type: "single",
    question:
      "Which statement correctly distinguishes an Application from a Plugin?",
    options: [
      "Applications are exclusively developed by ServiceNow; plugins may be developed by partners",
      "Applications are available from store.servicenow.com or the Application Manager and may be developed by ServiceNow or its Partners; plugins are exclusively developed by ServiceNow and are only available through the All menu",
      "Plugins are always shipped in a custom application scope; applications are always Global",
      "Plugins are always larger bundles than applications",
    ],
    correct: 1,
    explanation:
      "Applications: available via store.servicenow.com or Open store in the Application Manager; developed by ServiceNow Partners or ServiceNow; usually shipped in a custom application scope; usually larger bundles. Plugins: only available through the All menu (All > Admin Center > Application Manager or v_plugin.list); exclusively developed by ServiceNow; can be in a custom scope or in Global; range from tiny to very large.",
    explanation_pt:
      "Applications: disponíveis via store.servicenow.com ou Open store no Application Manager; desenvolvidas por Parceiros ou pelo ServiceNow; normalmente entregues em um escopo customizado; geralmente pacotes maiores. Plugins: disponíveis apenas pelo menu All (All > Admin Center > Application Manager ou v_plugin.list); desenvolvidos exclusivamente pelo ServiceNow; podem estar em escopo customizado ou Global; variam de minúsculos a muito grandes.",
    source: "SNAF Module 2 · 2.1 Applications and plugins",
  },
  {
    id: 1112,
    domain: "Instance Configuration",
    type: "single",
    question:
      "An administrator activated a plugin in a development instance and now wants to remove it. What is true?",
    options: [
      "Plugins can be deactivated from the Application Manager at any time",
      "Once a plugin is activated it cannot be disabled or deactivated; administrators can only hide or restrict functionality through roles and ACLs, or use rollback contexts if supported",
      "Plugins are automatically deactivated when the instance is cloned",
      "Only ServiceNow Support can deactivate a plugin within 24 hours",
    ],
    correct: 1,
    explanation:
      "Once a plugin is activated it cannot be disabled or deactivated. Administrators can instead hide or restrict functionality by limiting access through roles and ACLs, use rollback contexts if the plugin supports them, and must test thoroughly in a non-production instance — there is no undo.",
    explanation_pt:
      "Depois que um plugin é ativado, ele não pode ser desabilitado ou desativado. O administrador pode apenas ocultar ou restringir a funcionalidade limitando acesso via roles e ACLs, usar rollback contexts se o plugin suportar, e deve testar bem em uma instância não-produtiva — não há undo.",
    source: "SNAF Module 2 · 2.1 Applications and plugins (notes)",
  },
  {
    id: 1113,
    domain: "Instance Configuration",
    type: "single",
    question:
      "What is the rule for activating plugins in a PRODUCTION instance?",
    options: [
      "Any administrator may activate published plugins directly in production",
      "Plugins cannot be activated directly in a production instance — test in non-production first, then request production activation via Now Support",
      "Plugins can be activated in production only during a maintenance window",
      "Production plugin activation requires only the security_admin role",
    ],
    correct: 1,
    explanation:
      "Plugins cannot be activated directly in a production instance. The correct process is to test in a non-production instance first and then request production activation via Now Support. Some restricted plugins also require a Request plugin action, and some require a paid subscription.",
    explanation_pt:
      "Plugins não podem ser ativados diretamente em uma instância de produção. O processo correto é testar primeiro em uma instância não-produtiva e depois solicitar a ativação em produção via Now Support. Alguns plugins restritos também exigem a ação Request plugin, e alguns exigem assinatura paga.",
    source: "SNAF Module 2 · 2.1 Applications and plugins (notes)",
  },
  {
    id: 1114,
    domain: "Instance Configuration",
    type: "single",
    question:
      "What is demo data in the context of plugin activation?",
    options: [
      "A read-only snapshot of production data",
      "Sample records that showcase the plugin's features and common use cases, recommended when installing on a development or test instance",
      "The audit history generated during activation",
      "A licence file required to activate the plugin",
    ],
    correct: 1,
    explanation:
      "Some plugins include demo data — sample records designed to showcase the plugin's features and demonstrate common use cases. It is recommended to load demo data when first installing a plugin on a development or test instance. Demo data can also be loaded later by repeating activation and selecting the demo data checkbox.",
    explanation_pt:
      "Alguns plugins incluem demo data — registros de exemplo criados para demonstrar os recursos do plugin e casos de uso comuns. Recomenda-se carregar demo data ao instalar um plugin pela primeira vez em uma instância de desenvolvimento ou teste. Demo data também pode ser carregado depois, repetindo a ativação e marcando o checkbox de demo data.",
    source: "SNAF Module 2 · 2.1 Applications and plugins (notes)",
  },
  {
    id: 1115,
    domain: "Instance Configuration",
    type: "single",
    question:
      "You try to edit a Business Rule and the platform prompts you to change the application scope. Why?",
    options: [
      "The record is locked by another user",
      "Application scoping restricts access to an application's files and data — you must be in the correct scope before you can modify its artifacts",
      "Business Rules can only be edited in the Global scope",
      "Your admin role has expired and must be elevated",
    ],
    correct: 1,
    explanation:
      "Application scoping protects applications by defining and restricting access to their files and data. You must switch to the appropriate scope with the Application Scope Picker before editing artifacts belonging to that application. Scope is configured on the custom application record and on each application Table record.",
    explanation_pt:
      "O application scoping protege aplicações definindo e restringindo o acesso a seus arquivos e dados. É necessário mudar para o escopo apropriado com o Application Scope Picker antes de editar artefatos daquela aplicação. O escopo é configurado no registro da aplicação customizada e em cada registro de Table da aplicação.",
    source: "SNAF Module 2 · 2.1 Application Scope",
  },
  {
    id: 1116,
    domain: "Instance Configuration",
    type: "multiple",
    question:
      "What does application scope ENSURE? (Choose 3)",
    options: [
      "A scoped application does not interrupt core business services",
      "Other applications cannot interfere with its functioning unless explicitly permitted",
      "Naming conflicts are prevented through a unique namespace identifier",
      "Scoped applications are automatically included in every update set",
    ],
    correct: [0, 1, 2],
    explanation:
      "Application scope ensures a scoped application does not interrupt core business services, that other applications cannot interfere with it unless explicitly permitted, and that naming conflicts are prevented through a unique namespace identifier assigned to each custom application.",
    explanation_pt:
      "O application scope garante que uma aplicação escopada não interrompa serviços críticos do negócio, que outras aplicações não interfiram nela sem permissão explícita e que conflitos de nomes sejam evitados por meio de um namespace único atribuído a cada aplicação customizada.",
    source: "SNAF Module 2 · 2.1 Application Scope (notes)",
  },
  {
    id: 1117,
    domain: "Instance Configuration",
    type: "single",
    question:
      "By default, what scope do custom applications have, and what is the recommendation for new table creation?",
    options: [
      "Global scope by default; new tables should stay Global",
      "Private (scoped) by default; use scoped apps for new table creation and consider transitioning old global apps to scoped apps over time",
      "Private by default, but tables must always be created in Global to be reportable",
      "Applications have no scope until an update set is committed",
    ],
    correct: 1,
    explanation:
      "By default all custom applications have a PRIVATE scope. Global apps can alter data you may not intend to alter, so ServiceNow recommends using scoped apps for new table creation and transitioning old global apps to scoped apps over time. Global scope identifies applications developed prior to application scoping.",
    explanation_pt:
      "Por padrão, todas as aplicações customizadas têm escopo PRIVADO. Aplicações Global podem alterar dados que você não pretende alterar, então o ServiceNow recomenda usar apps escopadas para criação de novas tabelas e migrar apps globais antigas para escopadas ao longo do tempo. O escopo Global identifica aplicações criadas antes do application scoping.",
    source: "SNAF Module 2 · 2.1 Application Scope / Module 7 · 7.2",
  },
  {
    id: 1118,
    domain: "Instance Configuration",
    type: "single",
    question:
      "A custom table created inside a scoped application receives which name prefix?",
    options: [
      "u_",
      "x_",
      "sys_",
      "cmdb_",
    ],
    correct: 1,
    explanation:
      "Custom tables created in a SCOPED application are prefixed with x_ (namespace identifier). Custom tables created in the GLOBAL application are prefixed with u_. Core tables shipped by ServiceNow have no such prefix (for example task, cmdb_ci).",
    explanation_pt:
      "Tabelas customizadas criadas em uma aplicação ESCOPADA recebem o prefixo x_ (identificador de namespace). Tabelas customizadas criadas na aplicação GLOBAL recebem o prefixo u_. Tabelas core entregues pelo ServiceNow não têm esse prefixo (por exemplo task, cmdb_ci).",
    source: "SNAF Module 4 · 4.1 Table types: Core vs. custom",
  },
  {
    id: 1119,
    domain: "Instance Configuration",
    type: "single",
    question:
      "Which system property controls whether the Insert and Insert and Stay UI actions are shown on task-derived forms?",
    options: [
      "glide.ui.focus_first_element",
      "glide.ui.show_template_bar",
      "glide.ui.task.insert",
      "glide.ui.form_multiple_splits",
    ],
    correct: 2,
    explanation:
      "UI properties controlling form behavior include: glide.ui.focus_first_element (form focus), glide.ui.show_template_bar (template bar), glide.ui.form_multiple_splits (multiple form splits) and glide.ui.task.insert (Insert and Insert and Stay, which are hidden by default on task-derived records such as incidents).",
    explanation_pt:
      "As UI properties que controlam o comportamento do formulário incluem: glide.ui.focus_first_element (foco do formulário), glide.ui.show_template_bar (barra de templates), glide.ui.form_multiple_splits (múltiplas divisões de formulário) e glide.ui.task.insert (Insert e Insert and Stay, ocultos por padrão em registros derivados de task, como incidents).",
    source: "SNAF Module 3 · 3.3 UI properties: Form behavior",
  },
  {
    id: 1120,
    domain: "Instance Configuration",
    type: "single",
    question:
      "Which system property is set to admin so that users with the itil role can no longer personalize forms?",
    options: [
      "glide.ui.personalize_form.role",
      "glide.ui.form.personalize",
      "glide.ui.itil.personalize",
      "glide.ui.form_role_restrict",
    ],
    correct: 0,
    explanation:
      "To disable form personalization for the itil role, navigate to sys_properties.list, find glide.ui.personalize_form.role and set the value to admin — the property specifies which role can access form personalization.",
    explanation_pt:
      "Para desabilitar a personalização de formulário para a role itil, navegue até sys_properties.list, localize glide.ui.personalize_form.role e defina o valor como admin — a propriedade especifica qual role pode acessar a personalização de formulários.",
    source: "SNAF Module 3 · 3.2 Personalize form view (notes)",
  },
  {
    id: 1121,
    domain: "Instance Configuration",
    type: "single",
    question:
      "A student instance has been inactive for over four hours. What happens and what must the user do?",
    options: [
      "The instance is deleted and must be re-provisioned",
      "The instance goes into hibernation; selecting the Wake button starts the waking process, which takes approximately 10–15 minutes",
      "The instance switches to read-only mode until an admin logs in",
      "Nothing happens — instances never hibernate",
    ],
    correct: 1,
    explanation:
      "No activity for 4 hours puts a student instance into hibernation mode. Selecting the Wake button starts the waking process; the 'Waking' page reflects progress and refreshes automatically. Waking takes approximately 10–15 minutes.",
    explanation_pt:
      "Quatro horas sem atividade colocam uma instância de estudante em modo de hibernação. Selecionar o botão Wake inicia o processo de despertar; a página 'Waking' mostra o progresso e atualiza automaticamente. O processo leva aproximadamente 10–15 minutos.",
    source: "SNAF Module 0 · Hibernating instances",
  },
  {
    id: 1122,
    domain: "Instance Configuration",
    type: "single",
    question:
      "Which three security modules do System Administrators typically use to manage instance security settings?",
    options: [
      "All > System Properties > Security; All > System Security > Access Control (ACL); All > System Security > High Security Settings",
      "All > System Definition > Dictionary; All > System Policy > Rules; All > User Administration > Roles",
      "All > Admin Center > Application Manager; All > Security Center; All > System Logs",
      "All > System Update Sets; All > System Import Sets; All > System Diagnostics",
    ],
    correct: 0,
    explanation:
      "The three primary security modules are: All > System Properties > Security (global security settings), All > System Security > Access Control (ACL) (table and field permissions) and All > System Security > High Security Settings (advanced security configuration).",
    explanation_pt:
      "Os três módulos principais de segurança são: All > System Properties > Security (configurações globais de segurança), All > System Security > Access Control (ACL) (permissões de tabela e campo) e All > System Security > High Security Settings (configurações avançadas de segurança).",
    source: "SNAF Module 4 · 4.2 User permissions summary (notes)",
  },
];
