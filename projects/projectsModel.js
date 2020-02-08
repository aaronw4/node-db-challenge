const db = require('../data/db.config');

function findProjects() {
    return db('projects')
};

function createProject(project) {
    return db('projects').insert(project)
};

function findResources() {
    return db('resources')
};

function createResource(resource) {
    return db('resources').insert(resource)
}

module.exports = {
    findProjects,
    createProject,
    findResources,
    createResource
}