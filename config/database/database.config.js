const mongoose = require("mongoose");
const env = require("../../env")[process.env.NODE_ENV];

mongoose
  .connect(env.dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("connexion ok !");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose;
