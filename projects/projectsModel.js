const db = require('../data/db.config');

function findProjects() {
    return db('projects')
};

function createProject(project) {
    return db('projects').insert(project)
};

module.exports = {
    findProjects,
    createProject
}