const { pool } = require('../db')

function updateAddress(userId, city, street, building, suite, zipCode){
    const newCity = city? city: getCity(userId)
    const newStreet = street? street: getStreet(userId)
    const newBuilding = building? building: getBuilding(userId)
    const newSuite = suite? suite: getSuite(userId)
    const newZipCode = zipCode? zipCode: getZipCode(userId)
}

function getCity(userId){

}

function getStreet(userId){

}
function getBuilding(userId){

}

function getSuite(userId){

}

function getZipCode(userId){

}
