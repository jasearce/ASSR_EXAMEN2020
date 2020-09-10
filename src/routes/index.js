const { Router } = require('express');
const router = Router();
const { getTopFiveCovid, getCovid } = require('../controller/index.controller');

router.get('/', getCovid);
router.get('/top-covid', getTopFiveCovid);

module.exports = router;