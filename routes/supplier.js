const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');
const { deleteSuppliers, updateSuppliers, createSuppliers, getSuppliers } = require('../controllers/supplier');
const { validateJWT } = require('../middlewares/validate-jwt');
const { validator, } = require('../middlewares/validator');


router.use(validateJWT);

router.get('/get', getSuppliers);
router.post('/new', createSuppliers);
router.put('/update/:id', updateSuppliers);
router.delete('/delete/:id', deleteSuppliers);



module.exports = router;
