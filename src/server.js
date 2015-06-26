import Express from 'express'

const app = new Express()

app.use((req, res) => {
  res.status(200).send('Hello World')
})

const port = process.env.port || 3000
app.listen(port, (err) =>{
  if (err) {
    console.error(err)
  } else {
    console.info(`Server listening on port ${port}`)
  }
})
