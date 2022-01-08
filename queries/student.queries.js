const Student = require('../config/database/models/student.model');

function getOption(student) {

  if (student.option != undefined) {
    return student.option;
  } else if (student.SAutre) {
    return student.SAutre;
  }

}

exports.propectStudent = async (studentId) => {
  try {

    const filter = { _id: studentId };
    const update = { prospecter: true };

    return Student.findOneAndUpdate(filter, update);;
  } catch(e) {
    throw e;
  }
}

exports.unpropectStudent = async (studentId) => {
  try {

    const filter = { _id: studentId };
    const update = { prospecter: false };

    return Student.findOneAndUpdate(filter, update);;
  } catch(e) {
    throw e;
  }
}

exports.createStudent = async (student) => {
  try {
    const newStudent = new Student({
      nom: student.nom,
      prenom: student.prenom,
      email: student.email,
      tel: student.full_phone,
      scolarite: student.scolarite,
      pays: student.pays_autre ? student.pays_autre : student.pays,
      ville: student.ville,
      ecole: student.ecole,
      classe: student.classe_autre ? student.classe_autre : student.classe,
      option: getOption(student),
    })
    return newStudent.save();
  } catch(e) {
    throw e;
  }
}

exports.getStudents = async () => {
  return Student.find({}).exec();
}