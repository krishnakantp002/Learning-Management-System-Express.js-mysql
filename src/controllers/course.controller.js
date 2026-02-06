const courseModel = require('../models/courses.model.js')

exports.getAllCourses = async(req,res) => {
    try {
    const result = await courseModel.getAllCourses()
    res.status(200).json({
        message: "All courses fetched",
        result:result
    })        
    } catch (error) {
        res.status(400).json({
            error : error.message
        })
    }
}

exports.getCourseById = async (req,res) => {
    try {
        const {course_id} = req.params;
        const result = await courseModel.getCourseById(course_id)
        if(!result) {
            res.status(404).json({
                message : "no courses found"
            })
        }
        res.status(200).json({
        message: "course fetched by course_id",
        result:result
    })
    } catch (error) {
        res.status(403).json({
            error:error.message
        })
    }
}

exports.createCourse = async (req,res) => {
    try {
        const {title,description,instructor_id,is_published} = req.body;
        const result = await courseModel.createCourse(title,description,instructor_id,is_published)
        res.status(201).json({
            message:'course created successfully by ' + instructor_id,
            result : result
        })
    } catch (error) {
        res.status(401).json({
            error:error.message
        })
    }
}

exports.updateCourse = async (req,res) => {
    const {course_id} =req.params
    const {title,description,instructor_id,is_published} = req.body
    if(!title || !instructor_id || !is_published){
        res.status(401).json({
            message:'All fields are required except description'
        })
    }
    const result = await courseModel.updateCourse(course_id,title,description,instructor_id,is_published)
    res.status(202).json({
        message:'course updated by' + instructor_id,
        result:result
    })
}

exports.deleteCourse = async(req,res) => {
    try {
    const {course_id} = req.params
    const result = await courseModel.deleteCourse(course_id)
    res.status(203).json({
        message:'course deleted successfully by' + instructor_id,
        result:result
    })        
    } catch (error) {
        res.status(402).json({
            error:error.message
        })
    }
}

