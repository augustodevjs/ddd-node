# Domain Driven Design

## DDD:

É uma forma de desenvolver software com o foco no coração da aplicação - o que chamamos de domínio - tendo o objetivo de entender suas regras, processos e complexidades, separando-as assim de outros pontos complexos que normalmente são adicionados durante o processo de desenvolvimento.

- O DDD deve ser aplicado para casos de projetos de softwares complexos.
- Grandes projetos possuem muitas áreas, muitas regras de negócio, muitas pessoas com diferentes visões em diferentes contextos.
- Não há como não utilizar técnicas avançadas em projetos de alta complexidade.
- Grande parte da complexidade desse tipo de software não vem da tecnologia, mas sim da comunicação, separação de contextos, entendimento do negócio por diversos ângulos.

### Como o DDD pode ajudar?

- Entender com profundidade o domínio e subdomínios da aplicação.
- Ter uma linguagem universal (linguagem ubíqua) entre todos os envolvidos.
- Criar o design estratégico utilizando Bounded Contexts.
- Criar o design tático para conseguir mapear e agregar as entidades e objetos de valor da aplicação, bem como os eventos de domínio.
- Clareza do que é complexidade de negócio e complexidade técnica.

### Elementos táticos:

- Quando estamos falando sobre DDD e precisamos olhar mais a fundo um bounded context. Precisamos ser capazes de modelarmos de forma mais assertiva os seus principais componentes, comportamentos e individualidades, bem como suas relações.

### Entidades:

- Uma entidade é algo único que é capaz de ser alterado de forma contínua durante longo período de tempo.
- Uma entidade é algo que possui uma continuidade em seu ciclo de vida e pode ser distinguida independente dos atributos que são importantes para a aplicação do usuário. Pode ser uma pessoa, cidade, carro um ticket de loteria ou uma transição bancária.

### Value Objects:

- Quando você se preocupa apenas com os atributos de um elemento de um model, classifique isso como um Value Object.
- Trate o value object como imutável.

### Aggregate:

- Um agregado é um conjunto de objetos associados que tratamos como uma unidade para propósito de mudança de dados.

### Domain Services:

- Um serviço de domínio é uma operação sem estado que cumpre uma tarefa específica do domínio. Muitas vezes, a melhor indicação de que você deve criar um Serviço no modelo de domínio é quando a operação que você precisa executar parece não se encaixar como um método em um Agregado ou um Objeto de Valor.

### Repositórios:

- Um repositório comumente se refere a um local de armazenamento, geralmente considerado um local de segurança ou preservação dos itens nele armazenados. Quando você armazena algo em um repositório e depois retorna para recuperá-lo, você espera que ele esteja no mesmo estado que estava quando você o colocou lá. Em algum momento, você pode optar por remover o item armazenado do repositório.
- Esses objetos semelhantes a coleções são sobre persistência. Todo tipo Agregado existente terá um Repositório. De um modo geral, existe uma relação um-para-um entre um Agregado e um Repositório.

### Domain Events:

- Use um evento de domínio para capturar uma ocorrência de algo que aconteceu no domínio.
- A essência de um evento de domínio é que você o usa para capturar coisas que podem desencadear uma mudança no estado do aplicativo que você está desenvolvendo. Esses objetos de evento são processados para causar alterações no sistema e armazenados para fornecer um AuditLog.
- Todo evento deve ser representado em uma ação realizada no passado:
    - UserCreated
    - OrderPlaced
    - EmailSent
- Normalmente um Domain Event deve ser utilizado quando queremos notificar outros Bounded Contexts de uma mudança de estado.
- Components
    - Event
    - Handler: Executa o processamento quando um evento é chamado.
    - Event Dispatcher: Responsável por armazenar e executar os handlers de um evento quando ele for disparado.
- Dinâmica
    - Cria um “Event Dispatcher”
    - Cria um “Event”
    - Cria um “Handler” para o “Event”
    - Registra o Evento, juntamente com o Handler no “Event Dispatcher”
- Agora para disparar um evento, basta executar o método “notify” do “Event Dispatcher”. Nesse momento, todos os handlers registrados no evento serão executados.

### Módulos:

- Em um contexto DDD, Módulos em seu modelo servem como contêineres nomeados para classes de objetos de domínio que são altamente coesas entre si. O objetivo deve ser baixo acoplamento entre classes que estão em módulos diferentes. Como os Módulos usados no DDD não são compartimentos de armazenamento anêmicos ou genéricos, também é importante nomear adequadamente os Módulos.
- Respeitar a linguagem Universal
- Baixo acoplamento
- Um ou mais agregados devem estar juntos somente se fazem sentido.
- Organizado pelo domínio/subdomínio e não pelo tipo de objetos
- Devem respeitar a mesma divisão quando estão em camadas diferentes.

### Factories:

- Desloque a responsabilidade de criar instâncias de objetos complexos e AGREGADOS para um objeto separado, que pode não ter responsabilidade no modelo de domínio, mas ainda faz parte do design do domínio. Forneça uma interface que encapsule toda a criação complexa que não exija que o cliente faça referência às classes concretas dos objetos que estão sendo instanciados. Crie Aggregates inteiros de uma única vez, reforçando suas invariantes.