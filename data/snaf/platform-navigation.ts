import { Question } from "../types";

/**
 * Domain: Platform Overview and Navigation (7% of the exam)
 * Source: SNAF Module 0 (Course Introduction), Module 1 (ServiceNow – The Modernized
 * Work Experience) and Module 3 §3.1 (list interaction for end users).
 */
export const platformNavigationQuestions: Question[] = [
  {
    id: 1001,
    domain: "Platform Overview and Navigation",
    type: "single",
    question:
      "The ServiceNow Platform is categorized as which type of cloud offering?",
    options: [
      "Infrastructure as a Service (IaaS)",
      "Application Platform as a Service (aPaaS)",
      "Software as a Service only (SaaS)",
      "Database as a Service (DBaaS)",
    ],
    correct: 1,
    explanation:
      "The ServiceNow Platform is an Application Platform as a Service (aPaaS): it contains all the tools and services required to build, deploy and manage applications. The client (browser) sends requests to the server, which processes them and returns a response.",
    explanation_pt:
      "A Plataforma ServiceNow é um Application Platform as a Service (aPaaS): contém todas as ferramentas e serviços necessários para construir, implantar e gerenciar aplicações. O cliente (navegador) envia requests para o servidor, que os processa e retorna uma response.",
    source: "SNAF Module 1 · 1.1 Introduction to Administration",
  },
  {
    id: 1002,
    domain: "Platform Overview and Navigation",
    type: "multiple",
    question:
      "Which tables are described as common tables found across MULTIPLE ServiceNow applications? (Choose 3)",
    options: [
      "User [sys_user]",
      "Incident [incident]",
      "Groups [sys_user_group]",
      "Tasks [task]",
      "HR Service Configuration [sn_hr_core_service]",
    ],
    correct: [0, 2, 3],
    explanation:
      "User [sys_user], Groups [sys_user_group] and Tasks [task] are shared across multiple applications. Incident [incident] is specific to ITSM and HR Service Configuration [sn_hr_core_service] is specific to HR Service Management.",
    explanation_pt:
      "User [sys_user], Groups [sys_user_group] e Tasks [task] são compartilhadas entre várias aplicações. Incident [incident] é específica do ITSM e HR Service Configuration [sn_hr_core_service] é específica do HR Service Management.",
    source: "SNAF Module 1 · 1.1 Key concepts – ServiceNow Platform",
  },
  {
    id: 1003,
    domain: "Platform Overview and Navigation",
    type: "single",
    question:
      "Which persona type can perform all requester actions AND view or modify approval records directed to them?",
    options: [
      "Fulfiller",
      "Specialized Administrator",
      "Approver",
      "System Administrator",
    ],
    correct: 2,
    explanation:
      "The Approver persona (approver_user role) can perform all requester actions and additionally view or modify approval records directed to them. Approvers hold no other roles — their access is limited to approval-related tasks.",
    explanation_pt:
      "A persona Approver (role approver_user) pode executar todas as ações de requester e, adicionalmente, visualizar ou modificar registros de aprovação direcionados a ela. Approvers não possuem outras roles — o acesso é limitado a tarefas de aprovação.",
    source: "SNAF Module 1 · 1.2 Persona types in the Platform",
  },
  {
    id: 1004,
    domain: "Platform Overview and Navigation",
    type: "single",
    question:
      "Which statement about the Requester (Employee Self Service) persona is correct?",
    options: [
      "Requesters are assigned the itil role so they can submit requests",
      "Requesters do not have roles, but can submit and manage their own requests and access public pages",
      "Requesters must be members of at least one group to submit a request",
      "Requesters are assigned the approver_user role by default",
    ],
    correct: 1,
    explanation:
      "Requesters (ESS users) have NO roles. They can still log in, submit and manage their own requests, view dashboards, browse the Service Catalog, read knowledge articles and take surveys — anything the administrator configured that does not require a specific role.",
    explanation_pt:
      "Requesters (usuários ESS) NÃO possuem roles. Ainda assim podem fazer login, enviar e gerenciar suas próprias solicitações, ver dashboards, navegar no Service Catalog, ler artigos de conhecimento e responder pesquisas — tudo aquilo que o administrador configurou e que não exige uma role específica.",
    source: "SNAF Module 1 · 1.2 Persona types in the Platform",
  },
  {
    id: 1005,
    domain: "Platform Overview and Navigation",
    type: "single",
    question:
      "In ITSM, which role opens up the access a Fulfiller needs to create, update and resolve incidents, plus related Knowledge and Service Catalog task records?",
    options: ["catalog_admin", "itil", "approver_user", "impersonator"],
    correct: 1,
    explanation:
      "A Fulfiller has a role tied to the area they work in. In ITSM specifically that role is itil, which grants the access staff need to create, update and resolve incidents, along with related modules such as Knowledge and Service Catalog task records.",
    explanation_pt:
      "Um Fulfiller possui uma role ligada à área em que atua. No ITSM especificamente essa role é a itil, que concede o acesso necessário para criar, atualizar e resolver incidents, além de módulos relacionados como Knowledge e registros de tarefa do Service Catalog.",
    source: "SNAF Module 1 · 1.2 Persona types in the Platform",
  },
  {
    id: 1006,
    domain: "Platform Overview and Navigation",
    type: "single",
    question:
      "An administrator wants to verify what a user can see and do in the platform. What is the recommended approach, and what is its main limitation?",
    options: [
      "Log in with the user's password; there is no limitation",
      "Impersonate the user; but impersonating a user with an application-specific admin role does not grant access to features protected by that role",
      "Delegate the user's roles to yourself; but delegation expires after 24 hours",
      "Read the ACLs on the user record; but ACLs do not show module access",
    ],
    correct: 1,
    explanation:
      "Users with the admin or impersonator role can impersonate other users to test and validate access. Limitation: if you impersonate a user with an application-specific admin role (HR admin, SIR admin), you do NOT gain access to features or data protected by that role unless you already have the permissions. Admins also cannot impersonate a security_admin to elevate their own privileges.",
    explanation_pt:
      "Usuários com a role admin ou impersonator podem impersonar outros usuários para testar e validar acessos. Limitação: ao impersonar um usuário com uma role de admin específica de aplicação (HR admin, SIR admin), você NÃO ganha acesso a recursos ou dados protegidos por essa role, a menos que já tenha as permissões. Admins também não podem impersonar um security_admin para elevar seus próprios privilégios.",
    source: "SNAF Module 1 · 1.2 User impersonation",
  },
  {
    id: 1007,
    domain: "Platform Overview and Navigation",
    type: "single",
    question:
      "What is the difference between impersonation and delegation in ServiceNow?",
    options: [
      "They are the same feature with different names",
      "Impersonation is used by admins to test and troubleshoot access (acting as the user in the UI); delegation lets a designated user perform actions such as approvals on behalf of another without logging in as them",
      "Impersonation requires the delegate role; delegation requires the impersonator role",
      "Delegation is used for testing; impersonation is used in workflow scenarios",
    ],
    correct: 1,
    explanation:
      "Impersonation is used by administrators to test and troubleshoot user access — the impersonator acts as the user within the platform UI. Delegation is used in workflow scenarios where a designated delegate performs actions (such as approvals) on behalf of the delegating user; delegates do NOT log in as the other user.",
    explanation_pt:
      "Impersonation é usada por administradores para testar e diagnosticar o acesso de usuários — o impersonator age como o usuário dentro da UI da plataforma. Delegation é usada em cenários de workflow, onde um delegado designado executa ações (como aprovações) em nome do usuário delegante; delegados NÃO fazem login como o outro usuário.",
    source: "SNAF Module 1 · 1.2 Persona types in the Platform (notes)",
  },
  {
    id: 1008,
    domain: "Platform Overview and Navigation",
    type: "single",
    question:
      "Which system property must be added and set to true so that impersonation events for interactive sessions are written to the System Log?",
    options: [
      "glide.sys.log_impersonation",
      "glide.ui.impersonate.audit",
      "glide.security.log_impersonation",
      "glide.sys.impersonation.enabled",
    ],
    correct: 0,
    explanation:
      "Impersonation activities are recorded in the System Log. To enable impersonation logging for interactive sessions, the system property glide.sys.log_impersonation must be added and set to true. Non-interactive impersonation is controlled by glide.sys.log_impersonation.non_interactive.",
    explanation_pt:
      "As atividades de impersonation são registradas no System Log. Para habilitar o log de impersonation em sessões interativas, a propriedade de sistema glide.sys.log_impersonation deve ser adicionada e definida como true. A impersonation não interativa é controlada por glide.sys.log_impersonation.non_interactive.",
    source: "SNAF Module 1 · 1.2 User impersonation (notes)",
  },
  {
    id: 1009,
    domain: "Platform Overview and Navigation",
    type: "single",
    question:
      "Which ServiceNow reserved account is used for unauthenticated / pre-authentication actions, such as updating Failed Login Attempts?",
    options: [
      "The system user",
      "The guest user",
      "The admin user",
      "The impersonator user",
    ],
    correct: 1,
    explanation:
      "The Guest User is used for unauthenticated/pre-authentication actions — for example, Failed Login Attempts updated by the guest user. The System User performs automated tasks (for example, Last login fields updated by the system user). Neither is added to groups.",
    explanation_pt:
      "O Guest User é usado para ações não autenticadas / pré-autenticação — por exemplo, Failed Login Attempts atualizados pelo guest user. O System User executa tarefas automatizadas (por exemplo, campos Last login atualizados pelo system user). Nenhum dos dois é adicionado a grupos.",
    source: "SNAF Module 1 · 1.2 Users and Groups",
  },
  {
    id: 1010,
    domain: "Platform Overview and Navigation",
    type: "single",
    question:
      "A role has been assigned to a group. An administrator needs to revoke that role from one specific user in the group. What must be done?",
    options: [
      "Delete the role from the user's Roles related list",
      "Remove the user from the group to which the role is assigned",
      "Deactivate the role record on the sys_user_role table",
      "Add an exclusion condition to the role record",
    ],
    correct: 1,
    explanation:
      "Roles inherited from a group cannot be removed directly from a user record. To revoke that role, the user must be removed from the group that carries it. This is why best practice is to assign roles to groups, then manage membership.",
    explanation_pt:
      "Roles herdadas de um grupo não podem ser removidas diretamente do registro do usuário. Para revogar essa role, o usuário deve ser removido do grupo que a possui. Por isso a boa prática é atribuir roles a grupos e depois gerenciar a associação de membros.",
    source: "SNAF Module 1 · 1.2 Roles",
  },
  {
    id: 1011,
    domain: "Platform Overview and Navigation",
    type: "single",
    question:
      "The catalog_admin role contains the user_criteria_admin and catalog roles. What happens when a group is assigned the catalog_admin role?",
    options: [
      "Only the catalog_admin permissions are granted; contained roles must be added separately",
      "The group inherits the permissions of all three roles automatically",
      "The contained roles are granted only after the next login",
      "Contained roles are ignored when a role is assigned to a group",
    ],
    correct: 1,
    explanation:
      "Roles can contain other roles. Assigning catalog_admin automatically grants the permissions of user_criteria_admin and catalog as well. This hierarchy simplifies access management by bundling related permissions.",
    explanation_pt:
      "Roles podem conter outras roles. Atribuir catalog_admin concede automaticamente também as permissões de user_criteria_admin e catalog. Essa hierarquia simplifica a gestão de acessos ao agrupar permissões relacionadas.",
    source: "SNAF Module 1 · 1.2 Roles / Assigning roles",
  },
  {
    id: 1012,
    domain: "Platform Overview and Navigation",
    type: "single",
    question:
      "A user has NO roles assigned. Which statement is true about what they can access?",
    options: [
      "They cannot log in to the instance at all",
      "They can log in and access anything the administrator configured that does not require a specific role — dashboards, Service Catalog, knowledge articles and surveys",
      "They can only access the Employee Center portal, never the core platform",
      "They automatically receive the itil role at first login",
    ],
    correct: 1,
    explanation:
      "Users without assigned roles can still log in and access common actions such as viewing a dashboard, accessing the Service Catalog, viewing knowledge articles and taking surveys. If no role is specified on an application menu or module, it is available to all users — including self-service users.",
    explanation_pt:
      "Usuários sem roles atribuídas ainda podem fazer login e acessar ações comuns como ver um dashboard, acessar o Service Catalog, ler artigos de conhecimento e responder pesquisas. Se nenhuma role for especificada em um application menu ou módulo, ele fica disponível para todos os usuários — inclusive usuários self-service.",
    source: "SNAF Module 1 · 1.2 Assigning roles (notes)",
  },
  {
    id: 1013,
    domain: "Platform Overview and Navigation",
    type: "single",
    question:
      "Which interface provides agents a unified view for managing the lifecycle of ITSM task records such as incidents, requests and walk-ups?",
    options: [
      "Employee Center",
      "Service Operations Workspace",
      "Knowledge Portal",
      "CMDB Workspace",
    ],
    correct: 1,
    explanation:
      "Service Operations Workspace provides a unified interface for managing multiple ITSM workflows and the lifecycle of task records (incidents, requests, walk-ups). Employee Center is the centralized self-service portal for employee needs across HR, IT and Legal.",
    explanation_pt:
      "O Service Operations Workspace fornece uma interface unificada para gerenciar múltiplos fluxos de ITSM e o ciclo de vida de registros de tarefa (incidents, requests, walk-ups). O Employee Center é o portal self-service centralizado para necessidades dos funcionários em RH, TI e Jurídico.",
    source: "SNAF Module 1 · 1.3 ServiceNow AI Platform applications",
  },
  {
    id: 1014,
    domain: "Platform Overview and Navigation",
    type: "single",
    question:
      "Which roles are required to view the Application usage overview and ServiceNow Store usage overview dashboards (Subscription Management)?",
    options: [
      "itil or itil_admin",
      "admin or usage_admin",
      "catalog_admin or subscription_admin",
      "security_admin only",
    ],
    correct: 1,
    explanation:
      "Only users with the admin or usage_admin role can view the Application usage overview and ServiceNow Store usage overview dashboards, which are used to monitor per-user subscription usage.",
    explanation_pt:
      "Apenas usuários com a role admin ou usage_admin podem visualizar os dashboards Application usage overview e ServiceNow Store usage overview, usados para monitorar o uso das assinaturas por usuário.",
    source: "SNAF Module 1 · 1.3 Subscription Management (notes)",
  },
  {
    id: 1015,
    domain: "Platform Overview and Navigation",
    type: "single",
    question:
      "A filter condition in a list is made up of which three components?",
    options: [
      "Table, View, Value",
      "Field, Operator, Value",
      "Field, Condition, Script",
      "Column, Row, Value",
    ],
    correct: 1,
    explanation:
      "A filter condition consists of a Field (choice list based on the table and access rights, including dot-walked fields), an Operator (choice list based on the field type) and a Value (text entry or choice list depending on field type).",
    explanation_pt:
      "Uma condição de filtro é formada por um Field (lista de escolha baseada na tabela e nos direitos de acesso, incluindo campos por dot-walking), um Operator (lista baseada no tipo do campo) e um Value (entrada de texto ou lista de escolha, conforme o tipo do campo).",
    source: "SNAF Module 3 · 3.1 List filters",
  },
  {
    id: 1016,
    domain: "Platform Overview and Navigation",
    type: "single",
    question:
      "In a list, you type 'Email' into the Short description search box and press Enter, then you type '*email'. What is the difference in the resulting filter?",
    options: [
      "'Email' creates 'Short description starts with Email'; '*email' creates 'Short description contains email'",
      "Both create a 'contains' condition",
      "'Email' creates an 'is' condition; '*email' creates a 'starts with' condition",
      "The asterisk is ignored by the list search box",
    ],
    correct: 0,
    explanation:
      "Typing a term in the list search box builds a 'starts with' condition. Prefixing the term with an asterisk (*) changes it to a 'contains' condition. The generated conditions are visible in the breadcrumbs above the list.",
    explanation_pt:
      "Digitar um termo na caixa de busca da lista cria uma condição 'starts with'. Prefixar o termo com asterisco (*) muda para uma condição 'contains'. As condições geradas ficam visíveis nos breadcrumbs acima da lista.",
    source: "SNAF Module 3 · 3.1 List filters (demo notes)",
  },
  {
    id: 1017,
    domain: "Platform Overview and Navigation",
    type: "single",
    question:
      "Which statement about the List Editor is correct?",
    options: [
      "It can only edit one record at a time and only for contiguous rows",
      "It supports contiguous and non-contiguous editing, allowing values to be updated on multiple records at once without opening them",
      "It requires the personalize_list role to be used",
      "It bypasses field-level security so any field can be edited",
    ],
    correct: 1,
    explanation:
      "The List Editor allows a field value to be edited in a list without opening the record, and supports both contiguous and non-contiguous editing so multiple records can be updated at once. Some fields may not be editable due to type or security constraints, and a message appears when access is restricted.",
    explanation_pt:
      "O List Editor permite editar o valor de um campo na lista sem abrir o registro, e suporta edição contígua e não contígua, permitindo atualizar vários registros de uma vez. Alguns campos podem não ser editáveis por tipo ou restrições de segurança, e uma mensagem aparece quando o acesso é restrito.",
    source: "SNAF Module 3 · 3.1 Edit data in the list",
  },
  {
    id: 1018,
    domain: "Platform Overview and Navigation",
    type: "single",
    question:
      "What is the difference between personalizing a list and configuring a list?",
    options: [
      "Personalization changes the list for everyone; configuration changes it only for you",
      "Personalization (gear icon) changes the layout only for the logged-in user; configuration (Configure > List Layout) changes it for everyone who sees that view",
      "Both apply to all users, but personalization is temporary",
      "Personalization requires the admin role; configuration requires personalize_list",
    ],
    correct: 1,
    explanation:
      "Personalize List (gear icon) modifies the layout for an individual user only and does not affect the platform default — personalization is for the PERSON. Configuration (Configure > List Layout) applies to the view for everyone. Global changes are not reflected in a personalized list until the user selects Reset to Column Defaults.",
    explanation_pt:
      "Personalize List (ícone de engrenagem) modifica o layout apenas para um usuário e não afeta o padrão da plataforma — personalização é para a PESSOA. A configuração (Configure > List Layout) aplica-se à view para todos. Mudanças globais não aparecem em uma lista personalizada até o usuário selecionar Reset to Column Defaults.",
    source: "SNAF Module 3 · 3.1 List personalization",
  },
  {
    id: 1019,
    domain: "Platform Overview and Navigation",
    type: "single",
    question:
      "When editing a tag, which Viewable by option requires the admin or tags_admin role?",
    options: ["Me", "Groups and Users", "Everyone", "All options require admin"],
    correct: 2,
    explanation:
      "Tags can be shared with Me (owner only), Groups and Users, or Everyone. To use the Everyone option, the user must have the admin or tags_admin role. Tagged records can be reviewed in the My Tagged Documents module.",
    explanation_pt:
      "Tags podem ser compartilhadas com Me (apenas o dono), Groups and Users ou Everyone. Para usar a opção Everyone, o usuário precisa da role admin ou tags_admin. Registros com tags podem ser vistos no módulo My Tagged Documents.",
    source: "SNAF Module 3 · 3.1 Tags – Personalize or configure",
  },
  {
    id: 1020,
    domain: "Platform Overview and Navigation",
    type: "single",
    question:
      "When a list is displayed to a user for the first time, which field determines the initial sort order FIRST?",
    options: [
      "The number field",
      "The order field, if present in the table",
      "The name field",
      "The display field specified for the table",
    ],
    correct: 1,
    explanation:
      "The sort priority is: (1) the order field if present, (2) the number field if present, (3) the name field if present, (4) the display field specified for the table.",
    explanation_pt:
      "A prioridade de ordenação é: (1) o campo order, se existir; (2) o campo number, se existir; (3) o campo name, se existir; (4) o display field definido para a tabela.",
    source: "SNAF Module 3 · 3.1 List views (notes)",
  },
];
