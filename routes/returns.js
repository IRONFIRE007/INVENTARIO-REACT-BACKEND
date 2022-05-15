const {Router} = require('express');
const router = Router();
const  {check} = require('express-validator');
const { createReturns, getReturns, deletedReturns } = require('../controllers/returns');
const {validator,} = require('../middlewares/validator');

 
router.get('/get',getReturns);
router.post('/new', createReturns);
router.delete('/delete/:id',deletedReturns);



module.exports = router;
