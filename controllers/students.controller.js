const { createStudent, getStudents, deleteStudent } = require('../queries/student.queries');

exports.studentCreate = async (req, res, next) => {
  try {
    const body = req.body;
    await createStudent({ ...body});
    res.redirect('/students/signup/form');
  } catch(e) {
    console.log(e);
  }
}

exports.deleteStudent = async (req, res, next) => {
  try {
    const body = req.body;
    await deleteStudent({ ...body});
    res.redirect('/students');
  } catch(e) {
    console.log(e);
  }
}
  
exports.signupForm = (req, res, next) => {
    console.log("Je visite : " + new Date());
    res.render('students/student-form');
}
4
exports.getStudents = async (req, res, next) => {
  const students = await getStudents();
  students.forEach(student => student.date = getFormattedDate(new Date(student.createdAt)));

  res.render('students/student-list', {students});
}

function getFormattedDate(date) {
  var year = date.getFullYear();

  var month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;

  var day = date.getDate().toString();
  day = day.length > 1 ? day : '0' + day; 
  
  return month + '/' + day + '/' + year;
}