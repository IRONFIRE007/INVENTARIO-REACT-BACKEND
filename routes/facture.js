const {Router} = require('express');
const router = Router();
const  {check} = require('express-validator');
const { getFactures, createFactures, deletedFactures } = require('../controllers/facture');
const { validateJWT } = require('../middlewares/validate-jwt');
const {validator,} = require('../middlewares/validator');

router.use(validateJWT);

router.get('/get',getFactures);
router.post('/new', createFactures);
router.delete('/delete/:id',deletedFactures);



module.exports = router;
