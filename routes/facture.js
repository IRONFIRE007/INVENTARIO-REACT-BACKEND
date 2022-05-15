const {Router} = require('express');
const router = Router();
const  {check} = require('express-validator');
const { getFactures, createFactures, deletedFactures } = require('../controllers/facture');
const {validator,} = require('../middlewares/validator');
 
router.get('/get',getFactures);
router.post('/new', createFactures);
router.delete('/delete/:id',deletedFactures);



module.exports = router;
