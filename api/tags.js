const express = require('express');
const tagsRouter = express.Router();
const { getAllTags } = require('../db');

tagsRouter.use((req, res, next) => {
  console.log("Balto's request is being made to /Tags");

  next(); 
});

tagsRouter.get('/', async (req, res) => {
    const tags = await getAllTags();
  
    res.send({
        tags
    });
  });

module.exports = tagsRouter;