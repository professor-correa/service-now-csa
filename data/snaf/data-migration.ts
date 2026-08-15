import { Question } from "../types";

/**
 * Domain: Data Migration and Integration (18% of the exam)
 * Source: SNAF Module 4 §4.3 (Import data) and §4.4 (Discovery / Service Mapping),
 * Module 7 §7.2 and §7.3 (Update sets, migration and integration).
 */
export const dataMigrationQuestions: Question[] = [
  // -------------------------------------------------------------- Import sets
  {
    id: 1501,
    domain: "Data Migration and Integration",
    type: "single",
    question: "What is an Import Set?",
    options: [
      "A scheduled job that copies records between two tables",
      "A tool used to import data from various data sources and map that data into ServiceNow tables",
      "An XML snapshot of configuration records used for migration",
      "A many-to-many table that joins two data sources",
    ],
    correct: 1,
    explanation:
      "An Import Set is a tool used to import data from various data sources and map that data into ServiceNow tables. Data flows: Data Source → Import Set Table (staging) → Transform (Transform Map) → Target Table. Any user with the admin or import_admin role can manage all aspects of Import Sets.",
    explanation_pt:
      "Um Import Set é uma ferramenta usada para importar dados de diversas fontes e mapeá-los para tabelas do ServiceNow. O fluxo é: Data Source → Import Set Table (staging) → Transform (Transform Map) → Target Table. Qualquer usuário com a role admin ou import_admin pode gerenciar todos os aspectos dos Import Sets.",
    source: "SNAF Module 4 · 4.3 Importing data: What are import sets?",
  },
  {
    id: 1502,
    domain: "Data Migration and Integration",
    type: "multiple",
    question:
      "Which of the following are valid Import Set DATA SOURCES? (Choose 4)",
    options: ["CSV", "Excel", "XML", "JDBC", "Update Set XML"],
    correct: [0, 1, 2, 3],
    explanation:
      "Data sources are records that contain information about where to pull import data from: local sources such as XML, CSV and Excel files, network servers via HTTP/FTP (path plus authentication), LDAP connections for directory imports and JDBC connections for database imports. An update set XML is not an import set data source — it is retrieved through System Update Sets.",
    explanation_pt:
      "Data sources são registros que contêm informações sobre de onde puxar os dados: fontes locais como arquivos XML, CSV e Excel, servidores de rede via HTTP/FTP (caminho e autenticação), conexões LDAP para importar diretórios e conexões JDBC para importar de bancos de dados. Um XML de update set não é data source de import set — ele é recuperado via System Update Sets.",
    source: "SNAF Module 4 · 4.3 Importing data (notes)",
  },
  {
    id: 1503,
    domain: "Data Migration and Integration",
    type: "single",
    question:
      "What is the Import Set Table, and how are its fields created?",
    options: [
      "It is the final destination table; its fields are defined by the administrator before the import",
      "It is a STAGING area for records imported from a data source; its fields are generated automatically based on the imported data",
      "It is a database view joining the source and target tables",
      "It is a temporary table that is deleted as soon as the file is uploaded",
    ],
    correct: 1,
    explanation:
      "The import set table is a staging area for records imported from a data source — the data goes 'backstage' before reaching its final destination. Fields on these tables are generated AUTOMATICALLY based on the imported data. The imported file label determines the name of the import set table.",
    explanation_pt:
      "A import set table é uma área de staging para registros importados de uma fonte de dados — os dados ficam nos 'bastidores' antes de chegar ao destino final. Os campos dessas tabelas são gerados AUTOMATICAMENTE com base nos dados importados. O rótulo do arquivo importado determina o nome da import set table.",
    source: "SNAF Module 4 · 4.3 Import set table",
  },
  {
    id: 1504,
    domain: "Data Migration and Integration",
    type: "single",
    question:
      "You reuse an EXISTING import set table to load a new file that contains extra columns. What happens?",
    options: [
      "The import fails because the structure does not match",
      "Any missing fields are added automatically to the import set table",
      "The extra columns are silently discarded",
      "A second import set table is created automatically",
    ],
    correct: 1,
    explanation:
      "You can choose an existing Import Set table to load data from the same source or data with the same field/column designations. When using an existing import set table, any missing fields are added automatically if the incoming source data contains new columns. Note: a new column also needs a new field map in the transform map.",
    explanation_pt:
      "Você pode escolher uma import set table existente para carregar dados da mesma origem ou com as mesmas designações de campos/colunas. Ao usar uma tabela existente, campos ausentes são adicionados automaticamente se a origem trouxer novas colunas. Observação: uma nova coluna também precisa de um novo field map no transform map.",
    source: "SNAF Module 4 · 4.3 Import set table (notes)",
  },
  {
    id: 1505,
    domain: "Data Migration and Integration",
    type: "multiple",
    question:
      "Which importing recommendations are given before running an import? (Choose 3)",
    options: [
      "Understand what data you are bringing in and where it should be placed",
      "Plan time before the import to verify data — remove obsolete data and fix inaccurate data",
      "Avoid importing extremely large chunks of data, which can cause extensive delays",
      "Always import directly into production so the data is immediately usable",
    ],
    correct: [0, 1, 2],
    explanation:
      "Before importing you should understand what data is coming in and where it should go, verify and clean the data (remove obsolete data, fix inaccuracies) and avoid extremely large import sets, which cause extensive delays. Imports can also be scheduled.",
    explanation_pt:
      "Antes de importar, entenda quais dados estão entrando e para onde devem ir, verifique e limpe os dados (remova dados obsoletos, corrija imprecisões) e evite import sets muito grandes, que causam atrasos consideráveis. Importações também podem ser agendadas.",
    source: "SNAF Module 4 · 4.3 Import set table",
  },
  {
    id: 1506,
    domain: "Data Migration and Integration",
    type: "single",
    question: "What is a Transform Map?",
    options: [
      "A script that converts XML into JSON during an integration",
      "A set of field maps that define the relationships between fields in an import set table and fields in a target table",
      "A visual map of CI relationships in the CMDB",
      "The schedule that determines when an import runs",
    ],
    correct: 1,
    explanation:
      "A transform map is a set of field maps that determine the relationships between fields in an import set (staging) table and fields in an existing ServiceNow table such as Incident or User. A single import set field can be mapped to MULTIPLE fields on a target table, and transform maps can be reused.",
    explanation_pt:
      "Um transform map é um conjunto de field maps que determinam as relações entre os campos da import set table (staging) e os campos de uma tabela existente do ServiceNow, como Incident ou User. Um único campo da import set pode ser mapeado para VÁRIOS campos da tabela de destino, e transform maps podem ser reutilizados.",
    source: "SNAF Module 4 · 4.3 Transform maps",
  },
  {
    id: 1507,
    domain: "Data Migration and Integration",
    type: "single",
    question:
      "Which related link performs the SIMPLEST mapping method when the source and target field names are identical?",
    options: [
      "Mapping Assist",
      "Auto Map Matching Fields",
      "Run Transform",
      "Create Transform Map",
    ],
    correct: 1,
    explanation:
      "The simplest mapping method is to click Auto Map Matching Fields in the related links of the Table Transform Map form — it matches fields whose names are identical (for example First name → First name). For anything more complex, the Mapping Assist utility provides a visual environment to map a single source field to multiple destination fields and to correct auto-matched fields.",
    explanation_pt:
      "O método de mapeamento mais simples é clicar em Auto Map Matching Fields nos related links do formulário Table Transform Map — ele associa campos com nomes idênticos (por exemplo, First name → First name). Para casos mais complexos, o utilitário Mapping Assist oferece um ambiente visual para mapear um campo de origem para vários campos de destino e corrigir mapeamentos automáticos.",
    source: "SNAF Module 4 · 4.3 Transform maps (notes)",
  },
  {
    id: 1508,
    domain: "Data Migration and Integration",
    type: "single",
    question: "What does it mean to COALESCE a field on a transform map?",
    options: [
      "The field is ignored during the transform",
      "The field is used as a unique key: if a match is found the existing record is UPDATED; if no match is found a new record is INSERTED",
      "The field values from source and target are concatenated",
      "The field becomes mandatory on the target table",
    ],
    correct: 1,
    explanation:
      "Coalescing a field (or multiple fields) means the field is used as a unique key during imports. If a match is found using the coalesce field(s), the existing record is updated with the imported information; if no match is found, a new record is inserted.",
    explanation_pt:
      "Fazer coalesce em um campo (ou vários) significa usá-lo como chave única durante a importação. Se um registro correspondente for encontrado pelo(s) campo(s) de coalesce, o registro existente é atualizado com as informações importadas; se não houver correspondência, um novo registro é inserido.",
    source: "SNAF Module 4 · 4.3 Coalesce fields",
  },
  {
    id: 1509,
    domain: "Data Migration and Integration",
    type: "single",
    question:
      "HR imported 200 records last month. This month they send the same 200 records plus 300 new ones. If NO coalesce field is defined, how many records will the table hold after the second import?",
    options: ["500", "700", "300", "200"],
    correct: 1,
    explanation:
      "If coalesce is not selected, the import set application always creates NEW records for each transformation. The 200 existing records are treated as new, so 200 (existing) + 500 (imported) = 700 records instead of the intended 500. Coalesce prevents duplicates.",
    explanation_pt:
      "Se o coalesce não for definido, a aplicação de import set sempre cria NOVOS registros a cada transformação. Os 200 registros existentes são tratados como novos, resultando em 200 (existentes) + 500 (importados) = 700 registros em vez dos 500 pretendidos. O coalesce evita duplicatas.",
    source: "SNAF Module 4 · 4.3 Coalesce fields (notes)",
  },
  {
    id: 1510,
    domain: "Data Migration and Integration",
    type: "multiple",
    question:
      "Which coalesce configurations are supported in Import Sets? (Choose 3)",
    options: [
      "Single-field coalesce",
      "Multiple-field coalesce (ALL coalesce field values must match)",
      "Conditional coalesce using a script that returns the sys_id of the target record",
      "Automatic coalesce on sys_created_on",
    ],
    correct: [0, 1, 2],
    explanation:
      "Coalesce can be configured as: single-field (one field used as the unique key), multiple-field (ALL coalesce field values between target and staging table must match) and conditional (a script — usually in the source script field of the field map for sys_id — that returns the sys_id of the target record to update).",
    explanation_pt:
      "O coalesce pode ser configurado como: single-field (um campo usado como chave única), multiple-field (TODOS os valores dos campos de coalesce devem coincidir entre a tabela de destino e a de staging) e conditional (um script — normalmente no campo source script do field map de sys_id — que retorna o sys_id do registro de destino a ser atualizado).",
    source: "SNAF Module 4 · 4.3 Coalesce fields (notes)",
  },
  {
    id: 1511,
    domain: "Data Migration and Integration",
    type: "single",
    question:
      "Which module is used as the FIRST step to bring a spreadsheet into the platform, and what does it ask for?",
    options: [
      "System Import Sets > Load Data — create or choose an import set table, upload the file and specify the header row and sheet number",
      "System Update Sets > Retrieved Update Sets — import from XML",
      "System Definition > Tables — create the target table",
      "System Import Sets > Transform Maps — map the fields first",
    ],
    correct: 0,
    explanation:
      "Go to System Import Sets > Load Data, create a new import set table (or select an existing one), name it appropriately, upload the spreadsheet and select the header row and sheet number, then Submit. After loading, create the transform map and run the transform.",
    explanation_pt:
      "Acesse System Import Sets > Load Data, crie uma nova import set table (ou selecione uma existente), nomeie adequadamente, faça upload da planilha, informe a linha de cabeçalho e o número da planilha e clique em Submit. Depois de carregar, crie o transform map e execute o transform.",
    source: "SNAF Module 4 · 4.3 Import set table (demo notes)",
  },
  {
    id: 1512,
    domain: "Data Migration and Integration",
    type: "single",
    question:
      "When defining a transform map, which tables can be selected as the TARGET?",
    options: [
      "Only tables in the Global scope",
      "Tables within the currently selected application scope, the global scope, or tables that grant write access to other applications",
      "Only tables that extend Task",
      "Only tables created by the same administrator",
    ],
    correct: 1,
    explanation:
      "Any table is a potential destination for transformation from an import set, and any field within a table can receive data. You can choose tables within the currently selected application scope, the global scope, or tables that grant write access to other applications.",
    explanation_pt:
      "Qualquer tabela pode ser destino de uma transformação de import set, e qualquer campo pode receber dados. É possível escolher tabelas dentro do escopo de aplicação atualmente selecionado, do escopo global, ou tabelas que concedem acesso de escrita a outras aplicações.",
    source: "SNAF Module 4 · 4.3 Transform maps (notes)",
  },

  // ------------------------------------------------------- Discovery & mapping
  {
    id: 1513,
    domain: "Data Migration and Integration",
    type: "single",
    question:
      "What is the difference between Discovery and Service Mapping?",
    options: [
      "Discovery is top-down; Service Mapping is horizontal",
      "Discovery scans the network to inventory devices and applications (horizontal discovery) and updates the CMDB; Service Mapping augments the CMDB with the relationships and dependencies that compose a Service (top-down mapping)",
      "Discovery maps business services; Service Mapping inventories hardware",
      "They are the same product with different licensing tiers",
    ],
    correct: 1,
    explanation:
      "Discovery scans the network to inventory devices and applications and updates the CMDB for each unique type of hardware and software — this is horizontal discovery. Service Mapping (top-down discovery) augments the CMDB with IT relationships and dependencies between CIs to model the components that comprise a Service, so you immediately see the impact of a failing component on the service.",
    explanation_pt:
      "O Discovery varre a rede para inventariar dispositivos e aplicações e atualiza o CMDB para cada tipo único de hardware e software — isso é horizontal discovery. O Service Mapping (top-down discovery) enriquece o CMDB com relações e dependências entre CIs para modelar os componentes que compõem um Serviço, permitindo ver imediatamente o impacto da falha de um componente no serviço.",
    source: "SNAF Module 4 · 4.4 ServiceNow Discovery and Service Mapping",
  },
  {
    id: 1514,
    domain: "Data Migration and Integration",
    type: "single",
    question:
      "Which component does Discovery leverage to gather information about devices and return results to the instance?",
    options: [
      "The MID Server (a lightweight Java process running on a customer Linux or Windows server)",
      "The Import Set Table",
      "An Integration Hub spoke",
      "The Guest user account",
    ],
    correct: 0,
    explanation:
      "Discovery leverages ServiceNow's MID (Management, Instrumentation and Discovery) Server, a lightweight Java process that can run on a customer's Linux or Windows server in a data center or public cloud, and can communicate through a proxy. It gathers information about devices and applications and returns results to the instance for processing. Note: Discovery availability depends on your subscription.",
    explanation_pt:
      "O Discovery utiliza o MID Server (Management, Instrumentation and Discovery) do ServiceNow, um processo Java leve que pode rodar em um servidor Linux ou Windows do cliente, em data center ou nuvem pública, podendo se comunicar por proxy. Ele coleta informações sobre dispositivos e aplicações e devolve os resultados para a instância processar. Observação: a disponibilidade do Discovery depende da assinatura.",
    source: "SNAF Module 4 · 4.4 ServiceNow Discovery and Service Mapping (notes)",
  },

  // ------------------------------------------------------------- Update sets
  {
    id: 1515,
    domain: "Data Migration and Integration",
    type: "single",
    question: "What is an Update Set?",
    options: [
      "A backup of the instance database",
      "A group of configuration changes packaged as an XML file that can be moved from one instance to another",
      "A collection of import sets scheduled to run together",
      "A set of records exported to CSV for reporting",
    ],
    correct: 1,
    explanation:
      "An Update Set is a group of configuration changes that can be moved from one instance to another. It is an XML file containing record details identifying the update set, a list of configuration changes and a state determining whether another instance can retrieve and apply the changes. Changes from tracked tables are written to the Customer Update [sys_update_xml] table.",
    explanation_pt:
      "Um Update Set é um grupo de mudanças de configuração que pode ser movido de uma instância para outra. É um arquivo XML contendo os detalhes que identificam o update set, a lista de mudanças de configuração e um estado que determina se outra instância pode recuperá-lo e aplicá-lo. As mudanças das tabelas rastreadas são gravadas na tabela Customer Update [sys_update_xml].",
    source: "SNAF Module 7 · 7.2 System update sets",
  },
  {
    id: 1516,
    domain: "Data Migration and Integration",
    type: "multiple",
    question:
      "Which of the following ARE captured in an update set? (Choose 4)",
    options: [
      "Business Rules",
      "Client Scripts",
      "UI Policies",
      "Tables, fields, forms and views",
      "New incident and change records",
    ],
    correct: [0, 1, 2, 3],
    explanation:
      "Update sets capture CONFIGURATION records: business rules, client scripts, UI policies, fields, forms and form sections, report definitions, tables, views, list configuration, roles, flows/published workflows. DATA is NOT captured — process records, new data records, modified data records, tasks, modified CIs, new users and groups, schedules and scheduled jobs.",
    explanation_pt:
      "Update sets capturam registros de CONFIGURAÇÃO: business rules, client scripts, UI policies, campos, formulários e seções, definições de relatório, tabelas, views, configuração de listas, roles, flows/workflows publicados. DADOS NÃO são capturados — registros de processo, novos registros de dados, registros de dados modificados, tasks, CIs modificados, novos usuários e grupos, schedules e scheduled jobs.",
    source: "SNAF Module 7 · 7.2 What is captured in an update set?",
  },
  {
    id: 1517,
    domain: "Data Migration and Integration",
    type: "single",
    question:
      "You need to move user records and locations to another instance along with your configuration changes. What should you use?",
    options: [
      "Add them to the update set manually",
      "Use the Export XML function to move the data records",
      "Use a database view",
      "Data records cannot be moved between instances",
    ],
    correct: 1,
    explanation:
      "Data records such as user records, CIs or locations are not captured in an update set. Use the Export XML function to move data, which is useful for testing or training purposes. (A separate developer.servicenow.com utility, 'Add to update set', can force files into an update set.)",
    explanation_pt:
      "Registros de dados como usuários, CIs ou localidades não são capturados em update sets. Use a função Export XML para mover dados, útil para testes ou treinamento. (Existe também o utilitário 'Add to update set', do developer.servicenow.com, que força arquivos para dentro de um update set.)",
    source: "SNAF Module 7 · 7.2 What is captured in an update set? (notes)",
  },
  {
    id: 1518,
    domain: "Data Migration and Integration",
    type: "single",
    question:
      "What is the best practice regarding the DEFAULT update set?",
    options: [
      "Use it for all changes so nothing is missed",
      "Do not use the Default update set for moving customizations between instances — use a named (user-created) update set; the global default update set should never be changed, deleted or moved between systems",
      "Rename the Default update set for each project",
      "Mark the Default update set complete at the end of each day",
    ],
    correct: 1,
    explanation:
      "The default update set captures changes made to the instance without adding them to any user-created update set. It is recommended to AVOID using it for moving customizations between instances — use a named update set instead. The global default update set should never be changed, deleted or moved between systems.",
    explanation_pt:
      "O default update set captura as mudanças feitas na instância sem adicioná-las a nenhum update set criado pelo usuário. Recomenda-se EVITAR usá-lo para mover customizações entre instâncias — use um update set nomeado. O default update set global nunca deve ser alterado, excluído ou movido entre sistemas.",
    source: "SNAF Module 7 · 7.2 System update sets (notes)",
  },
  {
    id: 1519,
    domain: "Data Migration and Integration",
    type: "single",
    question:
      "You created a new update set and want your configuration changes to be captured in it immediately. What must you do?",
    options: [
      "Select Submit and Make Current",
      "Mark the update set as Complete",
      "Export it to XML first",
      "Add it to a batch",
    ],
    correct: 0,
    explanation:
      "Navigate to All > System Update Sets > Local Update Sets, select New, complete the form and choose Submit and Make Current so the new update set becomes the target for configuration changes. You can also create/switch update sets from the settings (globe) icon. Note: an update set cannot capture updates across multiple application scopes.",
    explanation_pt:
      "Navegue até All > System Update Sets > Local Update Sets, clique em New, preencha o formulário e escolha Submit and Make Current para que o novo update set passe a receber as mudanças de configuração. Também é possível criar/trocar update sets pelo ícone de configurações (globo). Observação: um update set não captura atualizações de múltiplos escopos de aplicação.",
    source: "SNAF Module 7 · 7.2 Create and select an update set",
  },
  {
    id: 1520,
    domain: "Data Migration and Integration",
    type: "single",
    question:
      "What happens when you change an update set's state to Complete?",
    options: [
      "The changes are automatically committed to production",
      "The update set becomes available for other instances to retrieve, no additional customizations are tracked in it, and it can be exported to XML",
      "The update set is deleted from the local instance",
      "All changes are rolled back for review",
    ],
    correct: 1,
    explanation:
      "Mark an update set Complete only when it is ready to migrate. Once complete, it is available for other instances to retrieve, no further customizations are tracked in it (tracking returns to the default update set) and the Export to XML related link becomes available. Do not set a completed update set back to In progress — create a new one and commit them in creation order.",
    explanation_pt:
      "Marque um update set como Complete somente quando estiver pronto para migrar. Depois disso, ele fica disponível para outras instâncias recuperarem, nenhuma customização adicional é rastreada nele (o rastreamento volta ao default update set) e o related link Export to XML fica disponível. Não volte um update set concluído para In progress — crie um novo e faça o commit na ordem de criação.",
    source: "SNAF Module 7 · 7.2 Mark an update set complete",
  },
  {
    id: 1521,
    domain: "Data Migration and Integration",
    type: "single",
    question:
      "What is the correct sequence for applying an update set exported from another instance?",
    options: [
      "Preview, Retrieve, Commit",
      "Retrieve (Import Update Set from XML), Preview, Commit",
      "Commit, Preview, Retrieve",
      "Retrieve, Commit, Preview",
    ],
    correct: 1,
    explanation:
      "Applying an update set involves three steps: Retrieve (All > System Update Sets > Retrieved Update Sets > Import Update Set from XML, choose the file, Upload), Preview (compares the update set with the local instance to detect issues) and Commit. Ensure the update set previews at 100% before committing.",
    explanation_pt:
      "Aplicar um update set envolve três etapas: Retrieve (All > System Update Sets > Retrieved Update Sets > Import Update Set from XML, escolher o arquivo, Upload), Preview (compara o update set com a instância local para detectar problemas) e Commit. Garanta que o preview esteja em 100% antes de fazer o commit.",
    source: "SNAF Module 7 · 7.3 Applying an update set",
  },
  {
    id: 1522,
    domain: "Data Migration and Integration",
    type: "single",
    question:
      "Why is PREVIEWING an update set important, and what is a typical error found during preview?",
    options: [
      "Preview compiles the XML; typical errors are syntax problems",
      "Preview compares the update set with updates on the local instance to detect potential issues before migration — for example a form referencing a field that does not exist on the target instance",
      "Preview creates a backup of the target instance",
      "Preview automatically resolves all conflicts, so errors never appear",
    ],
    correct: 1,
    explanation:
      "Previewing compares the update set with the local instance to detect potential issues before migration. Errors are common and are exactly what previewing is for — for example, if the incident form references a field that does not exist in the target instance the instance does not know that field. Issues can be skipped or fixed, and all issues must be resolved before committing.",
    explanation_pt:
      "O preview compara o update set com a instância local para detectar problemas antes da migração. Erros são comuns e é justamente para isso que o preview serve — por exemplo, se o formulário de incident referencia um campo que não existe na instância de destino, a instância não conhece esse campo. Os problemas podem ser ignorados (skip) ou corrigidos, e todos precisam ser resolvidos antes do commit.",
    source: "SNAF Module 7 · 7.3 Applying an update set (notes)",
  },
  {
    id: 1523,
    domain: "Data Migration and Integration",
    type: "single",
    question:
      "How do you retrieve update sets directly from a REMOTE (sub-production) instance?",
    options: [
      "Export the XML and email it to the production administrator",
      "In the production instance, create an Update Source (All > System Update Sets > Update Sources > New) with the connection details, test the connection, then select the source and use Retrieve Completed Update Sets",
      "Clone the sub-production instance over production",
      "Use System Import Sets > Load Data with a JDBC data source",
    ],
    correct: 1,
    explanation:
      "You must first establish connectivity to each sub-production instance: All > System Update Sets > Update Sources > New, specifying Name, Type, Active, URL, Username, Password and Short Description, then Test Connection and save. Afterwards, select the development instance and click Retrieve Completed Update Sets — only update sets marked Complete transfer, and with remote instances the platform automatically previews them during retrieval.",
    explanation_pt:
      "É preciso primeiro estabelecer conectividade com cada instância de sub-produção: All > System Update Sets > Update Sources > New, informando Name, Type, Active, URL, Username, Password e Short Description, depois Test Connection e salvar. Em seguida, selecione a instância de desenvolvimento e clique em Retrieve Completed Update Sets — apenas update sets marcados como Complete são transferidos, e com instâncias remotas a plataforma faz o preview automaticamente durante a recuperação.",
    source: "SNAF Module 7 · 7.3 Retrieval from a remote instance",
  },
  {
    id: 1524,
    domain: "Data Migration and Integration",
    type: "single",
    question:
      "Several update sets modified the SAME object (for example the Incident form) and are merged. Which change survives?",
    options: [
      "The oldest change, to protect the original configuration",
      "The most recent change is the one moved to the new, merged update set",
      "Both changes are kept as separate entries",
      "The merge is blocked until the conflict is resolved manually",
    ],
    correct: 1,
    explanation:
      "When merging multiple update sets, if several have modified the same object the MOST RECENT change is the one moved to the new merged update set — the newest change always overwrites older changes during the merge process.",
    explanation_pt:
      "Ao mesclar vários update sets, se mais de um modificou o mesmo objeto, a mudança MAIS RECENTE é a que vai para o novo update set mesclado — a alteração mais nova sempre sobrescreve as mais antigas no processo de merge.",
    source: "SNAF Module 7 · 7.2 System update sets (notes)",
  },
  {
    id: 1525,
    domain: "Data Migration and Integration",
    type: "single",
    question: "What are BATCH update sets used for?",
    options: [
      "To split one large update set into smaller ones automatically",
      "To group multiple update sets together so they can be previewed and committed in bulk, avoiding wrong commit order or leaving sets out",
      "To schedule update sets to commit overnight",
      "To convert update sets into store applications",
    ],
    correct: 1,
    explanation:
      "Batch update sets let you group multiple update sets together so you can preview and commit them in bulk. This avoids common problems such as committing update sets in the wrong order or inadvertently leaving one or more sets out.",
    explanation_pt:
      "Batch update sets permitem agrupar vários update sets para que sejam previstos e comitados em lote. Isso evita problemas comuns, como fazer commit na ordem errada ou esquecer um ou mais update sets.",
    source: "SNAF Module 7 · 7.2 System update sets (notes)",
  },
  {
    id: 1526,
    domain: "Data Migration and Integration",
    type: "single",
    question:
      "How many records does ServiceNow recommend limiting each update set to?",
    options: ["A maximum of 100 records", "A maximum of 500 records", "A maximum of 1000 records", "There is no recommended limit"],
    correct: 0,
    explanation:
      "ServiceNow recommends limiting each update set to a maximum of 100 records to reduce potential conflicts and make it easier to identify and review changes, keeping the migration clear and manageable.",
    explanation_pt:
      "O ServiceNow recomenda limitar cada update set a no máximo 100 registros, para reduzir conflitos potenciais e facilitar a identificação e revisão das mudanças, mantendo a migração clara e gerenciável.",
    source: "SNAF Module 7 · 7.3 Applying an update set (notes)",
  },
  {
    id: 1527,
    domain: "Data Migration and Integration",
    type: "single",
    question:
      "Portal pages related to dashboard tabs are not automatically transferred in update sets. What should you use to include them?",
    options: [
      "The Export XML function on each page",
      "The Unload Dashboard function, which unloads the entire dashboard with all its related tabs and portal pages",
      "A batch update set",
      "The Import Update Set from XML action",
    ],
    correct: 1,
    explanation:
      "Portal pages related to dashboard tabs are not automatically transferred in update sets. To include the portal pages of a dashboard record, use the Unload Dashboard function, which unloads the entire dashboard along with all its related tabs and portal pages.",
    explanation_pt:
      "Páginas de portal relacionadas às abas de dashboards não são transferidas automaticamente em update sets. Para incluí-las, use a função Unload Dashboard, que descarrega o dashboard inteiro junto com todas as abas e páginas de portal relacionadas.",
    source: "SNAF Module 7 · 7.2 What is captured in an update set? (notes)",
  },
  {
    id: 1528,
    domain: "Data Migration and Integration",
    type: "single",
    question:
      "What is the guidance about loading an update set created on an OLDER family release into an instance running a NEWER family release?",
    options: [
      "It is blocked by the platform",
      "It can still be loaded, but additional testing is required to confirm compatibility; loading from a newer release onto an older instance may require extensive testing",
      "It works with no testing because update sets are version independent",
      "It is only possible through a remote update source",
    ],
    correct: 1,
    explanation:
      "You can still load update sets created on an older family release into an instance running a newer family release, but additional testing is required to confirm compatibility. Conversely, loading an update set from a newer family release onto an older instance may require extensive testing.",
    explanation_pt:
      "É possível carregar update sets criados em uma family release mais antiga em uma instância com release mais nova, mas testes adicionais são necessários para confirmar a compatibilidade. Já carregar um update set de uma release mais nova em uma instância mais antiga pode exigir testes extensivos.",
    source: "SNAF Module 7 · 7.3 Applying an update set (notes)",
  },
  {
    id: 1529,
    domain: "Data Migration and Integration",
    type: "single",
    question:
      "Why can mismatched sys_id values between instances cause update set problems, and how is this mitigated?",
    options: [
      "They cannot cause problems because sys_ids are regenerated on commit",
      "Some platform records are created on an instance after provisioning and do not match between instances; cloning the production instance onto the sub-production instance mitigates this",
      "Update sets ignore sys_id and match by name instead",
      "The issue is fixed by increasing the update set record limit",
    ],
    correct: 1,
    explanation:
      "All platform records should have matching sys_id fields. Some platform records are created on an instance after provisioning and therefore do not match between different instances, leading to update set problems. You can mitigate this by cloning the production instance onto the sub-production instance.",
    explanation_pt:
      "Todos os registros da plataforma deveriam ter sys_id correspondentes. Alguns registros são criados na instância após o provisionamento e, por isso, não coincidem entre instâncias, causando problemas nos update sets. Isso pode ser mitigado clonando a instância de produção sobre a de sub-produção.",
    source: "SNAF Module 7 · 7.3 Applying an update set (notes)",
  },
  {
    id: 1530,
    domain: "Data Migration and Integration",
    type: "single",
    question:
      "What is the recommendation for naming update sets?",
    options: [
      "Use the date only, so sets sort chronologically",
      "Use easily identifiable names — initials, story numbers or descriptive keywords (for example 'ST-12345' or 'Incident Form Customizations')",
      "Always use the default name generated by the platform",
      "Use the name of the target instance",
    ],
    correct: 1,
    explanation:
      "Name update sets so they are easily identifiable: include initials (JH-CRM-01), story numbers (ST-12345) or descriptive keywords ('Incident Form Customizations'). Clear names make it much easier to manage multiple update sets and commit them in the right order.",
    explanation_pt:
      "Nomeie os update sets de forma facilmente identificável: inclua iniciais (JH-CRM-01), números de história (ST-12345) ou palavras-chave descritivas ('Incident Form Customizations'). Nomes claros facilitam muito gerenciar vários update sets e comitá-los na ordem correta.",
    source: "SNAF Module 7 · 7.2 Create and select an update set (notes)",
  },
  {
    id: 1531,
    domain: "Data Migration and Integration",
    type: "single",
    question:
      "Which statement about UNSAFE edits during an update set commit is correct?",
    options: [
      "Unsafe edits (for example field type changes on fields with data) are skipped automatically",
      "Unsafe edits are NOT automatically skipped and must be applied manually",
      "Unsafe edits cause the entire commit to roll back",
      "Unsafe edits are only possible when retrieving from a remote instance",
    ],
    correct: 1,
    explanation:
      "All issues must be resolved before committing, and unsafe edits — for example field type changes on fields that already contain data — are NOT automatically skipped; they must be applied manually.",
    explanation_pt:
      "Todos os problemas precisam ser resolvidos antes do commit, e edições inseguras — por exemplo, mudanças de tipo em campos que já contêm dados — NÃO são ignoradas automaticamente; precisam ser aplicadas manualmente.",
    source: "SNAF Module 7 · 7.3 Retrieval from a remote instance (notes)",
  },
  {
    id: 1532,
    domain: "Data Migration and Integration",
    type: "single",
    question:
      "Which flow operations are available for update sets in Workflow Studio?",
    options: [
      "Create, complete, retrieve, preview and commit",
      "Only preview and commit",
      "Only export to XML",
      "Update sets cannot be manipulated by flows",
    ],
    correct: 0,
    explanation:
      "Flow actions and subflows are available for update set operations: create, complete, retrieve, preview and commit. This allows the migration process itself to be automated.",
    explanation_pt:
      "Existem actions e subflows disponíveis para operações de update set: create, complete, retrieve, preview e commit. Isso permite automatizar o próprio processo de migração.",
    source: "SNAF Module 7 · 7.2 System update sets (notes)",
  },
  {
    id: 1533,
    domain: "Data Migration and Integration",
    type: "single",
    question:
      "Which statement about GLOBAL business rules versus script includes is correct?",
    options: [
      "Global business rules load on every page, unlike script includes which load on request",
      "Script includes load on every page, unlike global business rules",
      "Both load only when a record is saved",
      "Neither loads until a flow calls them",
    ],
    correct: 0,
    explanation:
      "Global business rules load on EVERY page, unlike script includes, which load on request. This is one reason to prefer script includes for reusable server-side logic.",
    explanation_pt:
      "Business rules globais carregam em TODAS as páginas, diferentemente dos script includes, que carregam sob demanda. Essa é uma das razões para preferir script includes para lógica reutilizável no servidor.",
    source: "SNAF Module 7 · 7.2 Application scopes (notes)",
  },
  {
    id: 1534,
    domain: "Data Migration and Integration",
    type: "single",
    question:
      "What is the Connection Dashboard used for?",
    options: [
      "To monitor MID Server health during Discovery",
      "To see, manage and monitor all connections your instance has with external systems, both inbound and outbound, in one place",
      "To manage database connections between tables",
      "To track update set retrieval from remote instances",
    ],
    correct: 1,
    explanation:
      "The Connection Dashboard is a centralized view inside ServiceNow that lets you see, manage and monitor all connections your instance has with external systems. Every inbound or outbound integration relies on a connection, and those connections are what the dashboard tracks.",
    explanation_pt:
      "O Connection Dashboard é uma visão centralizada dentro do ServiceNow que permite ver, gerenciar e monitorar todas as conexões da instância com sistemas externos. Toda integração inbound ou outbound depende de uma conexão, e são essas conexões que o dashboard acompanha.",
    source: "SNAF Module 5 · 5.3 Integration Hub (notes)",
  },
];
