const express = require('express');
const router = express.Router();
const admin = require('../controllers/adminController');


router.post('/assign-table',admin.createAssignment);
router.get('/getAssign-user/:user_id',admin.getAssignmentsForUser);
router.post('/acknowledge/:user_id/:candidate_id',admin.acknowledgeAssignment);

module.exports = router
