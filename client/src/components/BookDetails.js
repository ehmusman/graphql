import React from 'react'
import { useQuery } from "@apollo/client"
import { getSingleBook } from "../services/Query"

const BookDetails = ({ bookId }) => {
    const { loading, error, data } = useQuery(getSingleBook, {
        variables: { id: bookId }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <>
            <div className="list-group">
                <div className="list-group-item list-group-item-primary">
                    Book ID: # {data.book.id}
                </div>
                <div className="list-group-item list-group-item-primary">
                    Book Name: {data.book.name}
                </div>
                <div className="list-group-item list-group-item-primary">
                    Book Genre: {data.book.genre}
                </div>
            </div>
            <div className="list-group my-3">
                <div className="list-group-item list-group-item-primary">
                    Author ID: # {data.book.author.id}
                </div>
                <div className="list-group-item list-group-item-primary">
                    Author Name: {data.book.author.name}
                </div>
                <div className="list-group-item list-group-item-primary">
                    Book Email: {data.book.author.email}
                </div>
            </div>
        </>
    )
}

export default BookDetails
