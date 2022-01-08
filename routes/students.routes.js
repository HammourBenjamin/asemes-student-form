const router = require('express').Router();
const { signupForm, getStudents, studentCreate } = require('../controllers/students.controller');

router.get('/signup/form', signupForm);
router.get('/', getStudents);
router.post('/signup', studentCreate);

module.exports = router;