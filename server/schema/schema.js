const graphql = require("graphql")

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema
} = graphql

const books = [
    { id: "1", name: "book1", genre: "genre1" },
    { id: "2", name: "book2", genre: "genre2" },
    { id: "3", name: "book3", genre: "genre3" },
    { id: "4", name: "book4", genre: "genre4" },
    { id: "5", name: "book5", genre: "genre5" }
]

const BookType = new GraphQLObjectType({
    name: "Book",
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
})

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                // code to get data from db / other source
                const book = books.find(book => book.id === args.id)
                // return _.find(books, { id: args.id })
                return book
            }
        }
    }
})
module.exports = new GraphQLSchema({
    query: RootQuery
})