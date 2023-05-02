<h1 align="center">GPT Playground</h1>

<p align="center">Gpt playground is an interractive playground for developers to test the full capabilities of openai's gpt-based models. It is accessible on desktop and mobile  devices with rich support for both classes of devices, enabling developers access to the capabilities of Open API's GPT-based models even while on the go.</p>

<p align="center">You can use the Playground to test your use cases and when you are ready, click on view code to get the generated code for your application based on the current configuration on the playground. You can use this code to add openai's GPT-3 model capabilities to your applications</p>


<h3 align="center">
  <b><a href="https://gpt-playground-three.vercel.app/">Get Started</a></b>
  •
  <b><a href="https://platform.openai.com/examples">Examples</a></b> 
</h3>

<img width="1330" alt="Screenshot 2023-05-02 at 14 10 46" src="https://user-images.githubusercontent.com/22568024/235676168-360ce45f-5fff-4244-93e8-5f093958f22e.png">

## Features
- Create text Completions using any of openai's GPT-based models, "text-davinci-003", "text-curie-001", "text-babbage-001", "text-ada-001" etc.
- Generate code for your applications in NodeJs, Python, Curl and JSON
- Save your prompts as presets and come back to them

## Running the application

You can start using gpt-playground [here](https://gpt-playground-three.vercel.app/) right away but if you want to self host or run locally, here are a couple of ways to do that:

#### Docker (preferred): You need to have Docker installed!
1. Clone the repo:
```
> git clone git@github.com:lawalbolaji/gpt-playground.git
```
2. In the project's root directory, run:
```
> cp .env.example .env.local
```
3. Create Auth0 credentials [here](https://auth0.com/docs/quickstart/webapp/nextjs/01-login) and add those credentials to your `.env.local` file
4. Get OpenAI API Key [here](https://platform.openai.com/account/api-keys) and add those credentials to your `.env.local` file
5. Boot up your docker container:
```
> docker-compose -f dev.docker-compose.yml up -d
```

#### Local Machine with nodejs
1. Clone the repo:
```
> git clone git@github.com:lawalbolaji/gpt-playground.git
```
2. In the project's root directory, run:
```
> cp .env.example .env.local
```
3. Create Auth0 credentials [here](https://auth0.com/docs/quickstart/webapp/nextjs/01-login) and add those credentials to your `.env.local` file
4. Get OpenAI API Key [here](https://platform.openai.com/account/api-keys) and add those credentials to your `.env.local` file
5. Install NodeJs dependencenies:
```
> npm ci
```
6. Boot up:
```
> npm run dev
```

See instructions [here](https://github.com/lawalbolaji/gpt-playground/tree/main/deploy) on how to setup different poroduction envvironments for the project.

## Contributing
- Missing something or found a bug? [Report here](https://github.com/lawalbolaji/gpt-playground/issues).
- Pull requests are welcome but for major issues, please open an issue [here](https://github.com/lawalbolaji/gpt-playground/issues) for discussion first.

## License
P2P-Wazobia is available under [Apache License 2.0](https://github.com/lawalbolaji/gpt-playground/blob/main/LICENSE).
