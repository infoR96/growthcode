/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/
const { Router } = require('express');



const router = Router();




router.get('/work', (req,res)=>{
    res.json({
        ok: true,
    })
} );






module.exports = router;