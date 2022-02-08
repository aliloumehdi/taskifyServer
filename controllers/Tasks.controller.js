const Task = require('../models/Task.model'); 

exports.task_create = function (req, res) {
    var body=req.body
 
    let task = new Task(
        {
            
            todo: body.todo, 
            isDone:body.isDone
        }
    );
    task.save(function (err) {
        if (err) {
            console.log(err);
            return next(err);
        }
         
        res.send(task)
    })
};
exports.findById = function (req, res) {
    Task.findById(req.params.id, function (err, task) {
        
        if (err) {console.log(err); return next(err);}
        res.send(task);
    })
};
exports.findAll = function (req, res) {
    Task.find(function (err, task) {
        if (err) return next(err);
        res.send(task);
    })
};

exports.task_update = function (req, res) {
    Task.findByIdAndUpdate(req.params.id, {$set: req.body},
        function (err, task) {
            console.log(task);
            if (err) return next(err);
            res.send(task);
        });
};

exports.task_delete = function (req, res) {
    Task.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.status(200).send("Done")
    })
};
exports.state_update = function (req, res) {
    Task.findByIdAndUpdate(req.params.id, { isDone:req.params.state},
        function (err, task) {
            if (err) return next(err);
            res.send(task);
        });
};