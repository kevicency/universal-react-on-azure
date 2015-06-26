import Express from 'express'

const log = require('debug')('server')

const app = new Express()

app.use((req, res) => {
  res.status(200).send('Hello World')
})

const port = process.env.port || 3000
app.listen(port, (err) => {
  if (err) {
    log(err)
  } else {
    log(`Listening on port ${port}`)
  }
})
