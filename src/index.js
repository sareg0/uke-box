import express from 'express'

export const app = express()

const port = 3000

app.get('/', (req, res) => res.send({ message: 'jkljjj!' }))

app.post('/', (req, res) => {
  console.log(req.body)
  res.send({ message: 'ok' })
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))
