const express = require("express");
const conectarDB = require("./config/db");
const usuarioRoutes = require("./routes/usuarioRoutes");
const categoriasRouters = require("./routes/categoriasRouters");
const productosRouters = require("./routes/productosRouters");
const auth = require("./routes/auth");
const cors = require("cors");

const app = express();

app.use(express.json({extended: true}));
conectarDB();

//habilitar los CORS
app.use(cors());

//rutas

app.use("/api/usuarios", usuarioRoutes);
app.use("/api/auth", auth);
app.use("/api/categorias", categoriasRouters);
app.use("/api/listacategorias", categoriasRouters);
app.use("/api/productos", productosRouters);
app.use("/api/listaproductos", productosRouters);



app.listen(4000, () => {
    console.log("servidor esta corriendo en el puerto 4000")
});