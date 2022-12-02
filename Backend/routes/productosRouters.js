const express = require("express");
const router = express.Router();
const productoController = require("../controllers/productosController");
const authMidd = require("../middleware/authMidd");

router.get("/", authMidd, productoController.obtenerProducto );

router.post("/", authMidd, productoController.crearProducto);

router.put("/:id", authMidd, productoController.actualizarProducto);

router.delete("/:id", authMidd, productoController.borrarProducto);

module.exports=router;
