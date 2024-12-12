const express = require('express');
const herbsController = require('../controllers/herbsController');
const router = express.Router();

router.get('/', herbsController.getHerbs);
router.get('/search', herbsController.searchHerb);
router.get('/:id', herbsController.getHerb);


module.exports = router;
