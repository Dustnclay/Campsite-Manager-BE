const db = require('../data/connection')

module.exports= {
    getAll,
    getByLocation,
    postNew
}

function getAll(){
    return db('formsData as f')
    .select('f.location')
} 

function getByLocation(location){
    return db('formsData as f')
    .where("location", location)

}

async function postNew(newData){
    console.log("whats sent into thedb in formmodel",newData)
    try{
        await db("formsData")
        .insert(newData)
        return newData

    }catch (err) {
        console.log(err)
    }
}