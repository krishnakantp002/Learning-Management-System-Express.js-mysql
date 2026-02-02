const express = require('express')
const courseRouter = express.Router()
const courseController = require('../controllers/course.controller.js')

courseRouter.get('/course',courseController.getAllCourses)
courseRouter.get('/course/:course_id',courseController.getCourseById)
courseRouter.post('/course',courseController.createCourse)
courseRouter.put('/course/:course_id',courseController.updateCourse)
courseRouter.delete('/course/:course_id',courseController.deleteCourse)




module.exports=courseRouter;