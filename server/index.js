const express = require("express")
const { graphqlHTTP } = require("express-graphql")
const app = express()
const schema = require("./schema/schema")
const dotenv = require("dotenv")
const errors = require("./middleware/errors")
app.use(errors)
dotenv.config({ path: "../.env" })
const cors = require("cors")
app.use(cors())

// conect to database
require('./startup/db')();
// logging messages
require('./startup/logging')();


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, () => console.log("App is listening on port 4000"))