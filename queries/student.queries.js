const Student = require('../config/database/models/student.model');

exports.propectStudent = async (studentId) => {
  try {

    const filter = { _id: studentId };
    const update = { prospecter: true };

    return Student.findOneAndUpdate(filter, update);;
  } catch(e) {
    throw e;
  }
}

exports.deleteStudent = async (student) => {
  try {
    return Student.deleteOne({_id: student.id });
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
      pays: student.pays,
      ville: student.ville,
      ecole: student.ecole,
      classe: student.classe,
      options: student.options,
    })
    return newStudent.save();
  } catch(e) {
    throw e;
  }
}

exports.getStudents = async () => {
  return Student.find({}).exec();
}