const db = require('../data/connection')

module.exports= {
    getAll,
    getByLocation
}

function getAll(){
    return db('formsData as f')
    .select('f.location')
}

function getByLocation(location){
    return db('formsData as f')
    .where("location", location)

}