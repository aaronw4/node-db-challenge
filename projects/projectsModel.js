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

function findTasks() {
    return db('projects')
        .join('projectTasks', 'projectTasks.projectId', 'projects.id')
        .select('projects.name', 'projects.description as projectDescription', 'projectTasks.description', 'projectTasks.notes')
}

function createTask(task) {
    return db('projectTasks').insert(task)
}

module.exports = {
    findProjects,
    createProject,
    findResources,
    createResource,
    findTasks,
    createTask
}