const Student = require('../config/database/models/student.model');
const { getStudents, propectStudent, unpropectStudent} = require('../queries/student.queries');

exports.getStudents = async (req, res, next) => {
  const students = await getStudents();
  const unprospectedStudents = [];
  const prospectedStudents = [];

  students.forEach(student => {
    if(!student.prospecter) {
      unprospectedStudents.push(student);
    } else {
      prospectedStudents.push(student);
    }
  });

  unprospectedStudents.forEach(student => student.date = getFormattedDate(new Date(student.createdAt)));
  prospectedStudents.forEach(student => student.date = getFormattedDate(new Date(student.createdAt)));

  const hightStudents = [];
  const lowStudents = [];

  unprospectedStudents.forEach( student => {
    if(isImportant(student)) {
      hightStudents.push(student);
    } else {
      lowStudents.push(student);
    }
  })
  res.render('prospection/prospection', {hightStudents, lowStudents, prospectedStudents});
}

exports.prospectStudents = async (req, res, next) => {
 
  const studentId = req.params.studentId;
  await propectStudent(studentId);

  res.redirect('/prospection');
}

exports.unpropectStudent = async (req, res, next) => {
 
  const studentId = req.params.studentId;
  await unpropectStudent(studentId);

  res.redirect('/prospection');
}

function isImportant(student) {

    if(student.scolarite === 'Français' && student.classe === 'Terminal') {
      return true;
    }

    if(student.scolarite === 'Ecole Européenne' && student.classe === 'Septième') {
      return true;
    }

    if(student.scolarite === 'Luxembourgeois' && student.classe === 'Première') {
      return true;
    }

    if(student.scolarite === 'Belge' && student.classe === 'Sixième') {
      return true;
    }

    if(student.scolarite === 'Allemand' && student.classe === 'Douzième') {
      return true;
    }
}

function getFormattedDate(date) {
  var year = date.getFullYear();

  var month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;

  var day = date.getDate().toString();
  day = day.length > 1 ? day : '0' + day;
  
  return month + '/' + day + '/' + year;
}