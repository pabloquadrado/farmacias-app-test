## 🖥 Instalação

1. Clonar o projeto
2. Criar os arquivos .env e .env.test configurando as variáveis de ambiente contidas no arquivo .env.example.
3. Instalar as dependências do projeto através de ``` yarn ```
4. Para rodar o servidor basta executar ``` yarn dev ```
5. Por fim, basta rodar as migrations executando: ``` yarn knex migrate:latest ```

## 🛤 Rotas da Aplicação

### Categorias 

- **` POST /category `**: Rota para cadastrar uma categoria. O corpo da requisição deve conter o nome da categoria. Após o cadastro, será retornado o nome da categoria com o identificador gerado automaticamente. Exemplo de corpo da requisição:

````json
{
	"name": "Categoria Teste"
}
````

- **` GET /category `**: Rota para listar todas as categorias cadastradas.

- **` DELETE /category/:id `**: Rota para deletar uma categoria.

### Farmácias 

- **` POST /pharmacy `**: Rota para cadastrar uma nova farmácia. O corpo da requisição deve conter os dados da farmácia, tais como: nome, cobertura de entrega e endereço. Após o cadastro, será retornado os dados da farmácia com o identificador gerado automaticamente. Exemplo de corpo da requisição:

```json
{
	"name": "Farmácia Teste",
	"delivery_coverage": 2000,
	"address": {
		"street": "Rua X",
		"district": "Bairro TY",
		"city": "Porto Alegre",
		"state": "RS",
		"zip_code": "9500000"
	}
}
```

- **` GET /pharmacy `**: Rota para listar todas as farmácias cadastradas.

- **` DELETE /pharmacy/:id `**: Rota para deletar uma farmácia.

### Produtos

- **` POST /product `**: Rota para cadastrar um novo produto. O corpo da requisição deve conter os dados da produto, tais como: categoria, código, título, preço de custo e preço atual. Após o cadastro, será retornado os dados do produto com o identificador gerado automaticamente. Exemplo de corpo da requisição:

```json
{
	"category_id": 2,
	"code": 123,
	"title": "Produto Teste",
	"cost_price": 99.90,
	"price": 109.90
}
```

- **` GET /product `**: Rota para listar todas os produtos cadastradas.

- **` DELETE /product/:id `**: Rota para deletar um produto.

### Ofertas 

- **` POST /offer `**: Rota para cadastrar uma nova oferta. O corpo da requisição deve conter os dados da oferta tais como: produto, farmácia, preço e quantidade. Após o cadastro, será retornado os dados da oferta com o identificador gerado automaticamente. Exemplo de corpo da requisição:

```json
{
    "product_id": 6,
    "pharmacy_id": 2,
    "price": 99.9,
    "quantity": 10
}
```

- **` GET /offer `**: Rota para listar todas as ofertas cadastradas.

- **` DELETE /offer/:id `**: Rota para deletar uma oferta.
