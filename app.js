
const express = require('express')
const app = express()
const port = process.env.PORT | 3000

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let homeRouter  = require('./routes/home');
let savedRouter = require('./routes/saved');
let worksRouter = require('./routes/works');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const { sequelize , testConnection } = require('./database');

const { syncTables } = require('./models/models');

let testDatabase = async () => {
  await testConnection();
  await syncTables();
}

testDatabase();

app.use('/'     , indexRouter);
app.use('/home' , homeRouter);
app.use('/users', usersRouter);
app.use('/saved', savedRouter);
app.use('/works', worksRouter);


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})