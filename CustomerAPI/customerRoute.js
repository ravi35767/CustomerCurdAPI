const { Router } = require('express');
const { viewCustomer, insertCustomer, editCustomer, deleteCustomer } = require('../contollers/customerController');

const router = Router();

router.get('/viewCustomer',viewCustomer);
router.post('/insertCustomer',insertCustomer);
router.put('/editCustomer/:id',editCustomer);
router.delete('/deleteCustomer/:id',deleteCustomer);

module.exports = router;
