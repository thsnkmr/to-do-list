const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(
      "mongodb+srv://thsnkmra:aavfvkvTT4ynpPFC@todolist.sj8ajls.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("MongoDB Atlas conectado com sucesso."))
    .catch((err) => console.log(err));
};

module.exports = connectToDb;
