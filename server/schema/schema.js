const graphql = require("graphql")

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList
} = graphql

const books = [
    { id: "1", name: "book1", genre: "genre1", authorId: "1" },
    { id: "2", name: "book2", genre: "genre2", authorId: "2" },
    { id: "3", name: "book3", genre: "genre3", authorId: "3" },
    { id: "4", name: "book4", genre: "genre4", authorId: "2" },
    { id: "5", name: "book5", genre: "genre5", authorId: "1" }
]
const authors = [
    { id: "1", name: "author1", email: "email1", age: 43 },
    { id: "2", name: "author2", email: "email2", age: 24 },
    { id: "3", name: "author3", email: "email3", age: 34 },
]


const AuthorType = new GraphQLObjectType({
    name: "Author",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        age: { type: GraphQLInt },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                const result = books.filter(book => book.authorId === parent.id)
                return result
            }
        }
    })
})
const BookType = new GraphQLObjectType({
    name: "Book",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve(parent, args) {
                const author = authors.find(author => author.id === parent.authorId)
                return author
            }
        }
    })
})

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // code to get data from db / other source
                const book = books.find(book => book.id === args.id)
                return book
            }
        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                const author = authors.find((author) => author.id === args.id)
                return author
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                return books
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args) {
                return authors
            }
        }
    }
})
module.exports = new GraphQLSchema({
    query: RootQuery
})