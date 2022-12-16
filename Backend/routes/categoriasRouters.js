const express = require("express");
const router = express.Router();
const categoriaController = require("../controllers/categoriasController");
const authMidd = require("../middleware/authMidd");

router.get("/home", authMidd, categoriaController.obtenerCategoria);

router.get("/", categoriaController.obtenerCategoriaHome);

router.get("/:id", authMidd, categoriaController.obtenerCategoria);

router.post("/", authMidd, categoriaController.crearCategoria);

router.put("/:id", authMidd, categoriaController.actualizarCategoria);

router.delete("/:id", authMidd, categoriaController.borrarCategoria);

module.exports=router;