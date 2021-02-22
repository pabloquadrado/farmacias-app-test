## 🖥 Instalação

1. Clonar o projeto
2. Criar os arquivos .env e .env.test configurando as variáveis de ambiente contidas no arquivo .env.example.
3. Instalar as dependências do projeto através de ``` composer install ```
4. Em seguida, rodar as migrations executando: ``` php artisan migrate:fresh ```
5. Por fim, basta rodar o servidor executando ``` composer dev ```

## 🛤 Rotas da Aplicação

### Clientes

- **` POST /customers `**: Rota para cadastrar um cliente. Após o cadastro, será retornado os dados do cliente com o identificador gerado automaticamente. Exemplo de corpo da requisição:

````json
{
    "name": "Fulano",
    "document_number": 12345678910,
    "address": {
        "street": "Rua X",
        "district": "Bairro Y",
        "number": 360,
        "complement": "Apto 123",
        "city": "Porto Alegre",
        "state": "RS",
        "zip_code": "92500000"
    }
}
````

- **` GET /customers `**: Rota para listar todos os clientes cadastrados.

- **` DELETE /customers/:id `**: Rota para deletar um cliente.

### Formas de pagamento

- **` POST /customer/{customerId}/payment_method `**: Rota para cadastrar uma nova forma de pagamento do cliente. Após o cadastro, será retornado os dados da forma de pagamento com o identificador gerado automaticamente. Exemplo de corpo da requisição:

```json
{
    "payment_method": "PIX",
    "pix_key": 123,
    "card_holder_name": "Fulano",
    "card_number": "1234123412341234",
    "card_expiration_month": 8,
    "card_expiration_year": 27
}
```

- **` GET /customer/{customerId}/payment_method `**: Rota para listar todas as formas de pagamento cadastradas de um cliente.

- **` DELETE /customer/{customerId}/payment_method/{paymentMethodId} `**: Rota para deletar uma forma de pagamento de um cliente.
