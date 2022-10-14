# Rocket Academy Coding Bootcamp: Personal Project 1

This web application allows students to practice basic arithmetic easily in a fun and intuitive way.

## Demo

https://jon-rocketacademy-journey.github.io/quick-maths

## Setup

1. To install the node packages, run

`npm install`

2. To start the project in development mode locally, run

`npm start`  
or  
`BROWSER=none npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Deploy

1. Configure `package.json`

```json
{
  "homepage": "<url-to-github-page>",
  ...
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    ...
  },
  ...
}
```

2. Then deply to github page run

`npm run deploy`