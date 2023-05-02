<h1 align="center">GPT Playground</h1>

<p align="center">Gpt playground is an interractive playground for developers to test the full capabilities of openai's gpt-based models. It is accessible on desktop and mobile  devices with rich support for both classes of devices, enabling developers access to the capabilities of Open API's GPT-based models even while on the go.</p>

<img width="1330" alt="Screenshot 2023-05-02 at 14 10 46" src="https://user-images.githubusercontent.com/22568024/235676168-360ce45f-5fff-4244-93e8-5f093958f22e.png">

## Running the application

### Local Development

#### Docker (preferred)
1. Clone the repo: `git clone git@github.com:lawalbolaji/gpt-playground.git`
2. CD to the project's root directory
3. Copy the `.env.local.example` file into a `.env.local` file
4. Create Auth0 credentials and add those credentials to your `.env.local` file
5. Boot up your docker container: `docker-compose -f dev.docker-compose.yml up -d`

#### Local Machine with nodejs
1. Clone the repo: `git clone git@github.com:lawalbolaji/gpt-playground.git`
2. CD to the project's root directory
3. Copy the `.env.local.example` file into a `.env.local file`
4. Create Auth0 credentials and add those credentials to your `.env.local` file
5. RUN `npm ci`

### Production

See instructions [here](https://github.com/lawalbolaji/gpt-playground/tree/main/deploy) on how to setup different poroduction envvironments for the project.
