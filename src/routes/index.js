const {Router} = require('express');
const router = Router();
const admin = require('firebase-admin');

var serviceAccount = require("../../growthcode-5f232-firebase-adminsdk-yfmnc-8ff51a7926.json")

admin.initializeApp({
    credential:admin.credential.cert(serviceAccount),
    databaseURL:'https://growthcode-5f232-default-rtdb.firebaseio.com/'

})

const db = admin.database()

router.get('/', (req,res)=>{

    db.ref('contacts').once('value', (snapshot)=>{
        const data = snapshot.val();
        res.render('index',{contacts:data});
    });
    res.render('index');
});

router.post('/new-contact', (req,res) =>{
    console.log(req.body);
    const newContact={
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        phone:req.body.phone
    };
    db.ref('contacts').push(newContact);
    res.redirect('/')

} )

module.exports = router;
