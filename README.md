# UCLA Theta Tau Website

<p float="left">
    <a href="https://github.com/Anan1218/thetataubruins.org/actions/workflows/pages/pages-build-deployment">
    <img src="https://github.com/Anan1218/thetataubruins.org/actions/workflows/pages/pages-build-deployment/badge.svg" /></a>
    <a href="https://www.javascript.com/">
    <img src="https://img.shields.io/badge/JavaScript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E" /></a>
    <a href="https://reactjs.org/">
    <img src="https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB" /></a>
    <a href="https://www.gatsbyjs.com/">
    <img src="https://img.shields.io/badge/Gatsby-%23663399.svg?style=flat&logo=gatsby&logoColor=white" /></a>
    <a href="">
    <img src="https://img.shields.io/badge/npm-%23000000.svg?style=flat&logo=npm&logoColor=white" /></a>
</p>

This repo contains the frontend for the new https://thetataubruins.org that is built with [Gatsby](https://www.gatsbyjs.org/) and deployed on [Github Pages](https://pages.github.com/).

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Gatsby CLI](https://www.gatsbyjs.com/docs/reference/gatsby-cli/)

## Getting Started Locally

To run the site locally, you'll need to install the dependencies to get started:
```bash
# Download repo
$ git clone https://github.com/Anan1218/thetataubruins.org.git
$ cd thetataubruins.org
# Install dependencies
$ npm install
# Local development in browser
$ npm run start
```
Note: if `npm install` fails due to dependency conflicts, run it will the `--legacy-peer-deps` flag.

## Deployment

To deploy your changes to the live site:
```bash
# Custom script that cleans the cache, builds a production version of the site and deploys it to Github Pages
$ npm run deploy
```
Note: this will push whatever local changes you have, so make sure you have pulled the most recent version of the repo and pushed your changes.

## Debugging

Windows users, who aren't using [WSL](https://docs.microsoft.com/en-us/windows/wsl/about), might encounter `node-gyp` errors when trying to npm install.
To resolve, make sure that you have both Python 2.7 and the Visual C++ build environment installed.

```
npm config set python python2.7
npm install --global --production windows-build-tools
```

[Full details here](https://www.npmjs.com/package/node-gyp "NPM node-gyp page").

MacOS and WSL users who might also encounter some errors, check [node-gyp](https://github.com/nodejs/node-gyp) for more info. We recommend using the latest stable node version.

## Purgecss

This plugin uses [gatsby-plugin-purgecss](https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/) and [bulma](https://bulma.io/). The bulma builds are usually ~170K but reduced 90% by purgecss.

# CONTRIBUTING

Contributions are always welcome, no matter how large or small. Before contributing,
please read the [code of conduct](CODE_OF_CONDUCT.md).