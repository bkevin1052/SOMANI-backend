const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://kevin:Magicjack123@cluster0.ltzut.mongodb.net/ZuperAppDB?retryWrites=true&w=majority', {
    useNewUrlParser: true
}) 
    .then(db => console.log(`DB is connected`))
    .catch(err => console.error(err));