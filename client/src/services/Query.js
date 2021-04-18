import { gql } from "@apollo/client"

export const getAllBooks = gql`
{
    books {
        id
        name
    }
}
`

export const getSingleBook = gql`
    query book($id: ID!){
        book(id: $id) {
            name
            genre
            id
            author{
                id
                name
                email
                age
            }    
        }
    }
`
export const getAllAuthors = gql`
{
    authors {
        name
        id   
    }
}
`

export const getSingleAuthor = gql`
query author($id: ID!){
    author(id: $id) {
        name
        id   
    }
}
`
//////////////////////////////////////////////////////////////////////
// Mutation

export const addingBook = gql`
mutation addBook($name: String!, $genre: String!, $authorId: ID!){
    addBook(name: $name, genre: $genre, authorId: $authorId){
        id
    }
}
`