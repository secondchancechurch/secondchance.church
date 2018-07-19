const express = require('express')
const next = require('next')
const { join } = require('path')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const redirects = [
  { from: '/give/now', to: 'https://pushpay.com/pay/secondchancechurch' },
  { from: '/sermons', to: 'https://www.youtube.com/channel/UCCpz1dcwossIIP8hW61DOqw' },
  { from: '/easter', to: '/' }
]

app.prepare().then(() => {
  const server = express()

  redirects.forEach(({ from, to, type = 302, method = 'get' }) => {
    server[method](from, (req, res) => {
      res.redirect(type, to)
    })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})