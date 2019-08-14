const fs = require('fs')
const path = require('path')

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Github Actions</title>
  </head>
  <body>
    <h1 id="timestamp">Last Build: ${new Date().toString()}</h1>
  </body>
</html>
`

const outputDir = 'build'
fs.mkdirSync(outputDir, { recursive: true })
fs.writeFileSync(path.join(outputDir, 'index.html'), html)
console.log('💯 Successfully built index.html')
