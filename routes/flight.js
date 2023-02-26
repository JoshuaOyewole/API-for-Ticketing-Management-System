const router = require('express').Router();
const {findFlight,addFlight, findAllFlight} = require('../controllers/flight');

router.get('/availability', findFlight).post('/add', addFlight).get('/', findAllFlight);

module.exports = router;
