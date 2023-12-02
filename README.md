# GO LUNCH

## RFs (Requisitos Funcionais)

- [x] Deve ser possível se cadastrar;
- [ ] Deve ser possível se autenticar;
- [ ] Deve ser possível obter o perfil de um usuário logado;
- [ ] Deve ser possível cadastrar um restaurante (ou solicitar sua criação);
- [ ] Deve ser possível buscar por um restaurante;
- [ ] Deve ser possível votar em um restaurante por dia;

## RNs (Regras de Negócio)

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [ ] O usuário não pode votar em mais de um restaurante por dia;
- [ ] O cadastro só pode ser aceitado (ou realizado) por administradores;

## RNFs (Requisitos Não Funcionais)

- [x] A senha do usuário deve estar criptografada;
- [ ] Os dados da aplicação precisam estar persistidos em um banco de dados;
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);
- [ ] Votações realizadas há mais de 1 mês devem ser excluídas;
