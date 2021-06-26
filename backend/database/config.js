const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log("DB ONLINE");
  } catch (error) {
    console.log(error);
    throw new Error("Error al Inicializar la BD");
  }
};

module.exports = {
  dbConnection,
};
