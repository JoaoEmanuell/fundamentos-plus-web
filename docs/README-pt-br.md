- [Fundamentos Web](#fundamentos-web)
  - [Sobre o Fundamentos](#sobre-o-fundamentos)
  - [Começando](#começando)
    - [Node](#node)
    - [Docker](#docker)


# Fundamentos Web

<p align="center">
  <img src="https://raw.githubusercontent.com/JoaoEmanuell/fundamentos-plus-web/master/src/app/favicon.ico" alt="icon" width="100px"/>
</p>

Fundamentos Web é uma versão web feita para o aplicativo do [Fundamentos](https://play.google.com/store/apps/details?id=com.fundamentos.app&pcampaignid=web_share).

[Clique aqui para acessar o site, hospedado no Vercel](https://fundamentos-plus-web.vercel.app/).

## Sobre o Fundamentos

Descrição da Play Store:

O alvo principal do Fundamentos é ajudar na formação da fé e da vida dos discípulos de Jesus. Todo o conteúdo produzido no projeto será acessível de forma gratuita.

O conteúdo está dividido em 16 ciclos com mais de 150 lições.

Todas as lições ministradas semanalmente no canal do Fundamentos no YouTube poderão ser encontradas aqui, em formato de texto, para que cada discípulo de Jesus possa ler com atenção e compartilhar com seus vínculos.
Você deve estudar os principais tópicos do ensino, meditar, multiplicar o aprendizado e, sobretudo, viver. Isso fará com que a vida de Cristo possa alcançar outras pessoas.

Aqui, você terá acesso ao conteúdo apostólico preparado exclusivamente para uma formação cristã segura e fundamentada nos valores e princípios estabelecidos pelo próprio Deus.

Poderá utilizar o material disponível em formato de texto, vídeo e/ou áudio (conforme sua plataforma de streaming favorita). E em cada lição você terá exercícios para fazer e colocar em prática o aprendizado recebido.

O conteúdo disponível a cada semana é progressivo e visa a formação e fundamentação uniforme da igreja, assim falaremos e viveremos sempre as mesmas coisas.

E assim avançaremos: bem ensinados, bem instruídos e bem fundamentados nas verdades do Evangelho de Jesus Cristo.

Deus abençoe sua vida!

## Começando

Fundamentos Web utiliza o Next.js como base para sua aplicação, sendo construído com React e Tailwind CSS, usando o [JSON Server](https://www.freecodecamp.org/news/json-server-for-frontend-development/) como uma API falsa (isso é feito para poupar custos).

### Node

```
Node => 18.17
```

Clone o projeto.

```
git clone https://github.com/JoaoEmanuell/fundamentos-plus-web.git
```

Instale as dependências.

```
npm install
```

Rode o projeto no modo de desenvolvimento.

```
npm run dev
```

### Docker

```
Docker => 24
docker-compose => 1.29
```

Clone o projeto.

```
git clone https://github.com/JoaoEmanuell/fundamentos-plus-web.git
```

Faça a build com o Docker.

```
docker-compose build
```

Execute o container.

```
docker-compose up -d
```

Acesse o bash do container.

```
docker container exec -it fundamentos-plus-web_fundamentos_plus_develop_1 bash
```

Execute os passos do [Node](#node).

