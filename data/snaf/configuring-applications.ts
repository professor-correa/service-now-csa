import { Question } from "../types";

/**
 * Domain: Configuring Applications for Collaboration (20% of the exam)
 * Source: SNAF Module 3 (Configure Applications for Business), Module 6 (Enable
 * Productivity) and Module 7 §7.1 (UI policies, data policies, client scripts,
 * business rules and UI actions).
 */
export const configuringApplicationsQuestions: Question[] = [
  {
    id: 1201,
    domain: "Configuring Applications for Collaboration",
    type: "single",
    question:
      "In the List Collector used by Form Layout / List Layout, what does an available item shown in GREEN followed by a plus (+) sign represent?",
    options: [
      "A mandatory field",
      "A related table you can dot-walk into",
      "A field that is already selected",
      "A read-only field",
    ],
    correct: 1,
    explanation:
      "In the List Collector, available items that are green and followed by a plus (+) sign represent related tables (reference fields). To access the fields on those related tables you use dot-walking.",
    explanation_pt:
      "No List Collector, itens disponíveis em verde seguidos de um sinal de mais (+) representam tabelas relacionadas (campos de referência). Para acessar os campos dessas tabelas relacionadas, usa-se dot-walking.",
    source: "SNAF Module 3 · 3.1 Using the list collector",
  },
  {
    id: 1202,
    domain: "Configuring Applications for Collaboration",
    type: "single",
    question:
      "Dot-walking is available in Form Layout but NOT supported in which interface?",
    options: ["Form Design", "Form Builder", "List Layout", "Visualization Designer"],
    correct: 0,
    explanation:
      "Dot-walking retrieves information from related tables through reference fields. It is available when using Form Layout, List Views, Form Builder (via 'Add a related field'), Platform Analytics and Workflow Studio — but it is NOT supported in Form Design.",
    explanation_pt:
      "Dot-walking obtém informações de tabelas relacionadas por meio de campos de referência. Está disponível em Form Layout, List Views, Form Builder (via 'Add a related field'), Platform Analytics e Workflow Studio — mas NÃO é suportado no Form Design.",
    source: "SNAF Module 3 · 3.1 Using the list collector (notes)",
  },
  {
    id: 1203,
    domain: "Configuring Applications for Collaboration",
    type: "single",
    question:
      "You want to add a column to the Incident list for ALL users and also create a brand-new field on the table while doing it. Which path do you take?",
    options: [
      "Personalize List (gear icon) > Add column",
      "Column options menu > Configure > List Layout, then use the Create new field section of the List Collector",
      "Configure > Related Lists",
      "User menu > Preferences > Lists",
    ],
    correct: 1,
    explanation:
      "Select any column options menu icon and choose Configure > List Layout. The List Collector opens, letting you add, remove and reorder fields for that view, dot-walk to related tables, create a new view, and create a brand-new field using the Create new field section (name, type, length) followed by Add.",
    explanation_pt:
      "Selecione o ícone do menu de opções de qualquer coluna e escolha Configure > List Layout. O List Collector abre, permitindo adicionar, remover e reordenar campos daquela view, fazer dot-walk para tabelas relacionadas, criar uma nova view e criar um campo novo usando a seção Create new field (nome, tipo, tamanho) seguida de Add.",
    source: "SNAF Module 3 · 3.1 Configure list layout",
  },
  {
    id: 1204,
    domain: "Configuring Applications for Collaboration",
    type: "single",
    question:
      "Which role, in addition to admin, allows a user to customize the columns of a list FOR ALL USERS?",
    options: ["personalize_list", "itil_admin", "list_admin", "personalize_dictionary"],
    correct: 0,
    explanation:
      "Users with the admin or personalize_list role can customize the columns (fields) in a list for all users — adding or removing columns and changing their order through Configure > List Layout.",
    explanation_pt:
      "Usuários com a role admin ou personalize_list podem customizar as colunas (campos) de uma lista para todos os usuários — adicionando, removendo e reordenando colunas via Configure > List Layout.",
    source: "SNAF Module 3 · 3.1 Configure list layout (notes)",
  },
  {
    id: 1205,
    domain: "Configuring Applications for Collaboration",
    type: "single",
    question:
      "Which statement about views is correct?",
    options: [
      "Changing a list view changes the number of records displayed",
      "In list views the number of records stays the same, but the fields shown and their order can vary by view",
      "Views can only be created by ServiceNow, not by administrators",
      "A form view and a list view are always identical",
    ],
    correct: 1,
    explanation:
      "Views allow the same list or form to be displayed in multiple configurations for different roles or use cases. In list views the number of records displayed remains the same — only the fields and their order change. When a non-default view is selected, the view name appears in brackets next to the list title or record type.",
    explanation_pt:
      "Views permitem exibir a mesma lista ou formulário em várias configurações, para diferentes roles ou casos de uso. Em list views o número de registros permanece o mesmo — apenas os campos e a ordem mudam. Quando uma view diferente da padrão é selecionada, o nome dela aparece entre colchetes ao lado do título da lista ou do tipo de registro.",
    source: "SNAF Module 3 · 3.1 List views / 3.2 Form views",
  },
  {
    id: 1206,
    domain: "Configuring Applications for Collaboration",
    type: "single",
    question:
      "A newly created application menu does not appear in the All menu. What is the most likely reason?",
    options: [
      "The menu record needs to be published",
      "The application menu contains no modules yet",
      "The menu must be added to a portal",
      "The instance cache must be flushed by ServiceNow Support",
    ],
    correct: 1,
    explanation:
      "Application menus are containers for modules. A new application menu will not appear in the All menu until it contains at least one module. The Modules related list is not accessible until the application menu record has been saved.",
    explanation_pt:
      "Application menus são contêineres para módulos. Um novo application menu não aparece no menu All até conter pelo menos um módulo. A related list Modules só fica acessível depois que o registro do application menu é salvo.",
    source: "SNAF Module 3 · 3.1 Create application menus and modules",
  },
  {
    id: 1207,
    domain: "Configuring Applications for Collaboration",
    type: "single",
    question:
      "Two modules were created without an Order value. How will they appear in the application menu?",
    options: [
      "In creation order",
      "Alphabetically",
      "Randomly on each page load",
      "They will not appear until an order is set",
    ],
    correct: 1,
    explanation:
      "If no Order value is specified, modules appear alphabetically. Best practice is to use Order values of 10/20/30 or 100/200/300 so future modules can be inserted without renumbering everything.",
    explanation_pt:
      "Se nenhum valor de Order for especificado, os módulos aparecem em ordem alfabética. A boa prática é usar valores 10/20/30 ou 100/200/300 para que módulos futuros possam ser inseridos sem renumerar tudo.",
    source: "SNAF Module 3 · 3.1 Create application menus and modules (notes)",
  },
  {
    id: 1208,
    domain: "Configuring Applications for Collaboration",
    type: "single",
    question:
      "In a Workspace, list categories appear in the list pane but clicking one does not retrieve records. Why?",
    options: [
      "The category is inactive",
      "List categories only group records — the filtered lists (UX Lists) under each category are what actually retrieve and display records",
      "The user lacks the workspace_admin role",
      "Categories require a database view to return data",
    ],
    correct: 1,
    explanation:
      "In workspaces, list categories appear in the list pane but do NOT retrieve records when clicked. The filtered lists (UX Lists) under each category retrieve and display records. When creating a new list category you must add list filters, otherwise the category will not appear in the list pane.",
    explanation_pt:
      "Em workspaces, as list categories aparecem no painel de listas mas NÃO retornam registros ao serem clicadas. As listas filtradas (UX Lists) sob cada categoria é que buscam e exibem os registros. Ao criar uma nova list category é obrigatório adicionar list filters, senão a categoria não aparece no painel.",
    source: "SNAF Module 3 · 3.1 Workspace list",
  },
  {
    id: 1209,
    domain: "Configuring Applications for Collaboration",
    type: "single",
    question:
      "How do you configure the fields shown on a Service Operations Workspace list?",
    options: [
      "Use Configure > List Layout directly inside the workspace",
      "You cannot use Configure from the workspace — use the classic list view and edit the view named 'Service Operations Workspace'",
      "Use Theme Builder to select the workspace columns",
      "Workspace lists cannot be configured, only personalized",
    ],
    correct: 1,
    explanation:
      "You cannot use the Configure option to configure lists from the Workspace. You must use the classic list view and edit the view called 'Service Operations Workspace'. Dragging column handles in a workspace creates personalizations, which is not possible in the classic view.",
    explanation_pt:
      "Não é possível usar a opção Configure para configurar listas dentro do Workspace. É preciso usar a list view clássica e editar a view chamada 'Service Operations Workspace'. Arrastar as alças das colunas no workspace cria personalizações, o que não é possível na visão clássica.",
    source: "SNAF Module 3 · 3.1 Workspace list (notes)",
  },
  {
    id: 1210,
    domain: "Configuring Applications for Collaboration",
    type: "multiple",
    question:
      "Besides fields, which of the following are elements that can appear on a core platform FORM? (Choose 4)",
    options: [
      "Form sections",
      "Formatters",
      "Related lists",
      "UI actions",
      "Import set tables",
    ],
    correct: [0, 1, 2, 3],
    explanation:
      "A form displays fields from ONE record. Form elements include: form header, related lists, related links, UI actions, formatters, variables, annotations, fields, field labels and form sections.",
    explanation_pt:
      "Um formulário exibe campos de UM registro. Elementos do formulário incluem: form header, related lists, related links, UI actions, formatters, variables, annotations, fields, field labels e form sections.",
    source: "SNAF Module 3 · 3.2 Core Platform Form overview",
  },
  {
    id: 1211,
    domain: "Configuring Applications for Collaboration",
    type: "single",
    question:
      "When do Related Lists appear on a form?",
    options: [
      "Immediately when the form is opened for a new record",
      "Only after the record has been saved to the database",
      "Only if the user has the admin role",
      "Only in Workspace forms",
    ],
    correct: 1,
    explanation:
      "Related lists display records from tables that have a relationship with the current record, presented as tabs at the bottom of the form. Importantly, related lists only appear AFTER the record has been saved to the database.",
    explanation_pt:
      "Related lists exibem registros de tabelas relacionadas ao registro atual, apresentadas como abas na parte inferior do formulário. Importante: related lists só aparecem DEPOIS que o registro é salvo no banco de dados.",
    source: "SNAF Module 3 · 3.2 Core Platform Form overview / Related lists",
  },
  {
    id: 1212,
    domain: "Configuring Applications for Collaboration",
    type: "single",
    question:
      "Where must related lists be configured, and what do the changes apply to?",
    options: [
      "From the list; changes apply to all views",
      "From the FORM (Configure > Related Lists); changes apply to the selected VIEW only",
      "From the dictionary entry; changes apply to the table",
      "From Theme Builder; changes apply per user",
    ],
    correct: 1,
    explanation:
      "Related lists must be configured from the FORM using Configure > Related Lists — this is not possible from the list. Changes are specific to the selected view. Items at the top of the Selected column appear as tabs on the left; items at the bottom appear on the right.",
    explanation_pt:
      "Related lists devem ser configuradas a partir do FORMULÁRIO, usando Configure > Related Lists — não é possível fazer isso pela lista. As mudanças são específicas da view selecionada. Itens no topo da coluna Selected aparecem como abas à esquerda; itens no fim aparecem à direita.",
    source: "SNAF Module 3 · 3.2 Form configuration: Related lists",
  },
  {
    id: 1213,
    domain: "Configuring Applications for Collaboration",
    type: "single",
    question:
      "Which form element displays information that is NOT stored as a field on the record — for example the Activity Stream, Process Flow or CI Relations?",
    options: ["Annotation", "Formatter", "Variable", "Embedded list"],
    correct: 1,
    explanation:
      "A formatter is a form element used to display information that is not a field in the record. Platform formatters include Activity (activity stream), Process Flow, Parent Breadcrumbs, Approval Summarizer and CI Relations.",
    explanation_pt:
      "Um formatter é um elemento de formulário usado para exibir informações que não são um campo do registro. Formatters da plataforma incluem Activity (activity stream), Process Flow, Parent Breadcrumbs, Approval Summarizer e CI Relations.",
    source: "SNAF Module 3 · 3.2 Formatters",
  },
  {
    id: 1214,
    domain: "Configuring Applications for Collaboration",
    type: "multiple",
    question:
      "Which components — besides fields — can be added in the Form Builder? (Choose 4)",
    options: [
      "Sections",
      "Formatters",
      "Annotations",
      "Embedded lists",
      "Access controls",
    ],
    correct: [0, 1, 2, 3],
    explanation:
      "Form elements available in Form Builder include fields plus Sections, Formatters, Annotations and Embedded Lists. ACLs are viewed (not created) from Form Builder through Policies and rules.",
    explanation_pt:
      "Os elementos disponíveis no Form Builder incluem campos além de Sections, Formatters, Annotations e Embedded Lists. ACLs podem ser visualizadas (não criadas) no Form Builder por meio de Policies and rules.",
    source: "SNAF Module 3 · 3.2 Form Builder components",
  },
  {
    id: 1215,
    domain: "Configuring Applications for Collaboration",
    type: "multiple",
    question:
      "In Form Builder, selecting 'Policies and rules' allows the administrator to review which of the following for the current form? (Choose 4)",
    options: [
      "UI Policies",
      "Access Control rules",
      "Client Scripts",
      "Business Rules",
      "Update sets",
    ],
    correct: [0, 1, 2, 3],
    explanation:
      "The Policies and rules view in Form Builder lists UI Policies, Access Control rules, Client Scripts, Business Rules and Workspace View Rules associated with the form. Select Forms in the header to return to the layout view.",
    explanation_pt:
      "A visão Policies and rules no Form Builder lista UI Policies, Access Control rules, Client Scripts, Business Rules e Workspace View Rules associadas ao formulário. Selecione Forms no cabeçalho para voltar à visão de layout.",
    source: "SNAF Module 3 · 3.2 Form Builder",
  },
  {
    id: 1216,
    domain: "Configuring Applications for Collaboration",
    type: "single",
    question:
      "What is the caution given about adding the SAME field to multiple sections of a form?",
    options: [
      "It is fine and often recommended for usability",
      "It is not recommended unless the field is configured to display read-only data — multiple editable instances can cause data loss and interfere with UI and data policies",
      "It is blocked by the platform and cannot be done",
      "It only causes problems in Workspace forms",
    ],
    correct: 1,
    explanation:
      "It is not recommended to add the same field to multiple sections of a form unless the field is configured to display read-only data. Multiple instances of an editable field can lead to data loss and interfere with the proper functioning of UI and data policies.",
    explanation_pt:
      "Não é recomendado adicionar o mesmo campo em várias seções de um formulário, a menos que o campo seja configurado como somente leitura. Múltiplas instâncias de um campo editável podem causar perda de dados e interferir no funcionamento correto de UI policies e data policies.",
    source: "SNAF Module 3 · 3.2 Form configuration (notes)",
  },
  {
    id: 1217,
    domain: "Configuring Applications for Collaboration",
    type: "single",
    question:
      "Which two methods are described for adding a NEW field to a table?",
    options: [
      "Form Builder (+Add a field) and the Data Dictionary (System Definition > Tables > Columns tab > New)",
      "Update Sets and Import Sets",
      "Theme Builder and Catalog Builder",
      "ACL editor and Flow Designer",
    ],
    correct: 0,
    explanation:
      "New fields can be added through Form Builder (open the record, Configure > Form Builder, +Add a field and complete the information) or through the Data Dictionary (All > System Definition > Tables, open the table, Columns tab, New, complete the Dictionary Entry form). They can also be added while configuring a List Layout.",
    explanation_pt:
      "Novos campos podem ser criados pelo Form Builder (abrir o registro, Configure > Form Builder, +Add a field e preencher as informações) ou pelo Data Dictionary (All > System Definition > Tables, abrir a tabela, aba Columns, New, preencher o Dictionary Entry). Também podem ser criados ao configurar um List Layout.",
    source: "SNAF Module 3 · 3.2 Adding new fields to a form",
  },
  {
    id: 1218,
    domain: "Configuring Applications for Collaboration",
    type: "single",
    question:
      "How can you tell the difference between a choice field and a reference field on a form?",
    options: [
      "Choice fields show a magnifying glass; reference fields show a dropdown arrow",
      "Choice fields show a dropdown arrow and store predefined options within the current table; reference fields show a magnifying glass and link to data stored in a separate table",
      "Both look identical and can only be distinguished in the dictionary",
      "Reference fields are always mandatory; choice fields are always optional",
    ],
    correct: 1,
    explanation:
      "Choice lists are recognizable by the dropdown arrow and store predefined options within the current table (for example Category or Priority on Incident). Reference fields are identifiable by the magnifying glass icon and link to data stored in separate tables (for example the Service or Configuration Item fields).",
    explanation_pt:
      "Choice lists são reconhecidas pela seta de dropdown e armazenam opções predefinidas dentro da própria tabela (por exemplo Category ou Priority em Incident). Reference fields são identificados pelo ícone de lupa e apontam para dados armazenados em outra tabela (por exemplo os campos Service ou Configuration Item).",
    source: "SNAF Module 3 · 3.3 Configuring data in choice and reference lists",
  },
  {
    id: 1219,
    domain: "Configuring Applications for Collaboration",
    type: "single",
    question:
      "You need to add a new Subcategory value that appears ONLY when Category is Software. What is the correct approach?",
    options: [
      "Right-click the Subcategory label and select Configure Choices without setting a Category",
      "Select Software in the Category field FIRST, then right-click Subcategory > Configure Choices and add the new item",
      "Add the value directly to the sys_choice table with no dependent value",
      "Create a UI Policy that hides the other subcategories",
    ],
    correct: 1,
    explanation:
      "Subcategory is a DEPENDENT field on Category. To configure only the subcategories for a given category you must first select the value for the parent field (Category = Software) and then right-click Subcategory > Configure Choices, enter the new item and select Add.",
    explanation_pt:
      "Subcategory é um campo DEPENDENTE de Category. Para configurar apenas as subcategorias de uma categoria específica, é preciso primeiro selecionar o valor do campo pai (Category = Software) e depois clicar com o botão direito em Subcategory > Configure Choices, digitar o novo item e selecionar Add.",
    source: "SNAF Module 3 · 3.3 Configure choice lists",
  },
  {
    id: 1220,
    domain: "Configuring Applications for Collaboration",
    type: "single",
    question:
      "What does it mean for a choice or reference field to be declared DEPENDENT on another field?",
    options: [
      "The field becomes mandatory when the other field is populated",
      "Its available values are limited based on the value selected in the field it depends on",
      "The field is hidden until the other field is populated",
      "Its value is copied from the other field",
    ],
    correct: 1,
    explanation:
      "A choice or reference field can be declared dependent on another field on the same table. Dependent fields limit their available values based on the value in the field they depend on — for example, selecting Software in Category limits the choices available in Subcategory.",
    explanation_pt:
      "Um campo de choice ou reference pode ser declarado dependente de outro campo da mesma tabela. Campos dependentes limitam seus valores disponíveis com base no valor do campo do qual dependem — por exemplo, selecionar Software em Category limita as opções disponíveis em Subcategory.",
    source: "SNAF Module 3 · 3.3 Choice Lists",
  },
  {
    id: 1221,
    domain: "Configuring Applications for Collaboration",
    type: "single",
    question:
      "Which statement about templates is correct?",
    options: [
      "Templates permanently change the default values stored in the dictionary",
      "Templates pre-fill form fields to simplify record creation, can be applied manually or automatically, and fields updated by a template are marked with a checkmark icon",
      "Templates can only be applied in Workspace, not in the core platform",
      "Templates cannot be shared with groups",
    ],
    correct: 1,
    explanation:
      "Templates allow form fields to be populated automatically, simplifying record creation. Use the template bar (More options > Show/Hide Template Bar) to apply, create or edit templates. Fields updated by a template are marked with a checkmark icon. Templates can bypass mandatory fields, UI policies and condition-based flows, so template creation should be restricted to select groups.",
    explanation_pt:
      "Templates permitem preencher campos automaticamente, simplificando a criação de registros. Use a barra de templates (More options > Show/Hide Template Bar) para aplicar, criar ou editar templates. Campos preenchidos por template ficam marcados com um ícone de check. Templates podem burlar campos obrigatórios, UI policies e fluxos condicionais, por isso a criação deve ser restrita a grupos selecionados.",
    source: "SNAF Module 3 · 3.2 Templates: Core form",
  },
  {
    id: 1222,
    domain: "Configuring Applications for Collaboration",
    type: "single",
    question:
      "Which statement about personalizing a FORM is correct?",
    options: [
      "You can add fields that are not currently on the form, just like in lists",
      "You can only hide or show fields already on the form, and mandatory fields cannot be hidden",
      "Personalizing a form changes it for every user with the same role",
      "Form personalization requires elevating to security_admin",
    ],
    correct: 1,
    explanation:
      "Personalize Form affects only what YOU see. Unlike lists, you cannot add fields that are not already on the form — you can only show or hide the fields present. Mandatory fields cannot be hidden. Hidden fields stay hidden until you reset your customizations.",
    explanation_pt:
      "Personalize Form afeta apenas o que VOCÊ vê. Diferente das listas, você não pode adicionar campos que não estejam no formulário — só é possível mostrar ou ocultar os campos existentes. Campos obrigatórios não podem ser ocultados. Campos ocultos permanecem ocultos até você resetar suas customizações.",
    source: "SNAF Module 3 · 3.2 Personalize form view",
  },
  {
    id: 1223,
    domain: "Configuring Applications for Collaboration",
    type: "single",
    question:
      "A String field is defined with a maximum length of 400 characters. How does it appear on the form?",
    options: [
      "As a single-line text field",
      "As a multi-line text box",
      "As a journal field",
      "As a choice list",
    ],
    correct: 1,
    explanation:
      "For String fields with 254 characters or less, the input appears as a single-line text field. For fields with 255 characters or more, the input appears as a multi-line text box.",
    explanation_pt:
      "Para campos String com 254 caracteres ou menos, a entrada aparece como campo de texto de uma linha. Para campos com 255 caracteres ou mais, a entrada aparece como caixa de texto de múltiplas linhas.",
    source: "SNAF Module 3 · 3.2 Field types",
  },
  {
    id: 1224,
    domain: "Configuring Applications for Collaboration",
    type: "single",
    question:
      "Which tool should you use to make a field visible only to System Administrators on the form layout for everyone — Form Builder or Personalize Form?",
    options: [
      "Personalize Form, because it is faster",
      "Form Builder, because Personalize Form only affects the individual logged-in user",
      "Either one; they have the same effect",
      "Neither — this requires a Data Policy",
    ],
    correct: 1,
    explanation:
      "Form Builder changes the form layout for everyone using that view; Personalize Form only affects the individual logged-in user. Note that hiding a field on a form is a user-experience change, not security — restricting who can SEE the data requires an Access Control.",
    explanation_pt:
      "O Form Builder altera o layout do formulário para todos que usam aquela view; Personalize Form afeta apenas o usuário logado. Observe que ocultar um campo no formulário é uma mudança de experiência do usuário, não de segurança — restringir quem pode VER o dado exige um Access Control.",
    source: "SNAF Module 3 · Knowledge check",
  },
  {
    id: 1225,
    domain: "Configuring Applications for Collaboration",
    type: "single",
    question:
      "A UI Policy is used to dynamically set fields on a form to which three states?",
    options: [
      "Encrypted or decrypted, audited or not audited, indexed or not indexed",
      "Mandatory or optional, hidden or visible, read-only or editable",
      "Active or inactive, published or draft, locked or unlocked",
      "Create, read, update",
    ],
    correct: 1,
    explanation:
      "A UI Policy is a rule applied to a form to dynamically change information or the form itself. UI Policy Actions set fields to Mandatory or Optional, Hidden or Visible, and Read-only or Editable. To apply a UI Policy to all views, set Global to true. UI Policies execute on the CLIENT side and are about user experience and data integrity, NOT security.",
    explanation_pt:
      "Uma UI Policy é uma regra aplicada a um formulário para alterar dinamicamente as informações ou o próprio formulário. As UI Policy Actions definem campos como Mandatory/Optional, Hidden/Visible e Read-only/Editable. Para aplicar a UI Policy a todas as views, defina Global como true. UI Policies executam no lado CLIENTE e tratam de experiência do usuário e integridade de dados, NÃO de segurança.",
    source: "SNAF Module 7 · 7.1 UI policy and UI policy actions",
  },
  {
    id: 1226,
    domain: "Configuring Applications for Collaboration",
    type: "single",
    question:
      "You must guarantee that the Category field is populated whether the record arrives through the form, an Import Set or a Web Service. Which tool enforces this?",
    options: [
      "UI Policy",
      "Data Policy",
      "Client Script",
      "UI Action",
    ],
    correct: 1,
    explanation:
      "A Data Policy enforces data consistency by setting fields mandatory and/or read-only for ALL data entered into the platform — form (UI), Import Sets or Web Services. A UI Policy only applies to data entered on a form through a standard browser. Data Policies execute server-side but can also run as a UI Policy on the client via the 'Use as UI policy on client' option.",
    explanation_pt:
      "Uma Data Policy garante consistência de dados tornando campos obrigatórios e/ou somente leitura para TODOS os dados que entram na plataforma — formulário (UI), Import Sets ou Web Services. Uma UI Policy só se aplica a dados inseridos em um formulário via navegador. Data Policies executam no servidor, mas também podem rodar como UI Policy no cliente com a opção 'Use as UI policy on client'.",
    source: "SNAF Module 7 · 7.1 Data policies",
  },
  {
    id: 1227,
    domain: "Configuring Applications for Collaboration",
    type: "single",
    question:
      "Which capability exists in UI Policies but NOT in Data Policies?",
    options: [
      "Setting a field as mandatory",
      "Setting a field as read-only",
      "Managing the VISIBILITY (hidden/visible) of a field",
      "Running conditions against field values",
    ],
    correct: 2,
    explanation:
      "Data Policies can set fields mandatory and read-only, but visibility is NOT an option because Data Policies are not tied to a form. UI Policies can additionally manage field visibility — which is why UI Policies are often augmented with Data Policies.",
    explanation_pt:
      "Data Policies podem tornar campos obrigatórios e somente leitura, mas visibilidade NÃO é uma opção, pois Data Policies não estão vinculadas a um formulário. UI Policies podem, além disso, controlar a visibilidade dos campos — por isso UI Policies costumam ser complementadas por Data Policies.",
    source: "SNAF Module 7 · 7.1 Data policies (notes)",
  },
  {
    id: 1228,
    domain: "Configuring Applications for Collaboration",
    type: "multiple",
    question:
      "Which Client Script types run in the ServiceNow platform? (Choose 4)",
    options: ["onLoad()", "onChange()", "onSubmit()", "onCellEdit()", "onDelete()"],
    correct: [0, 1, 2, 3],
    explanation:
      "Client Script types are: onLoad() (runs when a form loads), onChange() (runs when a particular field changes value — requires a field name), onSubmit() (runs when a form is submitted and can cancel submission by returning false) and onCellEdit() (runs when a cell changes value through the LIST editor — it does not fire on form views).",
    explanation_pt:
      "Os tipos de Client Script são: onLoad() (executa ao carregar o formulário), onChange() (executa quando um campo específico muda de valor — exige o nome do campo), onSubmit() (executa ao enviar o formulário e pode cancelar o envio retornando false) e onCellEdit() (executa quando uma célula muda de valor pelo editor de LISTA — não dispara em formulários).",
    source: "SNAF Module 7 · 7.1 Client script",
  },
  {
    id: 1229,
    domain: "Configuring Applications for Collaboration",
    type: "single",
    question:
      "Which Client Script type CANNOT be used for a Catalog Client Script, and why?",
    options: [
      "onLoad — catalog items do not load a form",
      "onCellEdit — end users do not access catalog items from a list view",
      "onSubmit — catalog items are submitted by a flow, not the user",
      "onChange — catalog items use variables, not fields",
    ],
    correct: 1,
    explanation:
      "Catalog Client Scripts are special client scripts for catalog items, which use VARIABLES rather than fields. Because end users do not access catalog items through a list view, there is no onCellEdit type of catalog client script. Catalog Client Scripts can be applied to a Catalog Item or to a Variable Set.",
    explanation_pt:
      "Catalog Client Scripts são client scripts específicos para catalog items, que usam VARIÁVEIS em vez de campos. Como usuários finais não acessam catalog items por list view, não existe o tipo onCellEdit em catalog client script. Catalog Client Scripts podem ser aplicados a um Catalog Item ou a um Variable Set.",
    source: "SNAF Module 7 · 7.1 Catalog client script example",
  },
  {
    id: 1230,
    domain: "Configuring Applications for Collaboration",
    type: "multiple",
    question:
      "A Business Rule's 'When' setting determines when it executes. Which options are available? (Choose 4)",
    options: ["Before", "After", "Async", "Display", "OnLoad"],
    correct: [0, 1, 2, 3],
    explanation:
      "Business Rules run on the SERVER side and can be set to run Before a record is saved, After a record is saved, Async (queued — client and server work independently), or Display (before the record is displayed). They are configured to run on Insert, Update, Delete or Query operations.",
    explanation_pt:
      "Business Rules executam no lado SERVIDOR e podem ser configuradas para rodar Before (antes de salvar), After (depois de salvar), Async (enfileirada — cliente e servidor trabalham independentemente) ou Display (antes de o registro ser exibido). São configuradas para operações de Insert, Update, Delete ou Query.",
    source: "SNAF Module 7 · 7.1 Script types: Business rule",
  },
  {
    id: 1231,
    domain: "Configuring Applications for Collaboration",
    type: "single",
    question:
      "What is the primary objective of a DISPLAY business rule?",
    options: [
      "To hide fields on the form before the user sees them",
      "To use the g_scratchpad object to send server data to the client as part of the form",
      "To validate data before it is written to the database",
      "To trigger an email after the record is displayed",
    ],
    correct: 1,
    explanation:
      "The primary objective of display Business Rules is to use the shared scratchpad object g_scratchpad, which is sent to the client as part of the form. This is useful when building client scripts that need server data not included in the displayed record.",
    explanation_pt:
      "O objetivo principal das Business Rules do tipo display é usar o objeto compartilhado g_scratchpad, que é enviado ao cliente junto com o formulário. Isso é útil para criar client scripts que precisam de dados do servidor não incluídos no registro exibido.",
    source: "SNAF Module 7 · 7.1 Script types: Business rule (notes)",
  },
  {
    id: 1232,
    domain: "Configuring Applications for Collaboration",
    type: "single",
    question:
      "Which statement correctly contrasts Business Rules with UI Policies?",
    options: [
      "Both run in real time and monitor fields on a form",
      "Unlike UI Policies, Business Rules are not real-time: they do not monitor fields on a form, they monitor records as they are inserted or updated",
      "Business Rules run on the client and UI Policies run on the server",
      "UI Policies apply to web services; Business Rules do not",
    ],
    correct: 1,
    explanation:
      "Business Rules are server-side and are applied consistently regardless of how records are accessed (forms, lists or web services). Unlike UI Policies they are NOT real-time — they do not monitor fields on a form, they monitor records as they are inserted or updated.",
    explanation_pt:
      "Business Rules são server-side e são aplicadas de forma consistente independentemente de como o registro é acessado (formulários, listas ou web services). Diferente das UI Policies, elas NÃO são em tempo real — não monitoram campos do formulário, monitoram registros conforme são inseridos ou atualizados.",
    source: "SNAF Module 7 · 7.1 Script types: Business rule (notes)",
  },
  {
    id: 1233,
    domain: "Configuring Applications for Collaboration",
    type: "single",
    question:
      "Before scripting a Business Rule, which interface does ServiceNow recommend you consider first for process automation?",
    options: ["Script Includes", "Workflow Studio", "UI Actions", "Data Policies"],
    correct: 1,
    explanation:
      "Before scripting a business rule, consider whether the same goal can be achieved using Workflow Studio, which often provides a more straightforward and efficient solution. Workflow Studio is the preferred interface for process automation.",
    explanation_pt:
      "Antes de escrever uma business rule, avalie se o mesmo objetivo pode ser alcançado com o Workflow Studio, que costuma oferecer uma solução mais simples e eficiente. O Workflow Studio é a interface preferencial para automação de processos.",
    source: "SNAF Module 7 · 7.1 Script types: Business rule (notes)",
  },
  {
    id: 1234,
    domain: "Configuring Applications for Collaboration",
    type: "single",
    question:
      "A UI Action has an Order of 100. Where will a UI Action with an Order of 150 appear?",
    options: [
      "Before the Order 100 action",
      "After the Order 100 action",
      "UI Actions ignore order and appear alphabetically",
      "It will be hidden until the order is changed",
    ],
    correct: 1,
    explanation:
      "UI Actions add buttons, links and context menu items to forms and lists. When an order value is specified, UI Actions with a HIGHER order number display after, and those with a LOWER order number display before. UI Actions can be server-side or client-side depending on the Client checkbox.",
    explanation_pt:
      "UI Actions adicionam botões, links e itens de menu de contexto em formulários e listas. Quando um valor de order é especificado, UI Actions com número MAIOR aparecem depois, e as com número MENOR aparecem antes. UI Actions podem ser server-side ou client-side, dependendo do checkbox Client.",
    source: "SNAF Module 7 · 7.1 UI actions",
  },
  {
    id: 1235,
    domain: "Configuring Applications for Collaboration",
    type: "multiple",
    question:
      "Which of the following are valid placements for a UI Action? (Choose 4)",
    options: [
      "Form button",
      "Form context menu item (right-click the header)",
      "List banner button",
      "List context menu item (right-click a record)",
      "Import set transform script",
    ],
    correct: [0, 1, 2, 3],
    explanation:
      "UI Actions include form buttons, form context menu items, form links (Related Links), list buttons, list context menu items, list choices (bottom of a list) and list links.",
    explanation_pt:
      "UI Actions incluem botões de formulário, itens de menu de contexto do formulário, links de formulário (Related Links), botões de lista, itens de menu de contexto da lista, list choices (no fim da lista) e links de lista.",
    source: "SNAF Module 7 · 7.1 UI actions",
  },
  {
    id: 1236,
    domain: "Configuring Applications for Collaboration",
    type: "multiple",
    question:
      "Creating a notification requires three main decisions. Which are they? (Choose 3)",
    options: [
      "Who will receive it",
      "When to send it",
      "What it will contain",
      "Which update set will capture it",
    ],
    correct: [0, 1, 2],
    explanation:
      "Creating a notification involves three sections: Who will receive, When to send, and What it will contain. Notifications are created at All > System Notification > Email > Notifications.",
    explanation_pt:
      "Criar uma notificação envolve três seções: Who will receive (quem recebe), When to send (quando enviar) e What it will contain (o que contém). Notificações são criadas em All > System Notification > Email > Notifications.",
    source: "SNAF Module 6 · 6.2 Creating notifications",
  },
  {
    id: 1237,
    domain: "Configuring Applications for Collaboration",
    type: "multiple",
    question:
      "Which values are available in the 'Send when' (When to send) dropdown of a notification? (Choose 3)",
    options: [
      "Record inserted or updated",
      "Event is fired",
      "Triggered",
      "Record deleted only",
    ],
    correct: [0, 1, 2],
    explanation:
      "The When to send options are: Record inserted or updated, Event is fired, Triggered, and Script (available in advanced view mode).",
    explanation_pt:
      "As opções de When to send são: Record inserted or updated, Event is fired, Triggered e Script (disponível no modo de visão avançada).",
    source: "SNAF Module 6 · 6.2 Creating notifications (notes)",
  },
  {
    id: 1238,
    domain: "Configuring Applications for Collaboration",
    type: "single",
    question:
      "What is the difference between an email LAYOUT and an email TEMPLATE?",
    options: [
      "Layouts define reusable subject and body content; templates insert HTML branding",
      "Layouts insert HTML elements (such as branding) into the body of email templates; templates create reusable content for the subject line and message body",
      "They are the same object with different names",
      "Layouts apply only to SMS; templates apply only to email",
    ],
    correct: 1,
    explanation:
      "Email layouts specify the HTML content that appears in the body of one or more email templates (created at All > System Policy > Email > Layouts, stored in sys_email_layout). Email templates create reusable subject line and message body content (System Notification > Email > Templates) and reference a layout. If a template is used, its Subject and Message are used unless overridden in the notification.",
    explanation_pt:
      "Email layouts definem o conteúdo HTML que aparece no corpo de um ou mais email templates (criados em All > System Policy > Email > Layouts, armazenados em sys_email_layout). Email templates criam conteúdo reutilizável de assunto e corpo (System Notification > Email > Templates) e referenciam um layout. Se um template for usado, seu Subject e Message são aplicados, a menos que sejam sobrescritos na notificação.",
    source: "SNAF Module 6 · 6.2 Using email layouts and templates",
  },
  {
    id: 1239,
    domain: "Configuring Applications for Collaboration",
    type: "single",
    question:
      "Which two notification fields ensure that a user CANNOT unsubscribe from a notification?",
    options: [
      "Active and Weight",
      "Force delivery and Mandatory",
      "Send to event creator and Include attachments",
      "Subscribable and Digest",
    ],
    correct: 1,
    explanation:
      "Force delivery ensures specific notifications are always delivered regardless of user preferences, and Mandatory marks a notification so users cannot opt out. Users manage their channels and subscriptions under User menu > Preferences > Notifications, which also supports SMS.",
    explanation_pt:
      "Force delivery garante que determinadas notificações sejam sempre entregues, independentemente das preferências do usuário, e Mandatory marca uma notificação como obrigatória, impedindo o opt-out. Usuários gerenciam canais e assinaturas em User menu > Preferences > Notifications, que também suporta SMS.",
    source: "SNAF Module 6 · 6.2 Subscriptions",
  },
  {
    id: 1240,
    domain: "Configuring Applications for Collaboration",
    type: "single",
    question:
      "Where can an administrator preview the emails an instance has generated?",
    options: [
      "All > System Mailboxes > Outbound > Outbox, then right-click the Created Date column and select Preview Email",
      "All > System Logs > Emails Sent",
      "All > System Notification > Email > Preview",
      "The Activity Stream of each record",
    ],
    correct: 0,
    explanation:
      "To preview notifications in your instance navigate to All > System Mailboxes > Outbound > Outbox, right-click the 'Created Date' column and select Preview Email. A notification record also has a Preview notification UI action.",
    explanation_pt:
      "Para pré-visualizar notificações na instância, navegue até All > System Mailboxes > Outbound > Outbox, clique com o botão direito na coluna 'Created Date' e selecione Preview Email. O registro de notificação também possui a UI action Preview notification.",
    source: "SNAF Module 6 · 6.2 Platform notifications (notes)",
  },
  {
    id: 1241,
    domain: "Configuring Applications for Collaboration",
    type: "single",
    question:
      "By default, what happens when a notification has more than 100 intended recipients?",
    options: [
      "The notification fails and is logged as an error",
      "The system creates multiple notification messages with up to 100 recipients each",
      "Only the first 100 recipients receive it",
      "The notification is converted to a digest sent once daily",
    ],
    correct: 1,
    explanation:
      "By default, if a notification has more than 100 intended recipients the system creates multiple notification messages with up to 100 recipients each. It is recommended to limit any notification's recipient list to 1000 users; the limit can be changed with the system property glide.email.smtp.max_recipients.",
    explanation_pt:
      "Por padrão, se uma notificação tiver mais de 100 destinatários, o sistema cria várias mensagens com até 100 destinatários cada. Recomenda-se limitar a lista de destinatários a 1000 usuários; o limite pode ser alterado com a propriedade glide.email.smtp.max_recipients.",
    source: "SNAF Module 6 · 6.2 Creating notifications (notes)",
  },
  {
    id: 1242,
    domain: "Configuring Applications for Collaboration",
    type: "single",
    question:
      "What happens if a notification is addressed to a user whose record is INACTIVE in the User [sys_user] table?",
    options: [
      "The system sends it to the user's manager instead",
      "The system does not send the notification to that user",
      "The notification is queued until the user is reactivated",
      "The notification is sent to the guest user",
    ],
    correct: 1,
    explanation:
      "If a notification is addressed to a user with an inactive record in the User [sys_user] table, the system does not send the notification to that user.",
    explanation_pt:
      "Se uma notificação for endereçada a um usuário com registro inativo na tabela User [sys_user], o sistema não envia a notificação para esse usuário.",
    source: "SNAF Module 6 · 6.2 Creating notifications (notes)",
  },
  {
    id: 1243,
    domain: "Configuring Applications for Collaboration",
    type: "single",
    question:
      "Which application is the unified interface for creating dashboards and data visualizations from multiple data sources?",
    options: [
      "Analytics Center (Platform Analytics)",
      "CMDB Workspace",
      "Catalog Builder",
      "Now Assist Admin",
    ],
    correct: 0,
    explanation:
      "The Analytics Center (All > Platform Analytics > Analytics Center) is the unified interface for visualizing data from multiple data sources; from its homepage you can create new dashboards or visualizations. Platform Analytics includes Visualization Designer, Performance Analytics, User Experience Analytics and Process Mining.",
    explanation_pt:
      "O Analytics Center (All > Platform Analytics > Analytics Center) é a interface unificada para visualizar dados de múltiplas fontes; a partir da home é possível criar novos dashboards ou visualizações. O Platform Analytics inclui Visualization Designer, Performance Analytics, User Experience Analytics e Process Mining.",
    source: "SNAF Module 6 · 6.1 Platform Analytics",
  },
  {
    id: 1244,
    domain: "Configuring Applications for Collaboration",
    type: "single",
    question:
      "Which three configuration sections does the Visualization Designer provide?",
    options: [
      "Type, Data sources and Presentation",
      "Trigger, Action and Data",
      "Who, When and What",
      "Retrieve, Preview and Commit",
    ],
    correct: 0,
    explanation:
      "The Visualization Designer provides reporting configuration options in the sections Type (over 20 visualization types), Data sources (a predefined dataset or a ServiceNow table, with predefined or custom conditions) and Presentation (colors, titles, legend). Dot-walking is available in the Metric, Group by, Trend by, Columns and custom condition filter sections.",
    explanation_pt:
      "O Visualization Designer oferece opções de configuração nas seções Type (mais de 20 tipos de visualização), Data sources (um dataset predefinido ou uma tabela ServiceNow, com condições predefinidas ou customizadas) e Presentation (cores, títulos, legenda). Dot-walking está disponível nas seções Metric, Group by, Trend by, Columns e filtros de condição customizada.",
    source: "SNAF Module 6 · 6.1 Visualization Designer",
  },
  {
    id: 1245,
    domain: "Configuring Applications for Collaboration",
    type: "single",
    question:
      "You placed a visualization on a dashboard and shared the dashboard with the ITIL group, but they cannot see the chart data. What is the most likely cause?",
    options: [
      "The dashboard must be exported first",
      "The visualization itself must also be shared with the user, group or role — not just the dashboard",
      "Dashboards cannot be shared with groups, only with individual users",
      "Only Performance Analytics widgets can be shared",
    ],
    correct: 1,
    explanation:
      "Sharing is required at both levels: the visualization has to be shared with the user/group/role as well as the dashboard it is placed on. Dashboards are shared from the three-dots menu > Share.",
    explanation_pt:
      "O compartilhamento é necessário nos dois níveis: a visualização precisa ser compartilhada com o usuário/grupo/role, assim como o dashboard onde ela está. Dashboards são compartilhados pelo menu de três pontos > Share.",
    source: "SNAF Module 6 · 6.1 Visualization Designer (demo notes)",
  },
  {
    id: 1246,
    domain: "Configuring Applications for Collaboration",
    type: "single",
    question:
      "What is the difference between a visualization created from a table and Performance Analytics?",
    options: [
      "There is no difference; both show historical trends",
      "A visualization from a table shows the CURRENT state of platform data; Performance Analytics captures snapshots on a schedule to show performance iteratively over time",
      "Performance Analytics only works on the Incident table",
      "Visualizations require the pa_admin role; Performance Analytics does not",
    ],
    correct: 1,
    explanation:
      "Creating a visualization from a table displays information about the current state of platform data. Performance Analytics provides information about performance iteratively over time by capturing continuous snapshots on a regular schedule (Indicator Source, Data Collector, Widget, Dashboard). PA can also track targets, alert on thresholds, forecast and compare time periods.",
    explanation_pt:
      "Criar uma visualização a partir de uma tabela mostra o estado ATUAL dos dados da plataforma. O Performance Analytics fornece informações de desempenho de forma iterativa ao longo do tempo, capturando snapshots contínuos em uma agenda regular (Indicator Source, Data Collector, Widget, Dashboard). PA também acompanha metas, alerta em thresholds, faz previsões e compara períodos.",
    source: "SNAF Module 6 · 6.1 Performance Analytics in the Platform",
  },
  {
    id: 1247,
    domain: "Configuring Applications for Collaboration",
    type: "single",
    question:
      "A fulfiller needs real-time collaboration with colleagues about several incidents at the same time, keeping the context of each record. Which feature should they use?",
    options: [
      "Virtual Agent",
      "Sidebar with docked chat windows",
      "Connect Support broadcast",
      "Email notifications with a watch list",
    ],
    correct: 1,
    explanation:
      "Sidebar allows agents to collaborate in real time around a Workspace task-based or interaction-based record, and docked chat windows let fulfillers access multiple Sidebar discussions at the same time. Sidebar discussions are integrated with the activity stream and can be integrated with Slack/Teams.",
    explanation_pt:
      "O Sidebar permite que agentes colaborem em tempo real em torno de um registro de tarefa ou interação em um Workspace, e as janelas de chat encaixadas permitem acessar várias discussões simultaneamente. As discussões do Sidebar são integradas ao activity stream e podem ser integradas ao Slack/Teams.",
    source: "SNAF Module 6 · 6.3 Using Sidebar in supported workspaces",
  },
  {
    id: 1248,
    domain: "Configuring Applications for Collaboration",
    type: "single",
    question:
      "In a Sidebar discussion, what is true about customers and non-fulfiller roles?",
    options: [
      "They see all discussion messages in the activity stream",
      "They do not have access to the record nor to the conversation tile, similar to work notes",
      "They can join the discussion but cannot post",
      "They receive an email copy of every message",
    ],
    correct: 1,
    explanation:
      "When a Sidebar discussion is created, a discussion tile is added to the activity stream and users with access to the task record can open it. Customers and non-fulfiller roles do NOT have access to the record nor the conversation tile — behaviour similar to work notes.",
    explanation_pt:
      "Quando uma discussão do Sidebar é criada, um tile é adicionado ao activity stream e usuários com acesso ao registro podem abri-lo. Clientes e roles não-fulfiller NÃO têm acesso ao registro nem ao tile da conversa — comportamento semelhante ao de work notes.",
    source: "SNAF Module 6 · 6.3 Activity Stream in Sidebar",
  },
];
