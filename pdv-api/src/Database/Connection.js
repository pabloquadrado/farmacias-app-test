const knex = require('knex');
const configuration = require('../../knexfile');

const config = (environment) => ({
    'test': configuration.test,
    'development': configuration.development,
    'production': configuration.production
}[environment]);

const databaseConnection = knex(config(process.env.NODE_ENV));

module.exports = databaseConnection;