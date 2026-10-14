
const express = require('express');
const router = express.Router();
const pageController = require('../controllers/page.controller');

router.get('/', pageController.home);
router.get('/tentang', pageController.about);
router.get('/katalog', pageController.catalog);
router.get('/tambah', pageController.showForm);
router.post('/tambah', pageController.addDestination);

module.exports = router;
