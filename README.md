# Sistema de Gestão para Operadoras de Internet

Este projeto é um sistema backend para gerenciamento de clientes, planos e assinaturas de operadoras de internet. Foi desenvolvido seguindo os princípios da Clean Architecture e utiliza TypeScript, Express, TypeORM e SQLite.

## Arquitetura

O projeto segue a Clean Architecture proposta por Robert Martin, com as seguintes camadas:

```
src/
├── core/           # Camada de domínio (entidades e regras de negócio)
├── interfaces/     # Contratos de repositórios (SOLID)
├── use-cases/      # Casos de uso (lógica de aplicação)
├── infrastructure/ # Implementações concretas (banco, HTTP)
└── container.ts    # Configuração de injeção de dependência
```

## Tecnologias Utilizadas

- **TypeScript**: Linguagem principal
- **Express**: Framework web
- **TypeORM**: ORM para acesso ao banco de dados
- **SQLite**: Banco de dados relacional
- **TSyringe**: Injeção de dependência
- **Postman**: Teste de endpoints

## Pré-requisitos

- Node.js v18+
- npm

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/FelipeZag0/servico-gestao.git
cd servico-gestao
```

2. Instale as dependências:
```bash
npm install
```

## Configuração

O projeto usa SQLite como banco de dados. Um novo arquivo `database.sqlite` será criado automaticamente na primeira execução.

## Populando o Banco de Dados

Execute o script de seed para criar dados iniciais:
```bash
npm run seed
```

Este comando criará:
- 10 clientes
- 5 planos diferentes

## Executando o Servidor

Inicie o servidor com:
```bash
npm start
```

O servidor estará disponível em `http://localhost:3000`

## Endpoints

### Clientes
- **Listar todos os clientes**  
  `GET /gestao/clientes`

### Planos
- **Listar todos os planos**  
  `GET /gestao/planos`
- **Atualizar custo de um plano**  
  `PATCH /gestao/planos/:idPlano`  
  ```json
  {
    "custoMensal": 199.90
  }
  ```

### Assinaturas
- **Criar nova assinatura**  
  `POST /gestao/assinaturas`  
  ```json
  {
    "codCliente": 1,
    "codPlano": 1
  }
  ```
- **Listar assinaturas por status**  
  `GET /gestao/assinaturas/:status` (TODOS, ATIVOS, CANCELADOS)
- **Listar assinaturas de um cliente**  
  `GET /gestao/assinaturas/cliente/:codcli`
- **Listar assinaturas de um plano**  
  `GET /gestao/assinaturas/plano/:codplano`

## Princípios SOLID Aplicados

1. **Single Responsibility**: Cada classe tem uma única responsabilidade
2. **Open/Closed**: Entidades abertas para extensão, fechadas para modificação
3. **Liskov Substitution**: Repositórios podem ser substituídos por suas interfaces
4. **Interface Segregation**: Interfaces específicas para cada repositório
5. **Dependency Inversion**: Dependências de alto nível em abstrações, não em implementações

## Padrões de Projeto

- **Repository**: Para acesso a dados
- **Dependency Injection**: Para desacoplamento de componentes
- **Clean Architecture**: Separação em camadas

## Testando os Endpoints

Use o arquivo `template.postman_collection.json` para importar a coleção de endpoints no Postman.

## Estrutura de Pastas

```
servico-gestao/
├── src/
│   ├── core/             # Entidades e regras de negócio
│   ├── interfaces/       # Contratos de repositórios
│   ├── use-cases/        # Casos de uso
│   └── infrastructure/   # Implementações concretas
├── scripts/              # Scripts auxiliares
├── ormconfig.json        # Configuração do TypeORM
├── package.json          # Dependências e scripts
└── tsconfig.json         # Configuração do TypeScript
```

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um pull request

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).