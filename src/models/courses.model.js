const pool = require('../config/db.js') 
require('dotenv').config();

exports.getAllCourses = async () => {
    try {
        const [rows] = await pool.query('select * from courses')
        return rows 
    } catch (error) {
        throw error
    }
}

exports.getCourseById = async (course_id) => {
    try {
        const [rows] = await pool.query(
            'select * from courses where course_id=?',
            [course_id])
           return rows[0] 
    } catch (error) {
        throw error
    }
}

exports.createCourse = async (course_id,title,description,instrutor_id,is_published) => {
    try {
    const [result] = await pool.query(
        `insert into courses (course_id,title,description,instructor_id,is_published)
         values (?,?,?,?,?) `[course_id,title,description,instrutor_id,is_published]
    )
    return result        
    } catch (error) {
        throw error
    }
}

exports.updateCourse = async (course_id)=>{
    try {
        const [result] = await pool.query(`
            update course set 
            title =?,description=?,instructor_id=?,is_published=?
            where course_id=?
            `,[title,description,instrutor_id,is_published,course_id])
            return result
    } catch (error) {
        throw error
    }
}

exports.deleteCourse = async(course_id) => {
    try {
    const [result] = await pool.query(`
        delete from courses where course_id = ?
        `,[course_id])        
    } catch (error) {
        throw error
    }
}