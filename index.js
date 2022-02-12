const PORT = 1337;
const express = require('express');
const server = express();
const apiRouter = require('./api');
const morgan = require('morgan');
const { client } = require('./db');
client.connect();

server.use('/api', apiRouter);
server.use(morgan('dev'));
server.use(express.json())

server.use((req, res, next) => {
  console.log("<____Body Logger START____>");
  console.log(req.body);
  console.log("<_____Body Logger END_____>");
  next();
});

server.listen(PORT, () => {
  console.log('Server is up on Port:', PORT)
});


server.use(async (req, res, next) => {
  const prefix = 'Bearer '
  const auth = req.headers['Authorization'];

  if (!auth) {
    next(); // don't set req.user, no token was passed in
  }
})


  /*
POST /api/users/register
POST /api/users/login
DELETE /api/users/:id

GET /api/posts
POST /api/posts
PATCH /api/posts/:id
DELETE /api/posts/:id

GET /api/tags
GET /api/tags/:tagName/posts
*/
