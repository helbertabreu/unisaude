# UniSaúde

A UniSaúde é uma API para armazenar o prontuário do paciente de forma unificada para que possa ser acessado de qualquer clínica ou hospital, facilitando assim disgnósticos, marcação de consultas, exames e outras funcionalidades.

Link da apresentação: https://docs.google.com/presentation/d/1AhH1pszxQ2i3_d7oAp6nLKQwOu7oGjjRNATQde-TdBc/edit#slide=id.p

<br>

# **Características**

Registra todo o histórico de saúde do paciente e facilita a marcação de consultas e exames (online ou presencial), além de outras funcionalidades.

- O paciente sempre terá acesso aos seus dados, medicamentos, exames e vacina que foram receitados a ele.

- O médico em qualquer hospital ou clínica, terá acesso ao prontuário completo e atualizado em um único local

<br>

# **Inicializando a instalação**

Rode o comando abaixo para instalar todas as dependências do projeto:

```
yarn install
```

<br>

**Configure as variáveis de ambiente no arquivo .env utilizando suas credenciais para se conectar ao banco de dados local.**

Rode as migrações para gerar as tabelas no banco de dados com o comando abaixo:

```
yarn typeorm migration:run -d src/data-source
```

<br>

Inicia a aplicação com o comando:

```
yarn dev
```
