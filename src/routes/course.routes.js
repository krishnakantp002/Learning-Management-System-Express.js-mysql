const express = require('express')
const router = express.Router()
const courseController = require('../controllers/course.controller.js')

router.get('/course',courseController.getAllCourses)
router.get('/course/:course_id',courseController.getCourseById)
router.post('/course',courseController.createCourse)
router.put('/course/:course_id',courseController.updateCourse)
router.delete('/course/:course_id',courseController.deleteCourse)




module.exports=courseController;