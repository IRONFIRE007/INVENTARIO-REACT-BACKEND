const {Router} = require('express');
const router = Router();
const  {check} = require('express-validator');
const { informationProducts } = require('../controllers/information');
const { validateJWT } = require('../middlewares/validate-jwt');
const {validator,} = require('../middlewares/validator');

router.use(validateJWT);

router.get('/get',informationProducts);



module.exports = router;
