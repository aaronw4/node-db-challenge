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
                error: 'Failed to get projects.'
            })
        })
});

router.post('/', (req, res) => {
    const projectData = req.body;

    projects.createProject(projectData)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err => {
            res.status(500).json({
                error: 'Failed to create new project'
            })
        })
})

router.get('/resources', (req, res) => {
    projects.findResources()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(err => {
            res.status(500).json({
                error: 'Failed to get resources.'
            })
        })
});

router.post('/resources', (req, res) => {
    const resourceData = req.body;

    projects.createResource(resourceData)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(err => {
            res.status(500).json({
                error: 'Failed to create new resource'
            });
            console.log(err)
        })
})


module.exports = router;