const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const pool = require('./src/dbconfig/db.config');

const Contact = require('./src/routes/Contact.routes');

const app = express();
app.use(cookieParser());
app.use(express.json());
// app.use(cors);

//Enable this in case of CORS error at clients end.
app.use(
  cors({
    origin:'http://localhost:3000',
    credentials: true,
  }),
);

const port = process.env.PORT || "3001";
app.listen(port, (err)=>{
    if(err){
        console.log( err );
        throw err;
    }
    else{
        console.log(`Server is running at port: ${port}`);
    }
});

app.use('/api/Contact', Contact);