const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({path: path.resolve(__dirname+'/.env')});
}

// Initializations
const app = express();
require('./database');

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
app.use(cors());
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename(req, file, cb) {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
})
app.use(multer({storage}).single('image'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
//Usuario
app.use('/api', require('./routes/login'));

//Lista
app.use('/api/lists', require('./routes/lists'));

//Servicios
app.use('/api/services', require('./routes/services'));

// static files
app.use(express.static(path.join(__dirname, 'public')));

// start the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});