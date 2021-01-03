
const express = require('express')
const helmet = require("helmet");
const app = express()
var path = require('path');
const port = process.env.PORT || 3000

let adminRouter = require('./routes/admin');

let authRouter = require('./routes/auth');
let usersRouter = require('./routes/users');
let homeRouter  = require('./routes/home');
let savedRouter = require('./routes/saved');
let worksRouter = require('./routes/works');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(helmet());

const { sequelize , testConnection } = require('./database');

const { checkTables , pushSomeFakeInfo } = require('./models/models');

let testDatabase = async () => {
  await testConnection();
  await checkTables();
  // await pushSomeFakeInfo();
}

testDatabase();

app.use('/admin', adminRouter);

app.use('/auth' , authRouter);
app.use('/home' , homeRouter);
app.use('/users', usersRouter);
app.use('/saved', savedRouter);
app.use('/works', worksRouter);

app.use( 
  '/public', 
  express.static(path.join(__dirname, 'public'))
);

app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})