const mongoose = require('mongoose');
const db = require("../models/db.models")
const dbMedori = require("../models/dbMedori.models")

const createConnections = async () =>{
        const dbConn = await mongoose.createConnection(db.url, { useNewUrlParser: true })
        const dbMedoriConn = await mongoose.createConnection(dbMedori.url, { useNewUrlParser: true })
        console.log('connected to DB')
        return {dbConn,dbMedoriConn}
}

module.exports = {createConnections}