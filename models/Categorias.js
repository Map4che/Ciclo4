const mongoose = require("mongoose");

const CategoriasSchema = mongoose.Schema({
    nombre:{type: String, required:true, trim: true}
});

module.exports= mongoose.model("Categorias", CategoriasSchema);