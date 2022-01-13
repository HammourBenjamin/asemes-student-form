const router = require('express').Router();
const { signupForm, getStudents, studentCreate, deleteStudent } = require('../controllers/students.controller');

router.get('/signup/form', signupForm);
router.get('/', getStudents);
router.post('/signup', studentCreate);
router.delete('/remove', deleteStudent)

module.exports = router;