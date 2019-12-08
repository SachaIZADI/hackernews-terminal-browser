# HackerNews Terminal Browser

[![Generic badge](https://img.shields.io/badge/Try%20it!-GitHub%20pages-blue.svg?style=flat&logo=appveyor)](https://sachaizadi.github.io/hackernews-terminal-browser/)

This project offers a bash-like interface to read the latest news from [HackerNews](https://news.ycombinator.com/)

<img src = "media/interface.gif" height="300">


## How to use this app
The web app is deployed [here](https://sachaizadi.github.io/hackernews-terminal-browser/) on GitHub pages. You can use the following commands

* `help`: anytime your lost.
* `news N`: will display the top N news on HackerNews - if N is not provided (or is not an integer) the default value is 5.


## Why
It's been a while that I wanted to play around with this kind of UI and React. I found a very neat open source React library [terminal-in-react](https://github.com/nitin42/terminal-in-react) implementing this design. I also wanted to test the deployment of 100% client-side webapps with Github pages.


## Notes to myself

### How to deploy a React App with Github Pages:
https://github.com/gitname/react-gh-pages


### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

#### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

#### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


