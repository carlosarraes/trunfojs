# Trunfo ~~Hérois~~ LoL

Refazendo o projeto da Trybe, com react typescrit e tailwind. Abandonei a ideia de utilizar uma API, fiz hardcode dos dados, expliquei no ultimo paragrafo!

## To-Dos

- [ ] Header
- [x] Form
  - [x] Estado
  - [x] Controlando Estado
  - [x] Verificação de Campos
  - ~~[ ] API ??~~
- [x] Visualizador de Carta
- [ ] Cartas Salvas
  - [x] Adicionar cartas
  - [ ] Deletar cartas
  - [x] Filtrar cartas
    - [x] Filtro por nome
    - [x] Filtro por raridade
    - [ ] Filtro por Super Trunfo
- [ ] Jogo
  - [ ] Iniciar Jogo
  - [ ] Controle de Cartas
  - [ ] Controle de Pontos
  - [ ] Restart Jogo
- [x] Footer
- [ ] Bonus: Dark Mode

## Regras do Trunfo


- Primeiramente, cada pessoa deve "pegar" uma carta aleatória do seu baralho.
- A primeira pessoa irá escolher um atributo para comparar com a carta da outra pessoa. Lembre-se que no Tryunfo os atributos podem ter nomes diferentes em cada baralho, por isso o ideal é se basear pela posição do atributo, ou seja, comparar o primeiro atributo da sua carta com o primeiro atributo da carta da pessoa rival.
- Ganha a rodada quem tiver o número maior no atributo escolhido.
- Ao término da rodada, cada pessoa deve "pegar" uma nova carta aleatória.
- A cada rodada é alternada a vez de quem escolhe o atributo para comparação.

### Tecnologias

- React
- Javascript
- Tailwind
- ~~Axios~~

#### API

Infelizmente, tive q incluir a data da API no proprio aplicativo, eu ia utlizar o RapiAPI, q tem uma key, como o react é client-sided, eu nao tenho como colocar a key "segura" num .env, logo tive q abandonar a ideia da API de League of Legends.
