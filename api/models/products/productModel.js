
const mongodb = require('mongoose');
const Product = require('./productSchema');
//hämta produkter från databasen----------------------
//exportera funktionen getProducts(), som sen kan köras  i //app.js
//funktionen ska ge tillbaka ett response med data från databasen eller ett errormeddelande om något går fel
//alt 1------------then function---------------------

exports.getProducts = (req, res) => {
    Product.find()
        .then(data =>res.status(200).json(data))
        .catch(err => res.status(500).json({
            statusCode:500,
            status:false,
            message:err.message || 'Something went wrong '+req
        }))
        
}
//---------------------------------------------------
//alt 2------------callback function---------------------
// exports.getProducts = (req,res) => {
//     Product.find({}, (err, data) => {
//         if(err) {
//             return
//             res.status(500).json({
//                 statusCode:500,
//                 status:false,
//                 message:err.message || 'Something went wrong'
//             })
//         }
//             res.status(200).json(data)
//     })
// }
//---------------------------------------------------
//alt 3------------async function---------------------
// exports.getProducts = async (req, res) => {
//     try {
//         const data = await Product.find()
//         res.status(200).json(data);
//     }
//     catch(err) {
//         res.status(500).json({
//             statusCode: 500,
//             status: false,
//             message: err.message || 'Something went wrong'
//         })
//     }
// }
//--------------------------------------------------
//--------hämta en specefik produkt från databasen-----
//skapa en fuktion som jämför ett en parameter(req) med parametrar i databasen ( i detta fall _id:). Om formatet på parametern inte alls är likvärrdig så ska ett felmedelande skickas, om formatet på request parametern är likvärdig så skickas ett respons(result) i form av en boolean som är true om parametern finns i databasen, eller false om parametern inte finns 
//-----------callback function innehållande ifsatser --------------
exports.getProduct = (req, res) => {
    Product.exists({ _id: req.params.id }, (err, result) => {
        if(err) {
            return res.status(400).json({
                statusCode: 400,
                status:     false,
                message:    'Bad request,'

            })

        }
        if(result) {//<---booleaan true---

            Product.findById(req.params.id)

            .then(data=> res.status(200).json(data))//<------proodukten finns
            .catch(err=> res.status(500).json({
                statusCode: 500,
                status:     false,
                message:    err.message
            }))
        } else { //<------boolean false--produkten finns inte
            res.status(404).json({
                statusCode: 404,
                status:     false,
                message:    err || 'This product does not exist in database'
            })
        }
    })
}
//------------------------------------------
//------lägga upp produkter i databasen
//skapa en funktion som först kollar med databasen om prdukten redan finns eller om produktnamnet är av fel format. Om inte produkten reddan finns (else) så deeklarera en ny funktion heter newProduct vilken i sig skapar en ny instans av Product, som innehåller parametrarna namn,short,desc,price och img.använd sen metoden save() på newProduct för att spara objeket som ett jsonobjekt
exports.createProduct= (req, res) => {
    Product.exists( { name: req.body.name }, (err,result) => {
        if (err) {
            return res.status(500).json ({
                statusCode:500,
                status:false,
                message: err || 'failed too create product'
            })
        }
        if (result) {
            return res.status(400).json({
                statusCode:400,
                status:false,
                message:'Bad request, product with same name already exists in database!'
            })
        } else {
            const newProduct = new Product({
                name:   req.body.name,
                desc:   req.body.desc,
                price:  req.body.price,
                image:  req.body.img 
            }) 
            newProduct.save()
             .then(() => {
                res.status(201).json({
                    statusCode: 201,
                    status:true,
                    message:'New product created successfully'
                })
             })
             .catch( err => {
                res.status(500).json({
                     statusCode:500,
                     status:false,
                     message:err.message ||'Failed to create product'
                })
             })
        }
    })
}
//uppdatera em product 
//----------------------------------------------------
exports.updateProduct = (req, res) => {
    Product.exists({ _id: req.params.id }, (err, result) => {
        if(err) {
            return res.status(400).json({
                statusCode: 400,
                status:     false,
                message:    'Bad request, invalid format'
            })
        }
        if (result) {
            Product.updateOne({ _id: req.params.id }, {
                //här spreadar vi det som finns i bodyn i objektet och ser till parametern modiefied får en ny tid och datum för ändringen 
                ...req.body,
                modified: Date.now()
            })
            .then(() => {

                res.status(200).json({

                    statusCode: 200,
                    status:     true,
                    message:    'Product updated successfully'

                })
            })
            .catch(() => {
                res.status(500).json({
                    statusCode: 500,
                    status:     false,
                    message:    'Product update failed'
                })
            })
        } else {
            res.status(404).json({
                statusCode: 404,
                status:     false,
                message:   err || 'This product does not exist in database'
            })
        }
    })
}
//-------------radera prodult från databasen-------------------
exports.deleteProduct = (req, res) => {
    Product.exists({ _id: req.params.id },(err, result) => {
        if (err) {
            
            return res.status(400).json({
                statusCode:400,
                status:false,
                message:'Bad request'
             });
        }

        if (result) {

            Product.deleteOne({ _id: req.params.id })
            .then(() => {
                res.status(200).json({
                statusCode:200,
                status:    true,
                message:'Product deletet fom database'
               })
            })

            .catch(() => {
                res.status(500).json ({
                    statusCode:500,
                    status:false,
                    message:'Failed to delete product',
                    err
                })
            })

        } else {
            res.status(404).json({
                statusCode: 404,
                status:     false,
                message:    err || 'This product does not exist in database'
            })
        }
    })
}
//-----------------------------------------------------------























    





