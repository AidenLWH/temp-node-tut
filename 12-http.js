const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.write('Welcome to our homepage')
    res.end()
  }
  if (req.url == '/about') {
    res.end('Here is our short history')
  }
  res.end(`
  <h1>Oops!</h1>
  <p>We cant seem to find the page that you are looking for</p>
  <a hred="/'>back home</a>`)
})

server.listen(5000)
