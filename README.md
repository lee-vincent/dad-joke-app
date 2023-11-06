# CS361 Assignment 6 - Milestone #1 Requirements

### Has a way for users to interact

- GENERATE and REGENERATE Buttons
- Input Form

### Reflects each Inclusivity Heuristic

1. **Explain the benefits of using new and existing features:** Everything on the page is very simple to understand and labeled appropriately.
2. **Explain the costs of using new and existing features:** The pre-entered text in the input form gives the user an indication of how to use the website.
3. **Let people gather as much information as they want, and no more than they want:** This is a single page webapp with an input form and a button so the user can gather all info just by looking at it.
4. **Keep familiar features available:** There are no surprises when a button is clicked.
5. **Make undo/redo and backtracking available:** Hit regenerate button any time to redo.
6. **Provide an explicit path through the task:** The title at the top and pre-entered input text make usage clear.
7. **Provide ways to try out different approaches:** The user can enter any text they want to get different jokes.
8. **Encourage tinkerers to tinker mindfully:** The user is totally protected because there is nothing to tinker with except for inputting different text.

### Reflects 3 Quality Attributes / Non-functional Requirements

1. **Simplicity:** The web app will be extremely simple and easy to understand because it will look familiar by resembling the google.com search page.
2. **Responsiveness:** The web app will respond with either the generated dad joke or a timeout message after 15 seconds.
3. **Reusability:** The Vue.JS web-framework will be used (in 100% of the project) to keep HTML and JavaScript code re-useable.

# TODO:

Partner's microservice should generate random topics, and this app will submit it to the
ai dad-joke chat-bot for dad joke creation
It should be in the form:
noun location verb adverb
could have a save button
deploy node.js on ec2: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/setting-up-node-on-ec2-instance.html
use vue.js lifecycle hooks async created() to make api request to partner microservice to fill in the input form default text:
https://vueschool.io/lessons/vue-3-component-lifecycle-hooks

EC2 instructions:
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
source .bashrc
nvm install 18 --lts
wsl: tar cf dad-joke.tar ./ai-chatbot
wsl: scp -i ~/.ssh/bastion ./dad-joke.tar ec2-user@52.207.210.115:/home/ec2-user
tar xf dad-joke.tar
cd ai-chatbot
nvm use 18
npm install
npm run dev

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
