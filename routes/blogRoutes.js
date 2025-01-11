const express = require('express');
const routes = express.Router();
const controllers = require('../controllers/blogControllers');

routes.get('/', controllers.blog_index);
  
routes.post('/', controllers.blog_create_post);
  
routes.get('/create', controllers.blog_create_get)

routes.get('/:id', controllers.blog_details)
  
routes.delete('/:id', controllers.blog_create_delete)


module.exports = routes;