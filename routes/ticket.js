const router = require('express').Router();
const {addTicket,getTicket, getAllTickets,  deleteTicket} = require('../controllers/ticket');

router.post('/', getTicket).get('/', getAllTickets).post('/book',addTicket).delete('/:id', deleteTicket);


module.exports = router;
