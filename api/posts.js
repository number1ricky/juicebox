const express = require('express');
const postsRouter = express.Router();
const { getAllPosts } = require('../db');

postsRouter.use((req, res, next) => {
  console.log("Balto's request is being made to /Posts");

  next(); // THIS IS DIFFERENT
});

postsRouter.get('/', async (req, res) => {
    const users = await getAllPosts();
  
    res.send({
        "posts": []
    });
  });

module.exports = postsRouter;