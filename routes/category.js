const {Router} = require('express');
const router = Router();
const  {check} = require('express-validator');
const {validator} = require('../middlewares/validator');
 

//Controllers
const { validateJWT } = require('../middlewares/validate-jwt');
const { getCategories,createCategories, updateCategories, deletedCategories } = require('../controllers/category');


//Routes 


router.post('/get',getCategories);
router.post('/new',createCategories);
router.put('/update/:id',updateCategories);
router.delete('/delete/:id',deletedCategories);

// router.post('/new',[
//     //Middlewares
// check('name','The name is Required').not().isEmpty(),
// check('email','The Email is Required').isEmail(),
// check('password','The Password is Required and should have most the six characters').isLength({min:6}),validator
// ],createUser);






module.exports = router;