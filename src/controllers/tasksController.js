const tasksModel = require('../models/tasksModel')
const ApiError = require('../helpers/ApiError')

const listTask = async (req, res, next) =>{
    try {
        const tasks = await tasksModel.findAll();
        return res.status(200).json(tasks);
    } catch (error) {
        next(error);
    }
    
}

const createTask = async (req, res, next) =>{
    try {
        // titulo não enviado
        if(!req.body.title)
            throw new ApiError('Informe o titulo', 400)

        const task = await tasksModel.create({
            title: req.body.title,
            status: req.body.status || 'pendente',
        })
        return res.status(201).json(task)
    } catch (error) {
        next(error);
    }
}

const editTask = async (req, res, next) =>{
    try {
        // id não é numero
        if (isNaN(req.params.id))
            throw new ApiError('O id precisa ser inteiro', 400)

        // titulo não enviado
        if(!req.body.title)
            throw new ApiError('Informe todos os dados', 400)

        let task = await tasksModel.findOne({where: {id: req.params.id}});

        // tarefa não existe pelo id
        if (!task)
            throw new ApiError('A tarefa não existe.', 404);

        // atualiza tarefa
        await tasksModel.update({
            title: req.body.title,
            status: req.body.status
        }, {
            where: {
                id: req.params.id
            }
        })

        task = await tasksModel.findOne({where: {id: req.params.id}});

        return res.status(200).json(task)
    } catch (error) {
        next(error);
    }
}

const deleteTask = async (req, res, next) =>{
    try {
        // id não é numero
        if (isNaN(req.params.id))
            throw new ApiError('O id precisa ser inteiro', 400)

        let task = await tasksModel.findOne({where: {id: req.params.id}});

        // tarefa não existe pelo id
        if (!task)
            throw new ApiError('A tarefa não existe.', 404);

        // exclui tarefa
        await tasksModel.destroy({where: { id: req.params.id } })
        return res.status(204).json()
    } catch (error) {
        next(error);
    }
}

module.exports = { listTask, createTask, editTask, deleteTask }