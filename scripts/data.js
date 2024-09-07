const data = [
  {
    id: 1,
    title: "Java",
    description:
      "Java é uma linguagem de programação orientada a objeto, multiplataforma que é executada em bilhões de dispositivos em todo o mundo. Ele capacita aplicativos, sistemas operacionais de smartphones, software empresarial e muitos programas conhecidos.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
    type: "BackEnd",
    references: [
      "https://docs.oracle.com/javase/tutorial/",
      "https://www.geeksforgeeks.org/java/",
      "https://pt.wikipedia.org/wiki/Java_(linguagem_de_programa%C3%A7%C3%A3o)",
    ],
  },
  {
    id: 2,
    title: "JavaScript",
    description:
      "JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web — toda vez que uma página da web faz mais do que simplesmente mostrar a você informação estática — mostrando conteúdo que se atualiza em um intervalo de tempo, mapas interativos ou gráficos 2D/3D animados, etc. — você pode apostar que o JavaScript provavelmente está envolvido. É a terceira camada do bolo das tecnologias padrões da web, duas das quais (HTML e CSS) nós falamos com muito mais detalhes em outras partes da Área de Aprendizado.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    type: "FrontEnd, BackEnd",
    references: [
      "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
      "https://www.w3schools.com/js/",
      "https://javascript.info/",
    ],
  },
  {
    id: 3,
    title: "Go",
    description:
      "Go é uma linguagem de programação criada pela Google e lançada em código livre em novembro de 2009. É uma linguagem compilada e focada em produtividade e programação concorrente, baseada em trabalhos feitos no sistema operacional chamado Inferno.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg",
    type: "BackEnd",
    references: [
      "https://golang.org/doc/",
      "https://tour.golang.org/",
      "https://gobyexample.com/",
    ],
  },
  {
    id: 4,
    title: "Python",
    description:
      "O Python é uma linguagem de programação amplamente usada em aplicações da Web, desenvolvimento de software, ciência de dados e machine learning (ML). Os desenvolvedores usam o Python porque é eficiente e fácil de aprender e pode ser executada em muitas plataformas diferentes.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    type: "BackEnd",
    references: [
      "https://docs.python.org/3/",
      "https://www.learnpython.org/",
      "https://www.python.org/doc/essays/blurb/",
    ],
  },
  {
    id: 5,
    title: "Node.js",
    description:
      "O Node.js se caracteriza como um ambiente de execução JavaScript. Com ele, o usuário pode criar aplicações sem depender do browser para isso. Com alta capacidade de escalabilidade, boa flexibilidade, arquitetura e baixo custo, torna-se uma ótima opção para programação.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    type: "BackEnd",
    references: [
      "https://nodejs.org/en/docs/",
      "https://www.w3schools.com/nodejs/",
      "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework",
    ],
  },
  {
    id: 6,
    title: "React",
    description:
      "React é uma biblioteca JavaScript de código aberto utilizada para construir interfaces de usuário interativas e reativas. Ela foi desenvolvida pelo Facebook e é amplamente utilizada para desenvolver aplicações web modernas e single-page applications (SPA).",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    type: "Libs",
    references: [
      "https://reactjs.org/docs/getting-started.html",
      "https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/",
      "https://pt-br.reactjs.org/tutorial/tutorial.html",
    ],
  },
  {
    id: 7,
    title: "Redux",
    description:
      "Redux é uma biblioteca JavaScript de código aberto para gerenciamento de estado de aplicações, comumente usada com React. Foi desenvolvida em 2015 por Dan Abramov e Andrew Clark, e simplifica o gerenciamento de estado em aplicações complexas.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png",
    type: "Libs",
    references: [
      "https://redux.js.org/introduction/getting-started",
      "https://blog.logrocket.com/modern-redux-patterns/",
      "https://www.freecodecamp.org/news/understanding-redux-the-worlds-easiest-guide-to-beginning-redux-c695f45546f6/",
    ],
  },
  {
    id: 8,
    title: "Django",
    description:
      "O Django é um software que você pode usar para desenvolver aplicações Web de forma rápida e eficiente. A maioria das aplicações Web tem várias funções comuns, como autenticação, recuperação de informações de um banco de dados e gerenciamento de cookies.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg",
    type: "Frameworks",
    references: [
      "https://docs.djangoproject.com/en/stable/",
      "https://www.djangoproject.com/start/",
      "https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Django/Introduction",
    ],
  },
  {
    id: 9,
    title: "Vue.js",
    description:
      "Vue.js é um framework JavaScript progressivo para construir interfaces de usuário. Ele foi criado por Evan You em 2014 e foca na facilidade de integração e flexibilidade na construção de aplicações web interativas.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
    type: "Frameworks",
    references: [
      "https://vuejs.org/v2/guide/",
      "https://www.taniarascia.com/getting-started-with-vue/",
      "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Frameworks/Vuejs/Getting_started",
    ],
  },
  {
    id: 10,
    title: "Next.js",
    description:
      "Next.js é um framework React de código aberto para construção de aplicações web otimizadas. Criado pela Vercel em 2016, ele permite renderização do lado do servidor (SSR), geração estática de páginas e é altamente utilizado para criar websites e aplicações React escaláveis.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    type: "Frameworks",
    references: [
      "https://nextjs.org/docs",
      "https://vercel.com/docs",
      "https://www.freecodecamp.org/news/the-next-js-handbook/",
    ],
  },
  {
    id: 11,
    title: "Spring Boot",
    description:
      "Spring Boot é um framework Java de código aberto usado para criar aplicações autônomas e prontas para produção. Lançado pelo projeto Spring em 2014, ele simplifica o desenvolvimento de aplicações com configuração mínima e é amplamente utilizado para construir APIs e serviços de backend.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg",
    type: "Frameworks",
    references: [
      "https://spring.io/guides",
      "https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/",
      "https://www.baeldung.com/spring-boot",
    ],
  },
  {
    id: 12,
    title: "Angular",
    description:
      "Angular é um framework de código aberto baseado em TypeScript, desenvolvido pelo Google, utilizado para construir aplicações web de página única (SPAs). Lançado em 2016 como sucessor do AngularJS, ele oferece uma estrutura robusta para o desenvolvimento de interfaces de usuário dinâmicas e interativas.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
    type: "Frameworks",
    references: [
      "https://angular.io/docs",
      "https://www.tutorialspoint.com/angular/index.htm",
      "https://www.w3schools.com/angular/",
    ],
  },
  {
    id: 13,
    title: "SQL",
    description:
      "SQL (Structured Query Language) é uma linguagem padrão para gerenciar e manipular bancos de dados relacionais. Foi desenvolvida inicialmente nos anos 1970 e é amplamente utilizada para a administração de bancos de dados.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
    type: "Data",
    references: [
      "https://www.w3schools.com/sql/",
      "https://www.geeksforgeeks.org/sql-tutorial/",
      "https://www.tutorialspoint.com/sql/index.htm",
    ],
  },
  {
    id: 14,
    title: "MongoDB",
    description:
      "MongoDB é um banco de dados NoSQL, orientado a documentos, que armazena dados em formato JSON. Lançado em 2009, ele é ideal para lidar com grandes volumes de dados não estruturados e permite maior flexibilidade em relação aos bancos de dados relacionais.",
    imageUrl: "./assets/mongo.webp",
    type: "Data",
    references: [
      "https://docs.mongodb.com/",
      "https://www.mongodb.com/what-is-mongodb",
      "https://www.tutorialspoint.com/mongodb/index.htm",
    ],
  },
  {
    id: 15,
    title: "Cache",
    description:
      "Cache é um mecanismo de armazenamento temporário de dados para melhorar o desempenho de sistemas e aplicações. Ele permite que dados frequentemente acessados sejam rapidamente recuperados, reduzindo a latência e o tempo de resposta. É amplamente utilizado em sistemas distribuídos e web.",
    imageUrl: "./assets/cache.webp",
    type: "Data",
    references: [
      "https://aws.amazon.com/caching/",
      "https://www.tutorialspoint.com/data_communication_computer_network/cache_memory.htm",
      "https://pt.wikipedia.org/wiki/Cache",
    ],
  },
  {
    id: 16,
    title: "Singleton",
    description:
      "O padrão Singleton garante que uma classe tenha apenas uma instância em todo o sistema, fornecendo um ponto de acesso global a essa instância. É utilizado para gerenciar recursos compartilhados como conexões de banco de dados ou configuração de sistemas.",
    imageUrl: "./assets/singleton.png",
    type: "Logic",
    references: [
      "https://refactoring.guru/design-patterns/singleton",
      "https://www.javatpoint.com/singleton-design-pattern",
      "https://pt.wikipedia.org/wiki/Singleton",
    ],
  },
  {
    id: 17,
    title: "Factory Method",
    description:
      "O Factory Method é um padrão de criação que define uma interface para criar objetos em uma classe, mas permite que as subclasses decidam quais classes instanciar. Ele promove a flexibilidade na criação de objetos sem especificar suas classes concretas.",
    imageUrl: "./assets/factory.png",
    type: "Logic",
    references: [
      "https://refactoring.guru/design-patterns/factory-method",
      "https://www.javatpoint.com/factory-method-design-pattern",
      "https://www.tutorialspoint.com/design_pattern/factory_pattern.htm",
    ],
  },
  {
    id: 18,
    title: "Observer",
    description:
      "O padrão Observer define uma dependência um-para-muitos entre objetos, de modo que quando um objeto muda de estado, todos os seus dependentes são notificados e atualizados automaticamente. É frequentemente usado para implementação de eventos.",
    imageUrl: "./assets/observer.png",
    type: "Logic",
    references: [
      "https://refactoring.guru/design-patterns/observer",
      "https://www.javatpoint.com/observer-design-pattern",
      "https://www.tutorialspoint.com/design_pattern/observer_pattern.htm",
    ],
  },
  {
    id: 19,
    title: "Decorator",
    description:
      "O padrão Decorator permite que você adicione comportamentos a objetos de forma dinâmica, sem alterar suas classes originais. Ele envolve o objeto em uma classe decoradora que adiciona a nova funcionalidade, permitindo maior flexibilidade e modularidade.",
    imageUrl: "./assets/decorator.png",
    type: "Logic",
    references: [
      "https://refactoring.guru/design-patterns/decorator",
      "https://www.javatpoint.com/decorator-pattern",
      "https://www.tutorialspoint.com/design_pattern/decorator_pattern.htm",
    ],
  },
  {
    id: 20,
    title: "SOLID",
    description:
      "SOLID é um acrônimo para cinco princípios fundamentais da programação orientada a objetos: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, e Dependency Inversion. Esses princípios ajudam a criar software mais robusto, flexível e fácil de manter.",
    imageUrl: "./assets/solid.png",
    type: "Logic",
    references: [
      "https://www.freecodecamp.org/news/solid-principles-explained-in-plain-english/",
      "https://en.wikipedia.org/wiki/SOLID",
      "https://www.geeksforgeeks.org/solid-principles-object-oriented-design/",
    ],
  },
  {
    id: 21,
    title: "Single Responsibility Principle (SRP)",
    description:
      "O princípio da Responsabilidade Única afirma que uma classe deve ter apenas uma razão para mudar, ou seja, ela deve ter uma única responsabilidade ou propósito. Isso facilita a manutenção e a evolução do código.",
    imageUrl: "./assets/single responsibility.avif",
    type: "Logic",
    references: [
      "https://stackify.com/solid-design-single-responsibility-principle/",
      "https://www.freecodecamp.org/news/single-responsibility-principle-explained/",
      "https://www.geeksforgeeks.org/srp-in-solid/",
    ],
  },
  {
    id: 22,
    title: "Open/Closed Principle (OCP)",
    description:
      "O princípio Aberto/Fechado sugere que as classes devem estar abertas para extensão, mas fechadas para modificação. Isso significa que o comportamento de uma classe pode ser estendido sem alterar seu código-fonte original.",
    imageUrl: "./assets/open closed.jpg",
    type: "Logic",
    references: [
      "https://stackify.com/solid-design-open-closed-principle/",
      "https://www.freecodecamp.org/news/the-open-closed-principle-explained-in-plain-english/",
      "https://www.geeksforgeeks.org/ocp-in-solid/",
    ],
  },
  {
    id: 23,
    title: "Interface Segregation Principle (ISP)",
    description:
      "O princípio da Segregação de Interfaces recomenda que os clientes não devem ser forçados a depender de interfaces que não utilizam. Isso promove interfaces menores e mais específicas para suas necessidades.",
    imageUrl: "./assets/interface segregation.jpg",
    type: "Logic",
    references: [
      "https://stackify.com/interface-segregation-principle/",
      "https://www.freecodecamp.org/news/interface-segregation-principle-explained-in-plain-english/",
      "https://www.geeksforgeeks.org/isp-in-solid/",
    ],
  },
  {
    id: 24,
    title: "Dependency Inversion Principle (DIP)",
    description:
      "O princípio da Inversão de Dependência sugere que os módulos de alto nível não devem depender de módulos de baixo nível, mas sim de abstrações. Isso promove um acoplamento mais fraco e facilita a evolução do sistema.",
    imageUrl: "./assets/dependency inversion.jpg",
    type: "Logic",
    references: [
      "https://stackify.com/dependency-inversion-principle/",
      "https://www.freecodecamp.org/news/dependency-inversion-principle-explained-in-plain-english/",
      "https://www.geeksforgeeks.org/dependency-inversion-principle/",
    ],
  },
  {
    id: 25,
    title: "Programação Funcional",
    description:
      "A programação funcional é um paradigma de programação que trata a computação como a avaliação de funções matemáticas. Ela evita mudanças de estado e dados mutáveis, promovendo funções puras e imutabilidade para garantir maior previsibilidade e menos efeitos colaterais.",
    imageUrl: "./assets/functional programming.png",
    type: "Concepts",
    references: [
      "https://www.freecodecamp.org/news/an-introduction-to-functional-programming/",
      "https://medium.com/backticks-tildes/a-gentle-introduction-to-functional-programming-96c88d57940a",
      "https://www.geeksforgeeks.org/introduction-functional-programming/",
    ],
  },
  {
    id: 26,
    title: "Programação Orientada a Objetos (OOP)",
    description:
      "A Programação Orientada a Objetos organiza o software em torno de 'objetos', que encapsulam dados e comportamentos relacionados. Os principais conceitos incluem classes, herança, polimorfismo e encapsulamento, visando tornar o código mais modular e reutilizável.",
    imageUrl: "./assets/oop.png",
    type: "Concepts",
    references: [
      "https://www.freecodecamp.org/news/object-oriented-programming-concepts-21bb035f7260/",
      "https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/",
      "https://www.tutorialspoint.com/object_oriented_programming/index.htm",
    ],
  },
  {
    id: 27,
    title: "Programação Imperativa",
    description:
      "A programação imperativa é um paradigma que expressa a lógica do programa através de declarações que mudam o estado de um programa. Foca em como as operações devem ser executadas, passo a passo, com instruções detalhadas de controle de fluxo.",
    imageUrl: "./assets/imperative programming.png",
    type: "Concepts",
    references: [
      "https://www.geeksforgeeks.org/imperative-programming-paradigm/",
      "https://en.wikipedia.org/wiki/Imperative_programming",
      "https://stackify.com/imperative-vs-declarative-programming/",
    ],
  },
  {
    id: 28,
    title: "Programação Declarativa",
    description:
      "A programação declarativa é um paradigma onde o desenvolvedor descreve o que o programa deve fazer, em vez de como fazê-lo. Exemplos incluem linguagens como SQL e paradigmas como programação funcional, onde a ênfase está no resultado, não no processo.",
    imageUrl: "./assets/declarative programming.jpg",
    type: "Concepts",
    references: [
      "https://www.geeksforgeeks.org/declarative-programming-paradigm/",
      "https://en.wikipedia.org/wiki/Declarative_programming",
      "https://stackify.com/imperative-vs-declarative-programming/",
    ],
  },
  {
    id: 29,
    title: "Programação Multi-threading",
    description:
      "A programação multi-threading permite a execução paralela de várias threads dentro de um processo. Esse paradigma é utilizado para melhorar o desempenho de aplicações, especialmente em sistemas com múltiplos núcleos de CPU, tornando possível a execução concorrente de tarefas.",
    imageUrl: "./assets/multi thread.jpg",
    type: "Concepts",
    references: [
      "https://www.javatpoint.com/multithreading-in-java",
      "https://www.geeksforgeeks.org/multithreading-in-java/",
      "https://www.tutorialspoint.com/java/java_multithreading.htm",
    ],
  },
  {
    id: 30,
    title: "Programação Reativa",
    description:
      "A programação reativa é um paradigma focado em fluxos de dados e propagação de mudanças. Com esse estilo, o estado muda em resposta a eventos ou dados que chegam, e sistemas reativos lidam bem com eventos assíncronos e processamento paralelo.",
    imageUrl: "./assets/reactive programming.png",
    type: "Concepts",
    references: [
      "https://www.reactivemanifesto.org/pt-br",
      "https://www.freecodecamp.org/news/an-introduction-to-reactive-programming-227fcec2aa4e/",
      "https://medium.com/swlh/understanding-reactive-programming-eca3a5e7ad45",
    ],
  },
  {
    id: 31,
    title: "Programação Orientada a Aspectos (AOP)",
    description:
      "A programação orientada a aspectos separa o comportamento transversal dos interesses principais da lógica do programa. Ela permite modularizar preocupações como logging, segurança ou transações, que afetam várias partes de uma aplicação.",
    imageUrl: "./assets/aop.png",
    type: "Concepts",
    references: [
      "https://www.tutorialspoint.com/spring/spring_aop.htm",
      "https://www.baeldung.com/spring-aop",
      "https://www.geeksforgeeks.org/aspect-oriented-programming-aop/",
    ],
  },
  {
    id: 32,
    title: "Programação Baseada em Eventos",
    description:
      "A programação baseada em eventos é um paradigma em que o fluxo de execução de um programa é determinado por eventos, como ações do usuário ou mensagens de outros programas. Muito utilizada em sistemas interativos e interfaces gráficas.",
    imageUrl: "./assets/eventbased.jpg",
    type: "Concepts",
    references: [
      "https://en.wikipedia.org/wiki/Event-driven_programming",
      "https://www.geeksforgeeks.org/event-driven-programming-in-node-js/",
      "https://www.w3schools.com/nodejs/nodejs_events.asp",
    ],
  },
  {
    id: 33,
    title: "Programação Concorrente",
    description:
      "A programação concorrente é um paradigma que permite a execução de várias operações ou processos ao mesmo tempo. Ela é usada para aumentar a eficiência de sistemas que realizam múltiplas tarefas simultaneamente, aproveitando os recursos de hardware de múltiplos núcleos.",
    imageUrl: "./assets/concurrent.png",
    type: "Concepts",
    references: [
      "https://www.geeksforgeeks.org/concurrency-in-java/",
      "https://en.wikipedia.org/wiki/Concurrent_computing",
      "https://www.tutorialspoint.com/java_concurrency/index.htm",
    ],
  },
  {
    id: 34,
    title: "Programação Estruturada",
    description:
      "A programação estruturada é um paradigma que enfatiza o uso de estruturas de controle bem definidas, como laços, condicionais e sub-rotinas, evitando o uso de instruções 'goto'. Ela busca melhorar a clareza, qualidade e tempo de desenvolvimento do software.",
    imageUrl: "./assets/structured.png",
    type: "Concepts",
    references: [
      "https://www.geeksforgeeks.org/structured-programming-paradigm/",
      "https://en.wikipedia.org/wiki/Structured_programming",
      "https://www.tutorialspoint.com/structured_programming/index.htm",
    ],
  },
  {
    id: 35,
    title: "HTML",
    description:
      "HTML (HyperText Markup Language) é a linguagem padrão para criar páginas web. Ele permite estruturar conteúdo usando uma série de elementos e marcações que definem títulos, parágrafos, imagens, links e muito mais. HTML é o alicerce de todas as páginas da web.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    type: "FrontEnd",
    references: [
      "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
      "https://www.w3schools.com/html/",
      "https://html.spec.whatwg.org/",
    ],
  },
  {
    id: 36,
    title: "CSS",
    description:
      "CSS (Cascading Style Sheets) é uma linguagem de estilo usada para descrever a apresentação de documentos escritos em HTML ou XML. Ele define como os elementos devem ser exibidos na tela, em papel ou em outros meios, permitindo controlar layouts, cores, fontes, espaçamentos, etc.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    type: "FrontEnd",
    references: [
      "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
      "https://www.w3schools.com/css/",
      "https://www.css-tricks.com/",
    ],
  },
  {
    id: 37,
    title: "Sass",
    description:
      "Sass (Syntactically Awesome Stylesheets) é uma extensão de CSS que adiciona poder e elegância ao básico das folhas de estilo. Ele oferece funcionalidades como variáveis, aninhamento, mixins e funções, permitindo que os desenvolvedores escrevam CSS mais limpo e fácil de manter.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
    type: "FrontEnd",
    references: [
      "https://sass-lang.com/documentation",
      "https://www.geeksforgeeks.org/sass/",
      "https://www.tutorialspoint.com/sass/index.htm",
    ],
  },
  {
    id: 38,
    title: "Less",
    description:
      "Less é uma linguagem de estilo que é compilada para CSS. Ele estende o CSS com funcionalidades como variáveis, operadores e funções, tornando a escrita de CSS mais dinâmica e produtiva. O Less é amplamente utilizado em grandes projetos por sua flexibilidade.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/81/LESS_Logo.svg",
    type: "FrontEnd",
    references: [
      "https://lesscss.org/",
      "https://www.geeksforgeeks.org/less-css/",
      "https://www.tutorialspoint.com/less/index.htm",
    ],
  },
  {
    id: 39,
    title: "Linting",
    description:
      "Linting é o processo de análise estática do código para identificar erros e problemas de formatação. Ferramentas de linting, como ESLint e Stylelint, ajudam a manter um código mais limpo, evitando bugs e inconsistências de estilo em projetos de front-end e back-end.",
    imageUrl: "./assets/linting.webp",
    type: "Concepts",
    references: [
      "https://eslint.org/docs/latest/",
      "https://stylelint.io/",
      "https://www.freecodecamp.org/news/what-is-linting-and-how-can-it-save-you/",
    ],
  },
  {
    id: 40,
    title: "Liskov Substitution Principle (LSP)",
    description:
      "O princípio de Substituição de Liskov afirma que objetos de uma classe derivada devem poder substituir objetos de sua classe base sem afetar o comportamento esperado do sistema.",
    imageUrl: "./assets/liskov substitution.webp",
    type: "Logic",
    references: [
      "https://stackify.com/solid-design-liskov-substitution-principle/",
      "https://www.freecodecamp.org/news/liskov-substitution-principle-explained-in-plain-english/",
      "https://www.geeksforgeeks.org/liskov-substitution-principle/",
    ],
  },
];
