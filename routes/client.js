const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');
const { creatClients, getClients, updateClients, deleteClients } = require('../controllers/client');
const { validator } = require('../middlewares/validator');

router.get('/get', getClients);
router.post('/new', creatClients);
router.put('/update/:id', updateClients);
router.delete('/delete/:id', deleteClients);



module.exports = router;
