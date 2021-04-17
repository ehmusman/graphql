const mongoose = require('mongoose')
const winston = require('winston')
const connectToDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.LOCAL_DB_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        winston.error(`Error: ${error.message}`)

        // console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}
module.exports = connectToDB