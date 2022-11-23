const mongoose = require("mongoose");

const conectarDB = async ()=>{
    try{
        const connection = await mongoose.connect(
            "mongodb+srv://Map4che:$MapachitoJP6489!@map4che.o97nelc.mongodb.net/?retryWrites=true&w=majority",{
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );

        const url= `${connection.connection.host}:${connection.connection.port}`;
        console.log(`MongoDB conectado en:${url}`);
      
    }catch(error){
        console.log(`error:${error.message}`);
        process.exit(1);
    }
};

module.exports = conectarDB;