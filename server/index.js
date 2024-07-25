const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DATABASE_SERVER_URL)
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch(err => {
    console.log(err);
  })

app.get('/', (req, res) => {
  res.send('Welcome to API');
});

const authRouter = require('./routers/Auth');
const userRouter = require('./routers/Users');

app.use('/auth', authRouter);
app.use('/users', userRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log(`server running on port ${PORT}`) });