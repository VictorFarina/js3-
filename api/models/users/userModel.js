
const mongodb =require('mongoose')
//hämta mongo db 
const User = require('../users/userSchema')
//hämta userSchema
const bcrypt = require('bcrypt')
//hämta bcrypt för attkunna kryptera användarens lösenord innan den sparas i databasen
const auth = require('../../auth/auth')


exports.registerUser = (req, res) => { 
  //funktionen ska innehålla en parameter för request och ett för respond
  User.exists({email: req.body.email}, (err, result) => { 
    // 1. Kolla om det redan inns en User med smma mail som den body som skickats med i request. Vi får vi tillbaka ett error eller ett resultat. 
    if (err) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: 'You made a bad request',
        err
      })
    }
    // Om vi får ett error så betyder det att  objektet eller det som skickats med i requesten inte är byggd enligt userSchema. då reurneras ett response med status 400 och ett  json object som innehållerr med status  och felmeddelande om en Bad Request  

    if (result) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: 'The email address is already taken',
      })
    } 
    //om vi få tillbaka ett resultat betyder det att det fans en User med samma mail. Även i detta fall returners ett respons med status 400 och men med som meddelar att mailen redan finns 


    //----CRYPTING USER PASSWORD-------//
    const salt = bcrypt.genSaltSync(10)
     //.Om mailen är unik så deklareras en varriabel som heter Salt. den sska användas förr salting , vilket innebär att vi med hjälp av bcrypt kan lägga till random bokstäver i en viss ordning i en string 
    bcrypt.hash(req.body.password, salt, (err, hash) => {
      if (err) {
        return res.status(500).json({
          statusCode: 500,
          status: false,
          message:'Failed when encrypting user password',
          err
        })
      }
      // med hjälp av bcrypt så kan vi använda funktionen hash med lösenordet som kommer med bodyn i request som första argument, och salta det med innhållet vi fick frrån Salt genom att skriva det som andra argument och som tredje argument begära en callbackfuction som ger antingen ett err eller ett Hash
      //om (err) status kod 500 jsonobject som medellar om att kryperingen misslyckats

      const newUser = new User ({
        firstName:      req.body.firstName,
        lastName:       req.body.lastName,
        email:          req.body.email,
        passwordHash:   hash, 
      })
      //annars skapar vi en en newUser som innehåller en ny instans objectet User (se userSchema) och likställer varje property med det som användaren skickat med i body i request, här kan vi också välja att likställa  propertyn passwordHash med det hash som vi tidigarde skapade. tex  firstName:  req.body.firstName,  passwordHash: hash 

      newUser.save().then(() => {
            res.status(201).json({
            statusCode: 201,
            status: true,
            message: 'User was created successfully'
            })
          })
          .catch((err) => {
            res.status(500).json({
              statusCode: 500,
              status: false,
              message:'Failed to create user',
              err
            })
          })
    })
  })
}
// vi sparar newuser genom att self selfinvoka functionen save() och när den är färdig med det .then  så begärr vi en callback med ett respond med statusen  201 och ett  jscon object innehåller  bla ett meddelande  att registreringen lyckades... Om någåt gick fel .catch(err) så får blir callbacken istället ett respond med status 500 och ett json pbject som säger att registreringen misslyckats



//----LOGINUSER (recieving request trough userController.js)----
exports.loginUser = (req, res) => {
  // return res.status(404).json({
  //   statusCode: 404,
  //   status: false,
  //   message:'Incorrect email or password'  +' '+ req.body.email
  // })

 
  User.findOne({ email: req.body.email }).then ( user => {
      if (!user) {// mail dosen't exist {
        return res.status(404).json({
          statusCode: 404,
          status: false,
          message:'Incorrect email or password' ,
        })
      }

      

      
      bcrypt.compare(req.body.password, user.passwordHash, (err, result) => {
        if (err) {
          return res.status(400).json({
            statusCode: 400,
            status: false,
            message: 'Bad request'
            
          })
        }

        if (result) { //req.body.password===user.passwordHash
            return res.status(200).json({
            statusCode: 200,
            status: true,
            message: "Authentication was successfully.",
            token: auth.generateToken(user),
          })
        }

        else {
         return res.status(401).json ({
            statusCode: 401,
            status: false,
            message: 'incorrect email or password'
          })
        }
      })
  })

}





exports.getUser = (req, res) => {
  User.findOne({ email: req.params.id }).then((user) => {
    if (!user) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: "You made a bad request.",
      });

    } else {
      return res.status(200).json({
        statusCode: 200,
        status: true,
        message: "Getting user Successfully",
        user, 
      });
    } 
  })
}

exports.addToOrders =( req, res) => {
  User.updateOne ({$push:{orders: req.body}}) 
    .then(()=>{
      res.status(200).json({
        statusCode:200,
        status:true,
        message: 'user updated'
      })
    })
      .catch(()=>{
        res.status(500).json({
          statusCode:500,
          status:false,
          message: 'failed to update user'
      })
    })
}



    

  


