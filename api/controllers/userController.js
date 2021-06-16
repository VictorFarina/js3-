
// vi skapar en router 
// vi gör en variabel som innehåller hela userModel.js 
//vi ropar på routern, använder funktionen post, stopparin url /register som första argument och funktionen registerUser som finns i userModel som andra argument. detta gör att vi kan hänvisa ett object hit för att registeraUser ska ta emot den som en request=)
const router = require('express').Router();
const userModel = require('../models/users/userModel')
const auth = require('../auth/auth')
router.get('/:id', auth.verifyToken, userModel.getUser)
router.post('/register', userModel.registerUser);
router.post('/login', userModel.loginUser);
router.patch('/:id', userModel.addToOrders);
module.exports = router;