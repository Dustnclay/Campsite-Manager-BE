const db = require('../data/connection')

module.exports= {
    getAll,
    getByLocation,
    postNew
}

function getAll(){
    return db('forms_data as f')
    .select('f.location','f.latlng')
} 

function getByLocation(location){
    return db('forms_data as f')
    .where("location", location)

}

async function postNew(newData){
    return db("forms_data").insert(newData)
}
