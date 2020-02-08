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
        .join('tasks', 'tasks.projectId', 'projects.id')
        .select('projects.name', 'projects.description', 'tasks.description', 'tasks.notes')
}

function createTask(task) {
    return db('tasks').insert(task)
}

module.exports = {
    findProjects,
    createProject,
    findResources,
    createResource,
    findTasks,
    createTask
}