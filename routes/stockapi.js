const express   = require('express');
const router    = express.Router();

const stockCtrl = require('../controllers/stockCtrl');
router.get('/stock/list', stockCtrl.getStockList);
router.get('/networth', stockCtrl.getNetworth);
router.get('/stock/details/:sid', stockCtrl.getShareDetails)

module.exports  = router;