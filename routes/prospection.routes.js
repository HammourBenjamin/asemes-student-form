const router = require('express').Router();
const { getStudents, prospectStudents, unpropectStudent } = require('../controllers/prospection.controller');

router.get('/deprospecte/:studentId', unpropectStudent);
router.get('/prospecte/:studentId', prospectStudents);
router.get('/', getStudents);

module.exports = router;