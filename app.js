
const express = require('express')
const app = express()
const port = process.env.PORT | 3000

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

app.use(express.json());

const { sequelize , testConnection } = require('./database');

const { pushSomeFakeInfo } = require('./models/models');

let createDatabase = async () => {
  await testConnection();
  await pushSomeFakeInfo();
}

createDatabase();


app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})