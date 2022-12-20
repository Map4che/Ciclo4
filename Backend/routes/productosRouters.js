const express = require("express");
const router = express.Router();
const productosController = require("../controllers/productosController");
const authMidd = require("../middleware/authMidd");


router.get("/home", productosController.obtenerProductosHome );

router.get("/:id", authMidd, productosController.obtenerProductoId );

router.get("/home/:id", productosController.obtenerProducto );



router.post("/", authMidd, productosController.crearProducto);

router.put("/:id", authMidd, productosController.actualizarProducto);

router.delete("/:id", authMidd, productosController.borrarProducto);

module.exports=router;
