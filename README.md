- [Fundamentos web](#fundamentos-web)
  - [About Fundamentos](#about-fundamentos)
  - [Getting Started](#getting-started)
    - [Node](#node)
    - [Docker](#docker)


# Fundamentos web

[Português Brasil](./docs/README-pt-br.md)

<p align="center">
  <img src="https://raw.githubusercontent.com/JoaoEmanuell/fundamentos-plus-web/master/src/app/favicon.ico" alt="icon" width="100px"/>
</p>

Web Fundamentals is a web version made for the [Fundamentos](https://play.google.com/store/apps/details?id=com.fundamentos.app&pcampaignid=web_share) app.

[Click here to access the website hosted on Vercel](https://fundamentos-plus-web.vercel.app/).


## About Fundamentos

Play Store description:

The main goal of Fundamentos is to help in the formation of the faith and life of Jesus' disciples. All the content produced in the project will be accessible for free.

The content is divided into 16 cycles with over 150 lessons.

All the lessons taught weekly on the Fundamentos YouTube channel can be found here in text format, so that each disciple of Jesus can read attentively and share with their connections.
You should study the main teaching topics, meditate, multiply the learning, and above all, live it. This will enable the life of Christ to reach other people.

Here, you will have access to apostolic content prepared exclusively for a secure Christian formation based on the values and principles established by God himself.

You can use the material available in text, video, and/or audio format (according to your preferred streaming platform). And in each lesson, you will have exercises to do and put the received learning into practice.

The content available each week is progressive and aims at the uniform formation and foundation of the church, so we will speak and live the same things.

And so we will advance: well taught, well instructed, and well grounded in the truths of the Gospel of Jesus Christ.

God bless your life!

## Getting Started

Web Fundamentals uses Next.js as the base for its application, being built with React and Tailwind CSS, using [JSON Server](https://www.freecodecamp.org/news/json-server-for-frontend-development/) as a mock API (this is done to save costs).

### Node

```
Node => 18.17
```

Clone the project.

```
git clone https://github.com/JoaoEmanuell/fundamentos-plus-web.git
```

Install the dependencies.

```
npm install
```

Run the project in development mode.

```
npm run dev
```

### Docker

```
Docker => 24
docker-compose => 1.29
```

Clone the project.

```
git clone https://github.com/JoaoEmanuell/fundamentos-plus-web.git
```

Build with Docker.

```
docker-compose build
```

Run the container.

```
docker-compose up -d
```

Access the container bash.

```
docker container exec -it fundamentos-plus-web_fundamentos_plus_develop_1 bash
```

Follow the [Node](#node) steps.