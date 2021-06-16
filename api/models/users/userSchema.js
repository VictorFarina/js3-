const mongodb = require('mongoose')

const userSchema = mongodb.Schema ({

    firstName:      { type: String, required: true },

    lastName:       { type: String, required: true },

    email:          { type: String, required: true, unique:true},

    passwordHash:   { type: String, required: true },

    orders:         {type: Array},
    
    created:        { type: Date, default:Date.now },

    modified:       { type: Date, default:Date.now }
 
})

module.exports = mongodb.model('User', userSchema);


//SKAPA ETT SCHEMA FÖR VAD VARJE USER OBJECTSKA INNEHÅLLA 
//----hämta mongo db 
//----skapa ett mongodb schema som faställer properties fö schemat
//----exportera modulen som "User" vilket automatiskt skapar en collection av "Users " i mongodb. 

