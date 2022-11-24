const express = require("express");
const conectarDB = require("./config/db");
const app = express();
const usuarioRoutes = require("./routes/usuarioRoutes");
const categoriaRoutes = require("./routes/categoriaRoutes");
const productoRoutes = require("./routes/productoRoutes");
const auth = require("./routes/auth");


app.use(express.json({extended: true}));
conectarDB();

//rutas

app.use("/api/usuarios", usuarioRoutes);
app.use("/api/auth", auth);
app.use("/api/categorias", categoriaRoutes);
app.use("/api/productos", productoRoutes);



app.listen(4000, () => {
    console.log("servidor esta corriendo en el puerto 4000")
});