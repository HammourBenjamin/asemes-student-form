const router = require('express').Router();
const students = require('./students.routes');
const prospection = require('./prospection.routes');

router.use('/students', students);
router.use('/prospection', prospection);

router.get('/', (req, res) =>  {
    console.log("Je visite");
    res.render('students/student-form', { errors: null});
})

module.exports = router;