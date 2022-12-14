const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuariosController");
const authMidd = require("../middleware/authMidd");

router.post(
    "/",
    usuarioController.crearUsuario
);

router.delete("/:id", authMidd, usuarioController.borrarUsuario);

/*
router.get("/", (req, res) =>{
    res.json({msg:"desde router"});
});

router.post("/",(req,res) =>{
    res.json({msg:"desde router post"});
});

router.put("/", (req,res) =>{
    res.json({msg:"Para actualizar"});
});

router.delete("/", (req,res) =>{
    res.json({msg:"Para borrar"});
});
*/

module.exports=router;