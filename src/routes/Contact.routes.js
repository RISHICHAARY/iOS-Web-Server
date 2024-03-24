const { Router } = require('express');

const controllers = require('../controllers/Contact.Controller');
const router = Router()

router.post("/sendMessage", controllers.sendMail);

module.exports = router;