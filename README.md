## 📁 Estrutura do Projeto

O projeto adota uma organização modular focada em funcionalidades, equilibrando a separação de 
responsabilidades com a simplicidade do desenvolvimento web nativo (HTML/CSS/JS).

```text
reescreva/
├── assets/          # Recursos globais e compartilhados (CSS base, JS de acessibilidade, imagens)
├── components/      # Fragmentos reutilizáveis de interface (Header, Footer)
├── classes/         # Módulo da funcionalidade de busca de turmas e mapa
├── referral/        # Módulo da funcionalidade de indicação de alunos
├── index.html       # Página inicial (Home)
└── README.md        # Documentação do sistema

O projeto é organizado em módulos por funcionalidade. Arquivos compartilhados
entre todo o site ficam em `assets/` e `components/`; cada funcionalidade
específica tem sua própria pasta com HTML, CSS e JS próprios, o que facilita
localizar e editar tudo relacionado a uma função sem precisar navegar entre
pastas distantes.

- **assets/**: recursos globais do site.
  - `css/global.css`: estilos base e variáveis de acessibilidade (tamanho de
    fonte, contraste) usadas em todas as páginas.
  - `images/`: logo, favicon e gráficos compartilhados.
  - `js/main.js`: lógica geral do site.
  - `js/speech-api.js`: integração com a Web Speech API do navegador para
    leitura em voz alta do conteúdo.
  - `js/accessibility.js`: controle do modo de alto contraste e do ajuste de
    tamanho de fonte.

- **components/**: componentes de interface reutilizados em mais de uma
  página, como header e footer.

- **classes/**: módulo de turmas e mapa. Mostra os pontos de ensino/EJA
  disponíveis na região, com filtros (ex: turno).

- **referral/**: módulo de indicação. Permite registrar o interesse de
  alguém (ou de si mesmo) em participar de uma turma.

- **index.html**: página inicial do site, na raiz do projeto por convenção
  (é o arquivo padrão que qualquer servidor carrega ao acessar o domínio).
