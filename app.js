
const express = require('express')
const app = express()
const port = process.env.PORT | 3000

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

app.use(express.json());

const {sequelize , testConnection } = require('./database');

// testConnection();

const { User , syncTables } = require('./models');

// syncTables();

const createUser = async () => {
  try {
    let newUser = await User.create({ username : 'sajjad' , phone_number : '09381308994' });
    // newUser.save();
    // console.log(newUser);
  } catch (e) {
    console.log(e);
  }
}

createUser();

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})