import { Question } from "../types";

/**
 * Domain: Database Management and Platform Security (27% of the exam)
 * Source: SNAF Module 4 §4.1 (Table administration), §4.2 (Application and access
 * control), §4.4 (CMDB) and Module 8 (Securing a ServiceNow Instance).
 */
export const databaseSecurityQuestions: Question[] = [
  // ------------------------------------------------------- Tables & dictionary
  {
    id: 1401,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "Which module contains the definitions for EVERY field in ALL tables of the instance?",
    options: [
      "System Definition > Tables",
      "System Definition > Dictionary (System Dictionary)",
      "System Definition > Number Maintenance",
      "System Security > Access Control",
    ],
    correct: 1,
    explanation:
      "The System Dictionary (All > System Definition > Dictionary) is the comprehensive repository that defines every table and field in the ServiceNow database. Tables & Columns lists all existing tables with their columns, attributes and indexes.",
    explanation_pt:
      "O System Dictionary (All > System Definition > Dictionary) é o repositório abrangente que define todas as tabelas e campos do banco de dados do ServiceNow. Tables & Columns lista todas as tabelas existentes com suas colunas, atributos e índices.",
    source: "SNAF Module 4 · 4.1 Table administration",
  },
  {
    id: 1402,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "The user-friendly term 'Location' on the sys_user form corresponds to which field NAME in the database?",
    options: ["location", "city", "u_location", "sys_location"],
    correct: 1,
    explanation:
      "Each field has a label (user-friendly), a name (system-friendly, unique) and a value. They do not always match: the field name 'city' in the sys_user table corresponds to the label 'Location'. Another classic example is the incident 'Channel' label whose system name is contact_type. Scripts use the NAME, not the label.",
    explanation_pt:
      "Cada campo tem um label (amigável ao usuário), um name (amigável ao sistema, único) e um value. Nem sempre coincidem: o field name 'city' na tabela sys_user corresponde ao label 'Location'. Outro exemplo clássico é o label 'Channel' do incident, cujo nome de sistema é contact_type. Scripts usam o NAME, não o label.",
    source: "SNAF Module 4 · 4.1 Field label / Field name / Field attributes",
  },
  {
    id: 1403,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "What does a reference field actually STORE, and what is its limitation?",
    options: [
      "The display value of the referenced record; it can point to any table",
      "The sys_id of a record from another table; a reference field can only refer to records from ONE specific table",
      "A copy of the referenced record; it must be refreshed manually",
      "A URL to the referenced record; it works only inside the same application scope",
    ],
    correct: 1,
    explanation:
      "A reference field stores the sys_id of a record from another table, establishing a relationship between them (for example Caller on Incident references sys_user). A reference field can only refer to records from ONE specific table — to create a field that can refer to records on any table, use the Document ID element type.",
    explanation_pt:
      "Um reference field armazena o sys_id de um registro de outra tabela, estabelecendo uma relação entre elas (por exemplo, Caller no Incident referencia sys_user). Um reference field só pode apontar para registros de UMA tabela específica — para um campo que aponte para registros de qualquer tabela, use o tipo Document ID.",
    source: "SNAF Module 4 · 4.1 Reference fields",
  },
  {
    id: 1404,
    domain: "Database Management and Platform Security",
    type: "multiple",
    question:
      "Which field types are used to manage ONE-TO-MANY relationships? (Choose 3)",
    options: [
      "Reference fields",
      "Glide List",
      "Document ID fields",
      "Many-to-many collection tables",
    ],
    correct: [0, 1, 2],
    explanation:
      "One-to-many relationships are managed through three relationship field types: Reference fields (select one record on a defined table, e.g. Caller on Incident), Glide List (select MULTIPLE records on a defined table, e.g. Watch list on Incident) and Document ID fields (select a record from ANY table in the instance).",
    explanation_pt:
      "Relações um-para-muitos são gerenciadas por três tipos de campo: Reference fields (selecionar um registro em uma tabela definida, ex. Caller em Incident), Glide List (selecionar VÁRIOS registros em uma tabela definida, ex. Watch list em Incident) e Document ID fields (selecionar um registro de QUALQUER tabela da instância).",
    source: "SNAF Module 4 · 4.1 Table relationships (notes)",
  },
  {
    id: 1405,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "Groups can have many roles and roles can be assigned to many groups. What kind of table relationship is this, and how do you recognize such a table?",
    options: [
      "One-to-many; the table has a single reference field",
      "Many-to-many; when you create a new record on the table you simply see two reference fields to populate",
      "Extension; the table extends both parents",
      "Database view; the table joins the two tables for reporting",
    ],
    correct: 1,
    explanation:
      "Group Roles is a many-to-many (M2M) relationship: two or more tables related bi-directionally so related records are visible from both sides. The trick to recognizing an M2M table is that creating a new record shows just two reference fields (try sys_user_has_role). Useful system elements: sys_collections.list and sys_m2m.list.",
    explanation_pt:
      "Group Roles é uma relação muitos-para-muitos (M2M): duas ou mais tabelas relacionadas de forma bidirecional, com os registros visíveis dos dois lados. O truque para reconhecer uma tabela M2M é que criar um novo registro mostra apenas dois campos de referência (veja sys_user_has_role). Elementos úteis: sys_collections.list e sys_m2m.list.",
    source: "SNAF Module 4 · 4.1 Table relationships",
  },
  {
    id: 1406,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "What are Database Views used for in ServiceNow?",
    options: [
      "To restrict which fields a role can read",
      "For REPORTING — they define table joins, for example joining Incident with Metric Definition and Metric Instance",
      "To store imported data before transformation",
      "To create a new physical table with copied data",
    ],
    correct: 1,
    explanation:
      "Database views are used for reporting purposes and define table joins. For example, a database view can join the Incident table with the Metric Definition and Metric Instance tables to report on incident metrics. Create them at System Definition > Database Views.",
    explanation_pt:
      "Database views são usadas para fins de relatório e definem joins entre tabelas. Por exemplo, uma database view pode unir a tabela Incident com Metric Definition e Metric Instance para relatar métricas de incidentes. Crie-as em System Definition > Database Views.",
    source: "SNAF Module 4 · 4.1 Table relationships (notes)",
  },
  {
    id: 1407,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "The Incident table extends the Task table. Which statement is correct?",
    options: [
      "Task is the child class and Incident is the parent class",
      "Incident is the child class; it inherits the fields of Task and can add fields unique to itself, such as Caller",
      "Incident and Task are siblings sharing a common parent",
      "Incident duplicates the Task fields but does not inherit changes",
    ],
    correct: 1,
    explanation:
      "A table that extends another is the CHILD class; the table it extends is the PARENT class. The child inherits the fields of the parent (Number, Location) and can create fields unique to itself (Caller). Table and field PROPERTIES are also inherited — whether a field is mandatory, plus business rules, access controls, UI Policies and Client Scripts.",
    explanation_pt:
      "Uma tabela que estende outra é a classe FILHA; a tabela estendida é a classe PAI. A filha herda os campos do pai (Number, Location) e pode criar campos próprios (Caller). PROPRIEDADES de tabela e campo também são herdadas — se um campo é obrigatório, além de business rules, access controls, UI Policies e Client Scripts.",
    source: "SNAF Module 4 · 4.1 Table relationships: Extended tables",
  },
  {
    id: 1408,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "How would you distinguish a BASE class table from a PARENT class table?",
    options: [
      "Base tables always have tables extended from them; parent tables do not",
      "A base class table is not extended from another table (it has no parent); a parent class table has child tables extending from it but may itself extend another table",
      "Base tables are custom; parent tables are core",
      "Base tables cannot be extended",
    ],
    correct: 1,
    explanation:
      "A base class (base table) is not an extension of another table — it has no parent and serves as the foundation of its hierarchy. A parent table is one that has child tables extending from it, and can itself be a child of another table. Task is simultaneously a CORE table (ships with ServiceNow), a BASE table (extends nothing) and a PARENT table (Incident, Problem, Change extend it).",
    explanation_pt:
      "Uma base class (base table) não é extensão de outra tabela — não possui pai e é a fundação de sua hierarquia. Uma parent table é aquela que tem tabelas filhas se estendendo dela, e pode ela mesma ser filha de outra tabela. Task é simultaneamente CORE (vem com o ServiceNow), BASE (não estende nada) e PARENT (Incident, Problem e Change a estendem).",
    source: "SNAF Module 4 · 4.1 Table types: Base tables",
  },
  {
    id: 1409,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "You see a table named u_team_celebrations. What does this tell you?",
    options: [
      "It is a core table shipped with the platform",
      "It is a CUSTOM table created in the GLOBAL application scope",
      "It is a custom table created in a scoped application",
      "It is a many-to-many relationship table",
    ],
    correct: 1,
    explanation:
      "Core tables are created by ServiceNow and have no such prefix (cmdb_ci, task, sys_user). Custom tables are created by customers: the u_ prefix indicates the GLOBAL application scope, while x_ indicates a SCOPED application.",
    explanation_pt:
      "Tabelas core são criadas pelo ServiceNow e não têm esse prefixo (cmdb_ci, task, sys_user). Tabelas customizadas são criadas pelo cliente: o prefixo u_ indica o escopo GLOBAL, enquanto x_ indica uma aplicação ESCOPADA.",
    source: "SNAF Module 4 · 4.1 Table types: Core vs. custom",
  },
  {
    id: 1410,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "Which tool provides a GRAPHICAL representation of the tables related to a specific table, and which roles are required to use it?",
    options: [
      "Schema Map; personalize_dictionary or admin",
      "Dependency View; itil or asset",
      "CI Class Manager; cmdb_read",
      "Table Builder; personalize_list",
    ],
    correct: 0,
    explanation:
      "The Schema Map gives a graphical representation of the tables related to a specific table and is available to users with the personalize_dictionary or admin roles. Open a table at System Definition > Tables and use the Show Schema Map related link. Tables shown with blue bars extend the table; tables with red bars are referenced by it.",
    explanation_pt:
      "O Schema Map oferece uma representação gráfica das tabelas relacionadas a uma tabela específica e está disponível para usuários com as roles personalize_dictionary ou admin. Abra uma tabela em System Definition > Tables e use o related link Show Schema Map. Tabelas com barras azuis estendem a tabela; tabelas com barras vermelhas são referenciadas por ela.",
    source: "SNAF Module 4 · 4.1 Schema Map",
  },
  {
    id: 1411,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "Where would an administrator change the prefix of Problem record numbers from PRB to PRBLM?",
    options: [
      "All > System Definition > Number Maintenance",
      "All > System Definition > Dictionary",
      "All > System Properties > My Company",
      "All > System Security > High Security Settings",
    ],
    correct: 0,
    explanation:
      "Record numbers can be automatically incremented and their format per table customized through the Number Maintenance application (All > System Definition > Number Maintenance). Records themselves are uniquely identified by a 32-character sys_id.",
    explanation_pt:
      "Números de registro podem ser incrementados automaticamente e seu formato por tabela customizado no aplicativo Number Maintenance (All > System Definition > Number Maintenance). Os registros em si são identificados de forma única por um sys_id de 32 caracteres.",
    source: "SNAF Module 4 · 4.1 Table components (notes)",
  },
  {
    id: 1412,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "When is table extension available, and what should you check before relying on it?",
    options: [
      "Extension can be applied to any table at any time",
      "Extension is only available when CREATING a new table, and not all tables are extensible",
      "Extension can only be done through an update set",
      "Extension requires the security_admin role",
    ],
    correct: 1,
    explanation:
      "Table extension derives fields from one table and replicates them in another. This process is only available when CREATING a new table (via the 'Extends table' field), and not all tables are extensible — the parent must have the extensible flag set to true (as Task does).",
    explanation_pt:
      "A extensão de tabelas deriva os campos de uma tabela e os replica em outra. Esse processo só está disponível ao CRIAR uma nova tabela (pelo campo 'Extends table'), e nem toda tabela é extensível — a tabela pai precisa ter o flag extensible como true (como a Task tem).",
    source: "SNAF Module 4 · 4.1 Table types: Base tables (notes)",
  },

  // ---------------------------------------------------------------- Security / ACL
  {
    id: 1413,
    domain: "Database Management and Platform Security",
    type: "multiple",
    question:
      "ServiceNow provides multiple LAYERS of security before a user can perform CRUD operations on a table. Which are they? (Choose 3)",
    options: [
      "Users, Groups and Roles (authentication and role assignment)",
      "Application and module access controlled by roles",
      "Access control via system properties and table/field ACLs",
      "Update set previews",
    ],
    correct: [0, 1, 2],
    explanation:
      "The layers are: (1) Users, Groups and Roles — no login means no access (except public pages); (2) Application and module access controlled by roles at the menu/module level; (3) Access control via globally defined system properties (deny by default) and table/field level ACLs providing fine-grained CRUD control.",
    explanation_pt:
      "As camadas são: (1) Users, Groups e Roles — sem login não há acesso (exceto páginas públicas); (2) acesso a applications e modules controlado por roles no nível de menu/módulo; (3) controle de acesso via propriedades de sistema definidas globalmente (negar por padrão) e ACLs de tabela/campo com controle granular de CRUD.",
    source: "SNAF Module 4 · 4.2 User permissions summary",
  },
  {
    id: 1414,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "An administrator with the admin role opens an ACL record but cannot edit it and sees no New button. What must they do?",
    options: [
      "Ask ServiceNow Support to unlock the ACL table",
      "Open the user menu, select Elevate role, choose security_admin and select Update",
      "Switch the application scope to Global",
      "Activate the High Security plugin",
    ],
    correct: 1,
    explanation:
      "Even system administrators cannot edit access controls without elevating. Open the user menu > Elevate role, select the elevated role (security_admin) and select Update. An upward arrow appears next to your avatar while elevated.",
    explanation_pt:
      "Nem mesmo administradores de sistema podem editar access controls sem elevar a role. Abra o user menu > Elevate role, selecione a role elevada (security_admin) e clique em Update. Uma seta para cima aparece ao lado do avatar enquanto a role está elevada.",
    source: "SNAF Module 4 · 4.2 Elevate role",
  },
  {
    id: 1415,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "How long do elevated privileges last?",
    options: [
      "24 hours from elevation",
      "Only for the duration of your user session — they end at session timeout, logout, or when you end the session, which includes 'Impersonate user'",
      "Until the next instance upgrade",
      "Permanently, once granted by an administrator",
    ],
    correct: 1,
    explanation:
      "An elevated privilege role lasts only for the duration of your user session. It ends automatically at session timeout or logout, and also when you end your session — which includes using 'Impersonate user'. You can also end it manually by unchecking the role and selecting Update.",
    explanation_pt:
      "Uma role de privilégio elevado dura apenas o tempo da sua sessão. Termina automaticamente no timeout da sessão ou logout, e também quando você encerra a sessão — o que inclui usar 'Impersonate user'. Também é possível encerrar manualmente desmarcando a role e clicando em Update.",
    source: "SNAF Module 4 · 4.2 Elevate role",
  },
  {
    id: 1416,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "In the base system, who inherently has the security_admin role?",
    options: [
      "Every user granted the admin role",
      "Only the default System Administrator; other admins must be explicitly granted security_admin",
      "Every member of the ServiceNow Administrators group",
      "No one — it must be requested from ServiceNow",
    ],
    correct: 1,
    explanation:
      "In the base system only the default System Administrator inherently has the security_admin role. Other users granted the admin role must also be explicitly granted security_admin to maintain ACLs and high security settings. Not all administrators should have it. Admins also cannot impersonate a security_admin to elevate their own permissions.",
    explanation_pt:
      "No sistema base, apenas o System Administrator padrão possui inerentemente a role security_admin. Outros usuários com a role admin precisam receber explicitamente a security_admin para manter ACLs e configurações de alta segurança. Nem todos os administradores devem tê-la. Admins também não podem impersonar um security_admin para elevar suas próprias permissões.",
    source: "SNAF Module 4 · 4.2 Access Control List (ACL) (notes)",
  },
  {
    id: 1417,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "At which levels can an access control be set?",
    options: [
      "Row-level (access to the record) and/or column-level (access to the field)",
      "Application-level and portal-level",
      "Instance-level and database-level",
      "Role-level and group-level",
    ],
    correct: 0,
    explanation:
      "An access control is a security rule executed when attempting to access any ServiceNow table. It may be set at the row-level (access to the record) and/or the column-level (access to the field). ACLs restrict CRUD plus ServiceNow-specific operations.",
    explanation_pt:
      "Um access control é uma regra de segurança executada ao tentar acessar qualquer tabela do ServiceNow. Pode ser definido em nível de linha (acesso ao registro) e/ou nível de coluna (acesso ao campo). ACLs restringem CRUD e também operações específicas do ServiceNow.",
    source: "SNAF Module 4 · 4.2 What is an access control?",
  },
  {
    id: 1418,
    domain: "Database Management and Platform Security",
    type: "multiple",
    question:
      "Besides CRUD, which ServiceNow-SPECIFIC operations can be restricted by Access Control rules? (Choose 4)",
    options: [
      "Execute (running scripts on a record or UI page)",
      "Edit_ci_relations (defining relationships between CMDB tables)",
      "Save_as_template (which fields are saved when a template is created)",
      "Personalize_choices (right-click a choice field and Configure Choices)",
      "Impersonate (acting as another user)",
    ],
    correct: [0, 1, 2, 3],
    explanation:
      "ServiceNow-specific ACL operations include execute, edit_ci_relations, save_as_template, report_on and personalize_choices — in addition to create, read, write and delete. Note that in ACLs ServiceNow uses 'write' instead of 'update'.",
    explanation_pt:
      "Operações específicas do ServiceNow em ACLs incluem execute, edit_ci_relations, save_as_template, report_on e personalize_choices — além de create, read, write e delete. Observe que em ACLs o ServiceNow usa 'write' em vez de 'update'.",
    source: "SNAF Module 4 · 4.2 What is an access control? (notes)",
  },
  {
    id: 1419,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "How many access control rules are created by default when a CUSTOM table is created, and what else is created?",
    options: [
      "Two rules (read and write), plus a group",
      "Four rules (create, delete, read, write), plus a role associated with them",
      "One wildcard rule, plus a user criteria record",
      "None — ACLs must always be created manually",
    ],
    correct: 1,
    explanation:
      "When a custom table is created, the system creates FOUR access control rules by default — create, delete, read and write — and a role is also created and associated with them. To see the ACLs of a table, type <table name>.CONFIG in the Filter navigator and open the Access Controls related list.",
    explanation_pt:
      "Quando uma tabela customizada é criada, o sistema cria QUATRO access control rules por padrão — create, delete, read e write — e também cria uma role associada a elas. Para ver as ACLs de uma tabela, digite <nome_da_tabela>.CONFIG no Filter navigator e abra a related list Access Controls.",
    source: "SNAF Module 4 · 4.2 System-created access controls",
  },
  {
    id: 1420,
    domain: "Database Management and Platform Security",
    type: "multiple",
    question:
      "Each access control rule specifies three things. Which are they? (Choose 3)",
    options: [
      "A valid operation — a valid action the system can take (CRUD)",
      "The object being secured (table, or table AND field)",
      "The permissions required to access the object (roles, conditional expressions, scripts)",
      "The update set that will carry the rule",
    ],
    correct: [0, 1, 2],
    explanation:
      "An ACL rule specifies the OPERATION (a valid action such as create/read/write/delete), the OBJECT being secured (table, or table and field) and the PERMISSIONS required — which can be Roles, Conditional Expressions and/or Scripts. If a rule specifies more than one permission, the user must satisfy ALL of them.",
    explanation_pt:
      "Uma regra de ACL especifica a OPERATION (ação válida como create/read/write/delete), o OBJECT protegido (tabela, ou tabela e campo) e as PERMISSIONS exigidas — que podem ser Roles, Conditional Expressions e/ou Scripts. Se uma regra especifica mais de uma permissão, o usuário precisa satisfazer TODAS.",
    source: "SNAF Module 4 · 4.2 Access control definition: Permission requirements",
  },
  {
    id: 1421,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "Which ACL rule type is evaluated FIRST and controls whether the user can access the table at all?",
    options: ["table.field", "table.*", "table.--None--", "parent_table.*"],
    correct: 2,
    explanation:
      "table.--None-- is evaluated first: it applies to the entire table and all of its records and controls whether the user can access the table at all. Every operation must pass this check first. Think of the house analogy: house.--None-- is the front door of the whole house.",
    explanation_pt:
      "table.--None-- é avaliada primeiro: aplica-se à tabela inteira e a todos os seus registros, controlando se o usuário pode acessar a tabela. Toda operação precisa passar por essa verificação antes. Analogia da casa: house.--None-- é a porta da frente da casa inteira.",
    source: "SNAF Module 4 · 4.2 Access control definition: Rule types",
  },
  {
    id: 1422,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "What is the correct EVALUATION ORDER of ACL rule types?",
    options: [
      "table.* → table.field → table.--None--",
      "table.--None-- → table.field (if it exists, overrides the wildcard) → table.* (all remaining fields)",
      "table.field → table.--None-- → table.*",
      "All three are evaluated simultaneously and any pass grants access",
    ],
    correct: 1,
    explanation:
      "The evaluation order is: table.--None-- (whole table), then table.field (most specific field rule, which overrides the wildcard for its named field), then table.* (catch-all applying to any field without its own table.field rule).",
    explanation_pt:
      "A ordem de avaliação é: table.--None-- (tabela inteira), depois table.field (regra mais específica de campo, que sobrepõe o wildcard para aquele campo), e por fim table.* (curinga que se aplica a qualquer campo sem regra table.field própria).",
    source: "SNAF Module 4 · 4.2 Access control definition: Rule types",
  },
  {
    id: 1423,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "A user passes the field-level ACL for incident.short_description but FAILS the incident table-level rule. What is the result?",
    options: [
      "The user can read short_description but no other field",
      "The user is denied access to ALL fields in the table — the table rule must pass first",
      "The user is granted access because one rule passed",
      "The system falls back to the parent table rule and grants access",
    ],
    correct: 1,
    explanation:
      "A user must pass BOTH table and field ACL rules. If a user fails a table access control rule, they are denied access to all fields in the table, even if they would pass a field ACL. Rules are matched most specific to most general: table rules first, then field rules.",
    explanation_pt:
      "O usuário precisa passar TANTO na regra de tabela quanto na de campo. Se falhar na regra de tabela, o acesso a todos os campos é negado, mesmo que ele passasse na ACL de campo. As regras são avaliadas do mais específico ao mais geral: primeiro tabela, depois campo.",
    source: "SNAF Module 4 · 4.2 Table access control evaluation",
  },
  {
    id: 1424,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "Which statement about Deny Unless and Allow If decision types is correct?",
    options: [
      "Allow If rules are evaluated first; Deny Unless rules only run if no Allow rule matched",
      "Deny Unless rules are evaluated FIRST and are more restrictive; Allow rules are only evaluated when there are no matching deny ACLs, or when the user satisfies the criteria for ALL matching deny ACLs",
      "Both types are evaluated at the same time and the most permissive wins",
      "Deny Unless rules apply only to fields; Allow If rules apply only to tables",
    ],
    correct: 1,
    explanation:
      "Deny Unless rules focus on denying access unless specific conditions are met and must be satisfied before any Allow rules are considered. Allow rules are evaluated only when (a) there are no matching deny ACLs, or (b) there are matching deny ACLs and the user satisfies the criteria for ALL of them. The benefit: a new company-wide condition can be added as one Deny Unless rule instead of editing hundreds of ACLs.",
    explanation_pt:
      "Regras Deny Unless focam em negar acesso a menos que condições específicas sejam atendidas, e precisam ser satisfeitas antes que qualquer regra Allow seja considerada. Regras Allow só são avaliadas quando (a) não há ACLs deny correspondentes, ou (b) há ACLs deny e o usuário atende aos critérios de TODAS elas. Vantagem: uma nova condição corporativa pode ser adicionada como uma única regra Deny Unless em vez de editar centenas de ACLs.",
    source: "SNAF Module 4 · 4.2 Access control decision types",
  },
  {
    id: 1425,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "On the Access Control form, what is the difference between 'Applies to' and 'Data Condition'?",
    options: [
      "They are two names for the same condition builder",
      "'Applies to' acts as a top-level record gatekeeper (only records meeting the condition have the ACL applied); 'Data Condition' evaluates specific field values once the ACL is triggered",
      "'Applies to' evaluates field values; 'Data Condition' selects the table",
      "'Applies to' is only used for Deny Unless rules",
    ],
    correct: 1,
    explanation:
      "Both use a condition builder, but 'Applies to' acts as a top-level record gatekeeper — only records that meet this condition have the ACL applied. 'Data Condition' evaluates specific field values once the ACL is triggered.",
    explanation_pt:
      "Ambos usam o condition builder, mas 'Applies to' funciona como um filtro de nível superior — apenas registros que atendem à condição têm a ACL aplicada. 'Data Condition' avalia valores de campos específicos depois que a ACL é acionada.",
    source: "SNAF Module 4 · Lab 4.2.1 (notes)",
  },
  {
    id: 1426,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "There is a read ACL on sys_user for roles table_admin and table_user, plus a read ACL on sys_user.home_phone granted only to table_admin, and NO sys_user.* rule. What can a user with table_user read?",
    options: [
      "All fields including home_phone",
      "All fields EXCEPT home_phone — granting home_phone explicitly to table_admin removed the table_user access that the --None-- rule had provided",
      "Nothing, because the field rule denies the whole table",
      "Only home_phone",
    ],
    correct: 1,
    explanation:
      "The --None-- (table level) rule granted all rows and fields to both roles. Adding a .home_phone rule that names only table_admin makes that field rule the most specific match for home_phone, removing home_phone access from table_user. This is why wildcard (*) rules must list ALL roles that need access.",
    explanation_pt:
      "A regra --None-- (nível de tabela) concedia todas as linhas e campos às duas roles. Adicionar uma regra .home_phone que nomeia apenas table_admin torna essa regra a correspondência mais específica para o campo, removendo o acesso de table_user ao home_phone. Por isso regras com wildcard (*) precisam listar TODAS as roles que necessitam de acesso.",
    source: "SNAF Module 4 · 4.2 Using the wildcard",
  },
  {
    id: 1427,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "How do ACL rules defined on a PARENT table behave for tables that extend it?",
    options: [
      "They are ignored by child tables",
      "ACL rules for parent tables — including rules for fields in a parent table — apply to any table that extends the parent",
      "They apply only if the child table has no ACLs of its own",
      "They must be copied manually to each child table",
    ],
    correct: 1,
    explanation:
      "ACL rules for parent tables apply to any table that extends the parent, and the same is true for rules on fields of a parent table. This is why the evaluation goes from the most specific table (for example incident) to more general ones (task) and then wildcard rules.",
    explanation_pt:
      "Regras de ACL de tabelas pai se aplicam a qualquer tabela que as estenda, e o mesmo vale para regras em campos da tabela pai. Por isso a avaliação vai da tabela mais específica (por exemplo incident) para as mais gerais (task) e depois para regras wildcard.",
    source: "SNAF Module 4 · 4.2 Table access control evaluation (notes)",
  },
  {
    id: 1428,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "What happens if a user does NOT meet the permissions of the first matching access control rule?",
    options: [
      "Access is immediately and permanently denied",
      "The system evaluates the next matching access control rule in the processing order; only if the user fails all matching rules is access denied",
      "The system grants read-only access as a fallback",
      "The system prompts the user to elevate their role",
    ],
    correct: 1,
    explanation:
      "If a user does not meet the permissions of the first matching rule, the system evaluates the permissions of the next matching access control rule according to the processing order. Access is denied only if the user fails to meet the permissions of every matching rule.",
    explanation_pt:
      "Se o usuário não atende às permissões da primeira regra correspondente, o sistema avalia as permissões da próxima regra correspondente, seguindo a ordem de processamento. O acesso só é negado se o usuário falhar em todas as regras correspondentes.",
    source: "SNAF Module 4 · 4.2 Table access control evaluation (notes)",
  },
  {
    id: 1429,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "Which statement about the admin role and Access Controls is TRUE?",
    options: [
      "Admins are subject to all ACLs like any other user",
      "Admins can override Access Controls and pass through all role checks, which is why the privilege must be granted carefully",
      "Admins can only override read ACLs, never write ACLs",
      "Admins must elevate to security_admin to read data protected by ACLs",
    ],
    correct: 1,
    explanation:
      "Users with the admin role have extensive access to all platform features and full control over data: admins can override Access Controls and pass through all role checks. Because of this reach, the admin role must be granted carefully. Elevating to security_admin is only required to MAINTAIN ACLs and high security settings.",
    explanation_pt:
      "Usuários com a role admin têm acesso amplo a todos os recursos e controle total sobre os dados: admins podem sobrepor Access Controls e passar por todas as verificações de role. Por esse alcance, a role admin deve ser concedida com cautela. Elevar para security_admin é necessário apenas para MANTER ACLs e configurações de alta segurança.",
    source: "SNAF Module 4 · 4.2 Access Control List (ACL) (notes)",
  },

  // ------------------------------------------------------------------- CMDB
  {
    id: 1430,
    domain: "Database Management and Platform Security",
    type: "multiple",
    question:
      "Which roles are named as typical permissions required to access CMDB tables and data? (Choose 4)",
    options: ["asset", "itil", "itil_admin", "cmdb_read", "catalog_admin"],
    correct: [0, 1, 2, 3],
    explanation:
      "Access to the CMDB tables and underlying data requires certain permissions such as the asset, itil, itil_admin and cmdb_read roles. Key system tables are cmdb, cmdb_ci and cmdb_rel_ci.",
    explanation_pt:
      "O acesso às tabelas do CMDB e aos dados subjacentes requer permissões como as roles asset, itil, itil_admin e cmdb_read. As tabelas de sistema principais são cmdb, cmdb_ci e cmdb_rel_ci.",
    source: "SNAF Module 4 · 4.4 The CMDB and configuration items",
  },
  {
    id: 1431,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "Which CMDB table stores every relationship between a PAIR of configuration items?",
    options: ["cmdb", "cmdb_ci", "cmdb_rel_ci", "cmdb_ci_hardware"],
    correct: 2,
    explanation:
      "cmdb_rel_ci (CI Relationship) is a many-to-many table where every relationship between a pair of CIs is stored. cmdb holds all CIs, and cmdb_ci is the Base Configuration Item table from which the technical CI classes are extended.",
    explanation_pt:
      "cmdb_rel_ci (CI Relationship) é uma tabela muitos-para-muitos onde cada relação entre um par de CIs é armazenada. cmdb contém todos os CIs, e cmdb_ci é a tabela Base Configuration Item, a partir da qual as classes técnicas de CI são estendidas.",
    source: "SNAF Module 4 · 4.4 The CMDB and configuration items",
  },
  {
    id: 1432,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "What is a Configuration Item (CI)?",
    options: [
      "Only physical hardware tracked in the asset register",
      "Any component — tangible or intangible — that needs to be managed to deliver services, such as firewalls, computers, email services and services",
      "A record on the Task table that describes an infrastructure change",
      "A relationship between two hardware devices",
    ],
    correct: 1,
    explanation:
      "Configuration items can be tangible or intangible devices or applications in the CMDB, such as firewalls, computers, email services and services. A CI is any component that needs to be managed to deliver services. The CMDB provides a logical model of the company's infrastructure.",
    explanation_pt:
      "Configuration items podem ser dispositivos ou aplicações tangíveis ou intangíveis no CMDB, como firewalls, computadores, serviços de e-mail e serviços. Um CI é qualquer componente que precisa ser gerenciado para entregar serviços. O CMDB fornece um modelo lógico da infraestrutura da empresa.",
    source: "SNAF Module 4 · 4.4 The CMDB and configuration items",
  },
  {
    id: 1433,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "Which tool displays the entire CMDB class hierarchy in a tree view, with class definitions, attributes and suggested relationships?",
    options: [
      "Dependency View",
      "CI Class Manager (All > Configuration > CI Class Manager)",
      "Schema Map",
      "CMDB Workspace 360",
    ],
    correct: 1,
    explanation:
      "The CI Class Manager displays the entire CMDB class hierarchy in tree view and consolidates class definitions in a central location — metadata, reconciliation rules, mandatory and recommended fields, audit templates, CMDB Health, identification rules and the list of CIs in the class.",
    explanation_pt:
      "O CI Class Manager exibe toda a hierarquia de classes do CMDB em árvore e consolida as definições de classe em um único lugar — metadados, regras de reconciliação, campos obrigatórios e recomendados, templates de auditoria, CMDB Health, regras de identificação e a lista de CIs da classe.",
    source: "SNAF Module 4 · 4.4 CI Class Manager",
  },
  {
    id: 1434,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "In the CI Class Manager Attributes tab, what is the difference between the Derived and Added tabs?",
    options: [
      "Derived shows attributes inherited from PARENT classes; Added shows attributes created specifically for this CI class",
      "Derived shows calculated fields; Added shows imported fields",
      "Derived shows deprecated attributes; Added shows new attributes since the last upgrade",
      "There is no difference — they show the same data sorted differently",
    ],
    correct: 0,
    explanation:
      "In the Attributes tab, All includes every attribute (derived and added); Derived shows only attributes inherited from parent classes; Added shows only attributes created specifically for this CI class (which are then inherited by any future child tables). Attributes are the columns/fields of the class table.",
    explanation_pt:
      "Na aba Attributes, All inclui todos os atributos (derivados e adicionados); Derived mostra apenas os herdados das classes pai; Added mostra apenas os criados especificamente para essa classe de CI (que serão herdados por futuras tabelas filhas). Atributos são as colunas/campos da tabela da classe.",
    source: "SNAF Module 4 · 4.4 CI Class Manager: Attributes tab",
  },
  {
    id: 1435,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "Which roles are required to READ and to WRITE class information in the CI Class Manager?",
    options: [
      "Reading: itil; Writing: itil_admin and personalize_dictionary",
      "Reading: cmdb_read; Writing: admin only",
      "Reading: asset; Writing: security_admin",
      "Reading: any authenticated user; Writing: itil",
    ],
    correct: 0,
    explanation:
      "For the Basic Info of a class: reading requires the itil role; writing requires the itil_admin and personalize_dictionary roles. For Attributes: editing requires personalize_dictionary and itil_admin; reading requires personalize_dictionary and itil.",
    explanation_pt:
      "Para as Basic Info de uma classe: a leitura requer a role itil; a escrita requer itil_admin e personalize_dictionary. Para Attributes: a edição requer personalize_dictionary e itil_admin; a leitura requer personalize_dictionary e itil.",
    source: "SNAF Module 4 · 4.4 CI Class Manager (continued)",
  },
  {
    id: 1436,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "What does the Dependency View provide, and how many levels of relationships does it display by default?",
    options: [
      "A list of all CIs in a class; 5 levels",
      "An interactive graphical interface visualizing relationships between CIs, starting from a root CI; three levels of relationships upstream and downstream by default",
      "A report of CI health scores; one level",
      "A schema of all CMDB tables; unlimited levels",
    ],
    correct: 1,
    explanation:
      "Dependency Views provide an interactive graphical interface to visualize relationships between configuration items. A map has one starting point called the root CI (highlighted with a pulsing darker frame) and by default displays THREE levels of relationships, both upstream and downstream; administrators can configure the number of levels.",
    explanation_pt:
      "Dependency Views oferecem uma interface gráfica interativa para visualizar relações entre configuration items. Um mapa tem um ponto de partida chamado root CI (destacado com moldura escura pulsante) e por padrão exibe TRÊS níveis de relações, upstream e downstream; administradores podem configurar o número de níveis.",
    source: "SNAF Module 4 · 4.4 Configuration items: Dependency view",
  },
  {
    id: 1437,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "What are 'suggested relationships' used for in the CI Class Manager?",
    options: [
      "They automatically create relationships during Discovery",
      "They determine which types of relationships are allowed for a specific CI class — mainly relevant when building custom classes",
      "They suggest which CIs to retire",
      "They recommend which users should own each CI",
    ],
    correct: 1,
    explanation:
      "Most relationships are defined automatically (by Discovery), but manual relationships can also be created. Suggested relationships determine which types of relationships are allowed for a specific CI class — for example 'Runs on::Runs' may be relevant for applications and servers but not for services. New relationship rules are created at All > Configuration > Relationships > Suggested Relationships. Extending a CMDB table also inherits relationships from the parent.",
    explanation_pt:
      "A maioria das relações é definida automaticamente (pelo Discovery), mas relações manuais também podem ser criadas. Suggested relationships determinam quais tipos de relação são permitidos para uma classe de CI — por exemplo 'Runs on::Runs' pode fazer sentido para aplicações e servidores, mas não para serviços. Novas regras são criadas em All > Configuration > Relationships > Suggested Relationships. Estender uma tabela do CMDB também herda as relações do pai.",
    source: "SNAF Module 4 · 4.4 CI Class Manager: Suggested relationships",
  },
  {
    id: 1438,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "What is the Common Service Data Model (CSDM)?",
    options: [
      "A plugin that automatically populates the CMDB",
      "A CMDB-based framework of common terms and definitions that identifies WHERE to place data for the products you are using, providing prescriptive guidelines for service modeling",
      "A reporting dashboard for CMDB health",
      "A replacement for the cmdb_ci table introduced in the latest release",
    ],
    correct: 1,
    explanation:
      "CSDM = Common Service (a standard shared set of service-related definitions across products) + Data Model (a CMDB framework across products supporting multiple configuration strategies). It is a blueprint that ensures the data required by your applications maps correctly to the appropriate CMDB tables.",
    explanation_pt:
      "CSDM = Common Service (um conjunto padrão e compartilhado de definições de serviço entre produtos) + Data Model (um framework de CMDB entre produtos que suporta múltiplas estratégias de configuração). É um blueprint que garante que os dados exigidos por suas aplicações sejam mapeados corretamente para as tabelas adequadas do CMDB.",
    source: "SNAF Module 4 · 4.4 Common Service Data Model (CSDM)",
  },
  {
    id: 1439,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "Which CSDM domain contains the base data referenced by all other domains and must be populated BEFORE using any ServiceNow products?",
    options: [
      "Ideation & Strategy",
      "Foundation",
      "Service Delivery",
      "Manage Portfolio",
    ],
    correct: 1,
    explanation:
      "Foundation is the base data referenced by all other domains and must be populated before using any ServiceNow products. The other domains are Ideation & Strategy (SPM), Design & Planning, Build & Integration (SDLC/Agile), Service Delivery, Service Consumption and Manage Portfolio (a cross-domain layer).",
    explanation_pt:
      "Foundation é a base de dados referenciada por todos os outros domínios e precisa ser populada antes de usar qualquer produto ServiceNow. Os demais domínios são Ideation & Strategy (SPM), Design & Planning, Build & Integration (SDLC/Agile), Service Delivery, Service Consumption e Manage Portfolio (camada transversal).",
    source: "SNAF Module 4 · 4.4 Why CSDM domains matter",
  },
  {
    id: 1440,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "Which CSDM domain represents internal/external consumers requesting business services via catalogs, managed by BRMs and CSMs?",
    options: [
      "Service Consumption",
      "Build & Integration",
      "Design & Planning",
      "Foundation",
    ],
    correct: 0,
    explanation:
      "Service Consumption covers internal/external consumers requesting business services via catalogs, managed by Business Relationship Managers and Customer Service Managers. Build & Integration is used by dev teams during SDLC/Agile and represents logical development details, not operational CIs.",
    explanation_pt:
      "Service Consumption abrange consumidores internos/externos solicitando serviços de negócio via catálogos, gerenciados por Business Relationship Managers e Customer Service Managers. Build & Integration é usado por times de desenvolvimento durante o SDLC/Agile e representa detalhes lógicos de desenvolvimento, não CIs operacionais.",
    source: "SNAF Module 4 · 4.4 Why CSDM domains matter",
  },

  // --------------------------------------------------------------- Module 8
  {
    id: 1441,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "Under the Shared Responsibility Model, who is responsible for determining how data is collected, stored, used, shared, archived and destroyed?",
    options: [
      "ServiceNow, as the data processor",
      "The customer, who is also responsible for maintaining the accuracy and confidentiality of that data",
      "The hyperscaler hosting the instance",
      "The ServiceNow Security Office (SSO)",
    ],
    correct: 1,
    explanation:
      "Security responsibilities are shared between customers, ServiceNow, infrastructure providers and hyperscalers. As part of the model, CUSTOMERS are responsible for determining how data is collected, stored, used, shared, archived and destroyed, and for maintaining the accuracy and confidentiality of that data.",
    explanation_pt:
      "As responsabilidades de segurança são compartilhadas entre clientes, ServiceNow, provedores de infraestrutura e hyperscalers. Como parte do modelo, os CLIENTES são responsáveis por determinar como os dados são coletados, armazenados, usados, compartilhados, arquivados e destruídos, e por manter a precisão e confidencialidade desses dados.",
    source: "SNAF Module 8 · 8.1 Shared Responsibility Model",
  },
  {
    id: 1442,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "Why is it critical to keep the Security Contact updated in ServiceNow Support, and what is the best practice?",
    options: [
      "It is only needed for licence renewals; one contact is enough",
      "It enables the ServiceNow Security Office to communicate directly about security issues; best practice is to keep at least TWO appropriate information security personnel (including a distribution list) and review the details at least quarterly",
      "It determines who receives the hardening compliance score by email each month",
      "It is used to authorize plugin activation requests",
    ],
    correct: 1,
    explanation:
      "The security contact field lets the ServiceNow Security Office (SSO) communicate directly with customer security personnel about security issues. Contacts should be familiar with ServiceNow, be able to reach business owners and leadership promptly, and prioritize security notifications. Best practice: keep at least two appropriate information security personnel on record (include an email distribution list and an individual) and review quarterly.",
    explanation_pt:
      "O campo de contato de segurança permite que o ServiceNow Security Office (SSO) se comunique diretamente com o pessoal de segurança do cliente sobre questões de segurança. Os contatos devem conhecer o ServiceNow, conseguir acionar rapidamente donos de negócio e liderança, e priorizar notificações de segurança. Boa prática: manter pelo menos duas pessoas de segurança da informação (incluindo uma lista de distribuição e um indivíduo) e revisar trimestralmente.",
    source: "SNAF Module 8 · 8.1 Maintaining a security contact",
  },
  {
    id: 1443,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "Regarding AUTHENTICATION under the Shared Responsibility Model, which statement is correct?",
    options: [
      "ServiceNow configures SSO and MFA for the customer",
      "Customers are responsible for configuring supported authentication methods (SSO with SAML or OIDC, smartcard PIV/CAC, OAuth, MFA) and for managing exceptions; MFA is enabled by default for all local logins",
      "MFA is optional and disabled by default for local logins",
      "Local logins cannot be disabled in ServiceNow",
    ],
    correct: 1,
    explanation:
      "Customers configure their instance using supported authentication methods: Multi-Provider SSO with SAML or OpenID Connect, smartcard authentication (PIV, CAC) for high-security environments, OAuth and enforced MFA, and disabling local logins where appropriate. MFA is enabled by default for all local logins, and customers must manage exceptions and monitor that the default is maintained.",
    explanation_pt:
      "Os clientes configuram sua instância usando métodos de autenticação suportados: Multi-Provider SSO com SAML ou OpenID Connect, autenticação por smartcard (PIV, CAC) para ambientes de alta segurança, OAuth e MFA obrigatório, além de desabilitar logins locais quando apropriado. O MFA está habilitado por padrão para todos os logins locais, e cabe ao cliente gerenciar exceções e monitorar a manutenção desse padrão.",
    source: "SNAF Module 8 · 8.1 Authentication",
  },
  {
    id: 1444,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "What distinguishes an INTERACTIVE from a NON-INTERACTIVE user account, and how should each authenticate?",
    options: [
      "Interactive accounts are for integrations and use API keys; non-interactive accounts are for people and use MFA",
      "Interactive accounts are for people who log in and use the platform — they should use MFA and role-based access control; non-interactive accounts are for integrations/automation and should authenticate via API keys or OAuth tokens with roles restricted to their purpose",
      "There is no functional difference; the labels are for reporting only",
      "Non-interactive accounts must always be members of the admin group",
    ],
    correct: 1,
    explanation:
      "Interactive user accounts should use MFA and role-based access control, ensuring least privilege and tying actions to individuals for accountability. Non-interactive accounts, intended for integrations and automation, should authenticate via API keys or OAuth tokens, have roles restricted to their purpose and use IP restrictions where possible. The Machine Identity Console lists accounts with Web Service Access Enabled = true and/or that have accessed an API.",
    explanation_pt:
      "Contas interativas devem usar MFA e controle de acesso baseado em roles, garantindo o menor privilégio e vinculando ações a indivíduos para responsabilização. Contas não interativas, destinadas a integrações e automações, devem autenticar via API keys ou tokens OAuth, ter roles restritas ao seu propósito e usar restrições de IP quando possível. O Machine Identity Console lista contas com Web Service Access Enabled = true e/ou que acessaram uma API.",
    source: "SNAF Module 8 · 8.1 Authorization",
  },
  {
    id: 1445,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "During a suspected security INCIDENT, who leads the investigation and what is ServiceNow's role?",
    options: [
      "ServiceNow leads the investigation and classifies the behavior",
      "The customer must lead investigations based on their internal processes, security needs and regulatory obligations; ServiceNow, as data processor, supports by querying backend logs on request and can help interpret log samples",
      "The hyperscaler leads the investigation as infrastructure owner",
      "The investigation is automated by Security Center with no human involvement",
    ],
    correct: 1,
    explanation:
      "Customers must lead investigations based on their internal processes, security needs and regulatory obligations. ServiceNow, as the data processor, supports incident response by querying backend logs upon request; Support can help review samples to clarify log types but does not have the resources to analyze every event, and customers are responsible for classifying behavior as malicious or benign.",
    explanation_pt:
      "Os clientes devem liderar as investigações com base em seus processos internos, necessidades de segurança e obrigações regulatórias. O ServiceNow, como operador de dados, apoia a resposta a incidentes consultando logs de backend mediante solicitação; o Suporte pode ajudar a revisar amostras para esclarecer tipos de log, mas não tem recursos para analisar todos os eventos, e cabe ao cliente classificar o comportamento como malicioso ou benigno.",
    source: "SNAF Module 8 · 8.1 Incident management",
  },
  {
    id: 1446,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "What is the ServiceNow Security Center (SSC), and what does it cost?",
    options: [
      "A paid add-on subscription for security operations teams",
      "An application included with the ServiceNow AI Platform at no additional cost that helps admins uphold their security responsibilities and manage/monitor instance security",
      "A ServiceNow-hosted service that manages the customer's instance security on their behalf",
      "A plugin that must be requested through Now Support and licensed per user",
    ],
    correct: 1,
    explanation:
      "ServiceNow Security Center is an application included with the ServiceNow AI Platform at NO additional cost. It helps customer admins uphold their security responsibilities and manage and monitor the security of their instance. Required roles: admin or sn_vsc.security_center_viewer. Find it at All > Security Center or All > Admin Center > Security Center.",
    explanation_pt:
      "O ServiceNow Security Center é uma aplicação incluída na ServiceNow AI Platform SEM custo adicional. Ajuda os administradores do cliente a cumprir suas responsabilidades de segurança e a gerenciar e monitorar a segurança da instância. Roles necessárias: admin ou sn_vsc.security_center_viewer. Acesse em All > Security Center ou All > Admin Center > Security Center.",
    source: "SNAF Module 8 · 8.2 Security Center",
  },
  {
    id: 1447,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "You want to identify which security settings do NOT meet ServiceNow's recommended standards. Which Security Center feature should you review first?",
    options: [
      "Security Event Notifications",
      "The Hardening compliance score and settings",
      "The Metrics console",
      "Customer Actions",
    ],
    correct: 1,
    explanation:
      "The Hardening section shows how closely your instance security properties adhere to ServiceNow suggested configurations. Review the Critical and High non-compliant settings first, then change them from All Settings. The hardening compliance score is a whole number from 1–100%; each setting has an impact score between 0 and 1, so the score changes with every modification.",
    explanation_pt:
      "A seção Hardening mostra o quanto as propriedades de segurança da sua instância aderem às configurações sugeridas pelo ServiceNow. Revise primeiro as configurações não conformes Critical e High, e depois altere-as em All Settings. O hardening compliance score é um número inteiro de 1 a 100%; cada configuração tem um impacto entre 0 e 1, então o score muda a cada modificação.",
    source: "SNAF Module 8 · 8.2 Hardening / How to improve the Hardening Compliance Score",
  },
  {
    id: 1448,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "What does the Security Center SCANNER do, and what can be done with its findings?",
    options: [
      "It scans the network for unmanaged devices; findings become CIs",
      "It scans the instance against security checks for misconfigurations, over-provisioned access controls and other insecure behavior; findings can be converted into security tasks that are assigned, tracked and closed",
      "It scans attachments for viruses; findings are quarantined",
      "It scans update sets before commit; findings block the commit",
    ],
    correct: 1,
    explanation:
      "The Scanner scans your instance against a set of security checks for misconfigurations, over-provisioned access controls and other insecure behavior. Explore Findings, Comparison, Checks, Suites and Results. Suites are collections of checks executed together (base system or your own). Scan findings can be converted into security tasks, assigned to a user, tracked and marked resolved.",
    explanation_pt:
      "O Scanner varre a instância contra um conjunto de verificações de segurança em busca de configurações incorretas, access controls excessivamente permissivos e outros comportamentos inseguros. Explore Findings, Comparison, Checks, Suites e Results. Suites são coleções de checks executadas juntas (do sistema base ou próprias). Findings podem ser convertidas em security tasks, atribuídas a um usuário, acompanhadas e marcadas como resolvidas.",
    source: "SNAF Module 8 · 8.2 Scanner",
  },
  {
    id: 1449,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "Which Security Center console tool monitors over fifty security metrics (implemented as Analytics Hub visualizations) to identify threats or insecure behaviors?",
    options: ["Hardening", "Metrics", "Best Practices", "Customer Actions"],
    correct: 1,
    explanation:
      "Metrics monitors over fifty different security metrics — implemented as Analytics Hub visualizations — to identify potential security threats or insecure behaviors (for example a spike in failed login attempts). Thresholds can be set to send notifications. Security Center consoles are Security Configuration (Hardening, Scanner, Customer Actions), Security Monitoring (Metrics, Notifications) and Security Posture (Dashboard, Best Practices).",
    explanation_pt:
      "O Metrics monitora mais de cinquenta métricas de segurança — implementadas como visualizações do Analytics Hub — para identificar possíveis ameaças ou comportamentos inseguros (por exemplo, um pico de tentativas de login falhas). Thresholds podem ser definidos para enviar notificações. Os consoles do Security Center são Security Configuration (Hardening, Scanner, Customer Actions), Security Monitoring (Metrics, Notifications) e Security Posture (Dashboard, Best Practices).",
    source: "SNAF Module 8 · 8.2 Metrics",
  },
  {
    id: 1450,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "What is the recommended CADENCE for reviewing Security Center with your security team?",
    options: [
      "Once a year during the audit",
      "At a minimum once per quarter, with customers encouraged to meet and evaluate SSC items monthly",
      "Only when a security incident occurs",
      "Weekly, mandated by ServiceNow",
    ],
    correct: 1,
    explanation:
      "Establish a regular meeting cadence between the ServiceNow admin team and the security team. The recommended cadence for reviewing Security Center after initial configuration is a MINIMUM of once per quarter, and customers are encouraged to meet and evaluate any SSC items monthly. Test functional impact in sub-production (UAT) before any updates or patches.",
    explanation_pt:
      "Estabeleça uma cadência regular de reuniões entre o time de administração do ServiceNow e o time de segurança. A cadência recomendada para revisar o Security Center após a configuração inicial é de NO MÍNIMO uma vez por trimestre, e recomenda-se que os clientes se reúnam e avaliem itens do SSC mensalmente. Teste o impacto funcional em sub-produção (UAT) antes de qualquer atualização ou patch.",
    source: "SNAF Module 8 · 8.2 Managing the Cadence around Security Center Adoption",
  },
  {
    id: 1451,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "How is the Security Center application itself kept up to date?",
    options: [
      "It upgrades automatically with each family release only",
      "It is a store app: updates are released twice a year in addition to family releases and are installed through the Application Manager after testing in a sub-production instance",
      "Updates are applied by ServiceNow Support on request",
      "It cannot be updated between family releases",
    ],
    correct: 1,
    explanation:
      "Security Center is a store application, so it needs updating for new features and bug fixes. Updates are released twice a year in addition to family releases. Test thoroughly in a sub-production environment first, then go to All Available Applications, search for Security Center, sync the applications and install the update.",
    explanation_pt:
      "O Security Center é uma aplicação da store, então precisa ser atualizado para receber novos recursos e correções. As atualizações são lançadas duas vezes por ano, além das family releases. Teste bem em um ambiente de sub-produção primeiro, depois vá em All Available Applications, procure por Security Center, sincronize as aplicações e instale a atualização.",
    source: "SNAF Module 8 · 8.2 Patching and upgrading the Security Center application",
  },
  {
    id: 1452,
    domain: "Database Management and Platform Security",
    type: "single",
    question:
      "Under the Shared Responsibility Model, who is responsible for reviewing AI/ML use cases against regulatory, ethical and business requirements?",
    options: [
      "ServiceNow, which maintains AI governance policies",
      "The customer, who is responsible for the use and oversight of AI/ML within their instance and determines how and when to deploy AI/ML features",
      "The third-party OEM providing the model",
      "The instance's security contact only",
    ],
    correct: 1,
    explanation:
      "ServiceNow maintains documented AI governance policies and procedures. CUSTOMERS are responsible for the use and oversight of AI/ML within their instances: they determine how and when to deploy AI/ML features through configuration and must review AI/ML use cases against regulatory, ethical and business requirements.",
    explanation_pt:
      "O ServiceNow mantém políticas e procedimentos documentados de governança de IA. Os CLIENTES são responsáveis pelo uso e supervisão de IA/ML em suas instâncias: determinam como e quando implantar recursos de IA/ML por configuração e devem avaliar os casos de uso quanto a requisitos regulatórios, éticos e de negócio.",
    source: "SNAF Module 8 · 8.1 AI Security",
  },
];
