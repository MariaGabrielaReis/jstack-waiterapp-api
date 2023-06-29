<div align="center"> <img src="https://user-images.githubusercontent.com/69374340/212697368-5eff469f-bbd8-4a96-80ba-e539367e1a20.png" /> </div>

API para o projeto WAITERAPP, um app para restaurantes que permite criar cardápios, anotar e gerenciar pedidos! 🍕 <br>
**Aplicação construída num evento do JStack** :fire:

> :hammer_and_wrench: Tecnologias e ferramentas: **TypeScript, Node, Express, MongoDB, Docker, Insomnia**

## :gear: Como rodar

Com o [Node](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/) e [Git](https://git-scm.com/) instalados, siga o tutorial abaixo:

```bash
# Clone esse repositório
$ git clone https://github.com/MariaGabrielaReis/jstack-waiterapp-api.git

# Instale as dependências do projeto, assim como suas tipagens
$ yarn

# Execute a aplicação
$ yarn start

# O servidor inciará na porta:3333 - acesse http://localhost:3333
```

> Use o Insomnia, por exemplo, para realizar as requisições (importe a coleção [deste arquivo](./requests_collection))

## :railway_track: Rotas

<details>
 <summary>Endpoints disponíveis para gerenciamento de <b>Categorias</b></summary>
 <br>

|                                                                  Tipo | Ação                          | Caminho                            |
| --------------------------------------------------------------------: | :---------------------------- | :--------------------------------- |
|  [![](https://img.shields.io/badge/GET-2E8B57?style=for-the-badge)]() | Listar categorias             | `/categories`                      |
| [![](https://img.shields.io/badge/POST-4682B4?style=for-the-badge)]() | Criar categoria               | `/categories`                      |
|  [![](https://img.shields.io/badge/GET-2E8B57?style=for-the-badge)]() | Listar produtos por categoria | `/categories/:categoryId/products` |

</details>

<details>
 <summary>Endpoints disponíveis para gerenciamento de <b>Produtos</b></summary>
 <br>

|                                                                  Tipo | Ação            | Caminho     |
| --------------------------------------------------------------------: | :-------------- | :---------- |
|  [![](https://img.shields.io/badge/GET-2E8B57?style=for-the-badge)]() | Listar produtos | `/products` |
| [![](https://img.shields.io/badge/POST-4682B4?style=for-the-badge)]() | Criar produto   | `/products` |

</details>

<details>
 <summary>Endpoints disponíveis para gerenciamento de <b>Pedidos</b></summary>
 <br>

|                                                                    Tipo | Ação                   | Caminho            |
| ----------------------------------------------------------------------: | :--------------------- | :----------------- |
|    [![](https://img.shields.io/badge/GET-2E8B57?style=for-the-badge)]() | Listar pedidos         | `/orders`          |
|   [![](https://img.shields.io/badge/POST-4682B4?style=for-the-badge)]() | Criar pedido           | `/orders`          |
|  [![](https://img.shields.io/badge/PATCH-e8bf2c?style=for-the-badge)]() | Mudar status do pedido | `/orders/:orderId` |
| [![](https://img.shields.io/badge/DELETE-e6373d?style=for-the-badge)]() | Cancelar pedido        | `/orders/:orderId` |

</details>

<br>
<br>

[![image](https://img.shields.io/badge/✨%20Maria%20Gabriela%20Reis,%202023-LinkedIn-009973?style=flat-square)](https://www.linkedin.com/in/mariagabrielareis/)
