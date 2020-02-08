const express = require('express');

const projects = require('./projectsModel');

const router = express.Router();

router.get('/', (req, res) => {
    projects.findProjects()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json({
                error: 'Failed to get recipes.'
            })
        })
});

router.post('/', (req, res) => {
    const project = req.body;

    projects.createProject(project)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err => {
            res.status(500).json({
                error: 'Failed to create new project'
            })
        })
})


module.exports = router;