const mongoose = require("mongoose");
const schema = mongoose.Schema;

const studentSchema = schema({
        nom: String,
        prenom: String,
        email: String,
        tel: String,
        scolarite: String,
        pays: String,
        ville: String,
        ecole: String,
        classe: String,
        options: {type: Object},
        prospecter: {
          type: Boolean,
          default: false
      },
    },
    { timestamps: true }
  );
  
const Student = mongoose.model("student", studentSchema);

module.exports = Student;
