const express = require('express')
const router = express.Router()
const tasksController = require('./controllers/tasksController')

router.get('/', (req, res, next) => res.status(200).json({message: "API OK"}))
router.get('/tasks', tasksController.listTask)
router.post('/tasks', tasksController.createTask)
router.put('/tasks/:id', tasksController.editTask)
router.delete('/tasks/:id', tasksController.deleteTask)


module.exports = router;