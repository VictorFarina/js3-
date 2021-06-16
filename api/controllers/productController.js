const router = require('express').Router();
const productModel = require('../models/products/productModel')
// const auth = require('../auth/auth')

//hämta data från db-------------------------------
//skapa en route vid vilken och ange en endpoint där funktionen getProducts som deklarerats i productModel.js körs

router.get('/', productModel.getProducts);

//-------------------------------------------------
//hämta endast en specefik produkt från databasen
//skapa en route och ange en parameter som endpoint, 
router.get('/:id',productModel.getProduct);
//-------------------------------------------------
//posta data till db-------------------------------
router.post('/new',productModel.createProduct); 
//------------------------------------------------


//uppdateera data db------------------------------
router.patch('/:id', productModel.updateProduct);

//------------------------------------------------
//radera data db----------------------------------

// router.delete('/:id', productModel.deleteProduct);

//-----------------------------------------------

module.exports = router;