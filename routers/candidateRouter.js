const express = require('express');
const router = express.Router();
const candidate = require('../controllers/candidateController');

router.post('/candidate',candidate.insertCandidateData);
router.get('/list',candidate.getCandidates);
router.get('/main',candidate.getMainDetails);

module.exports = router
