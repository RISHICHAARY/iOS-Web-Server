const pool = require('../dbconfig/db.config');
//const quries = require('../models/iOSTest.model');
const { mail } = require('../helpers/mailer');

// const addForm = async(req,res) => {
//     try{
//         const addForm = await pool.query(quries.addForm, []);
//         const testAdd1 = await pool.query(quries.testAdd, []);
//         const testAdd2 = await pool.query(quries.testAdd, []);
//         res.status(200).json({"message":"form added successfully"});
//     }
//     catch(error){
//         console.log(error)
//         res.status(201).json({"message":"viwe console for error"});
//     }
// }


const sendMail = async(req,res) =>{
    console.log("API Called");
    const {from,name,subject,body} = req.body;
    const mailResponse = await mail('rishichaary2007@gmail.com',subject+" from "+name+" , "+from,body);
    if(mailResponse){
        res.status(200).json({"message":"Message sent successfully"});
    }
    else{
        res.status(400).json({"message":"unable to send mail"})
    }
}

module.exports = {
    sendMail,
}