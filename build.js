const fs = require('fs')
const path = require('path')
const buildTime = new Date()

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Github Actions</title>
    <style>
      body {
        font-family: system-ui, sans-serif;
        display: flex;
        height: 100vh;
        margin: 0;
        text-align: center;
      }
      div {
        margin: auto;
      }
      a {
        color: slateblue;
      }
    </style>
  </head>
  <body>
    <div>
      <h2><a href="https://github.com/Jinksi/netlify-build-github-actions">Netlify build triggered by Github Actions</a></h1>
      <h1><time datetime="${buildTime.toISOString()}">${buildTime.toUTCString()}</time></h1>
    </div>
  </body>
</html>
`

const outputDir = 'build'
fs.mkdirSync(outputDir, { recursive: true })
fs.writeFileSync(path.join(outputDir, 'index.html'), html)
console.log('💯 Successfully built index.html')
