# CHE FDD Assignment

<!-- Describe where this readme is about.  -->

This is a project made for a CHE assignment (university of applied sciences).

The repo contains the public website & backend for the CHE FDD assignment I made. The website is made with Nuxt 3 and
for the back-end we use firebase functions.

## ✨ See it in action ✨

| Environment        | Web                                              |
|--------------------|--------------------------------------------------| 
| `CHE hosting`      | [View](https://fdd.che-ict.nl/2223/mjroeleveld/) |
| `Firebase hosting` | [View](https://che-fdd-assignment.web.app/)      |

## 🧰 External tooling

<!-- Provide links to external used tooling, like a Sketch, Jira, etc. -->

- [Figma for the designs](https://www.figma.com/file/2BVrpjljMfNUsaEuTBbsLU/CHE-FDD?node-id=0%3A1&t=JneFtIXnLIle8Axq-1)
- [Firebase for the backend](https://console.firebase.google.com/u/0/project/che-fdd-assignment)

## 🚀 Getting started

### Prerequisites

<!-- 
   Which software or library's are needed to be able to install this project?
 -->

- [WebStorm](https://www.jetbrains.com/webstorm/) or [Visual Studio Code](https://code.visualstudio.com/)
- Node Version Manager ([Mac](https://github.com/nvm-sh/nvm) | [Windows](https://github.com/coreybutler/nvm-windows))

### Installation

<!-- How to install this project (after having the prerequisites)? -->

- Use correct node version
```shell
nvm use
```
- Install packages in `/`, `/client` & `/functions`
```shell
npm i && cd client && npm i && cd ../functions && npm i
```

### Development

<!-- How to actually start developing? -->

- Run the client
```shell
cd client
npm run dev
```
- To run functions locally, run
```shell
cd functions
npm run serve

# to enable automatic reloading for functions, do the following in a separate tab
cd functions
npm run build:watch
```

### Deployment / Release process

Github Actions are used for automatic code-checking & deployment.
- If client build succeeds -> deploy to Amazon S3 & Firebase Hosting
- Functions are checked for linting & typescript but are not deployed automatically
- To deploy functions, run `npm run deploy` in the functions directory

## 🤚 Good to know

<!-- 
  A place to provide extra information (or links to it) about the project.
-->

- We use Dependabot for automatic package updates
- This creates pull requests every monday, for all npm packages that are outdated
