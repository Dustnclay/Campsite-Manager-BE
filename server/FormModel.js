const db = require('../data/connection')

module.exports= {
    getAll
}

function getAll(){
    return db('formsData as f')
    .select('f.collector')
}