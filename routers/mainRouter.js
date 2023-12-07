const express = require('express');
const router = express.Router();
const userRoute = require('../routers/userRouter');
const candidateRoute = require('../routers/candidateRouter');
const adminRoute = require('../routers/adminRouter');

router.use('/user',userRoute);
router.use('/candidate',candidateRoute);
router.use('/admin',adminRoute);


module.exports = router