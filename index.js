const express = require('express');
const cors = require('cors');
require('dotenv').config();


//Server
const app = express();

//Public 
app.use(express.static('public'));


//JSON
app.use(express.json());

//Cors
app.use(cors());


//Auth Routes 

app.use('/api/auth', require('./routes/auth'));
app.use('/api/category', require('./routes/category'));
app.use('/api/supplier', require('./routes/supplier'));
app.use('/api/client', require('./routes/client'));
app.use('/api/product', require('./routes/product'));
app.use('/api/sale', require('./routes/sales'));
app.use('/api/facture', require('./routes/facture'));
app.use('/api/return', require('./routes/returns'));
app.use('/api/info', require('./routes/information'));

app.listen(process.env.PORT || 3000, () => {
    console.log('listening on port ' + process.env.PORT);
});