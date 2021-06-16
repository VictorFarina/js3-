const mongodb = require('mongoose');

const productSchema = mongodb.Schema({
    name:       { type: String, required: true},
    desc:       { type: String, required: true },
    price:      { type: Number, required: true },
    img:        { type: String, required: true },
    created:    { type: Date, default: Date.now },
    modified:   { type: Date, default: Date.now }
})


module.exports = mongodb.model('Product', productSchema);