const {Router} = require('express');
const router = Router();
const  {check} = require('express-validator');
const { getProducts, createProducts, updateProducts, deleteProducts } = require('../controllers/product');
const { validateJWT } = require('../middlewares/validate-jwt');
const {validator,} = require('../middlewares/validator');

router.use(validateJWT);

router.get('/get',getProducts);
router.post('/new', createProducts);
router.put('/update/:id',updateProducts);
router.delete('/delete/:id',deleteProducts);



module.exports = router;
