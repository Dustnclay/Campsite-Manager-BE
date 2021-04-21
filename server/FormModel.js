const db = require('../data/connection')

module.exports= {
    getAll,
    getByLocation,
    postNew
}

function getAll(){
    return db('forms_data as f')
    .select('f.location')
} 

function getByLocation(location){
    return db('forms_data as f')
    .where("location", location)

}

async function postNew(newData){
    console.log("whats sent into thedb in formmodel",newData)
    return db("forms_data").insert(newData)
    try{
        await db("forms_data")
        .insert(newData)
        return newData

    }catch (err) {
        console.log(err)
    }
}
