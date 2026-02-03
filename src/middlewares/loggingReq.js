const express = require('express')

const loggingReq = async (req,res,next) => {
    try {
       await console.log(`[${new Date().toLocaleString()}]${req.method},${req.url}`)
        next()
    } catch (error) {
      await  next(error)
    }
}

module.exports= loggingReq