import React from 'react'
import { useQuery } from '@apollo/client';
import { getAllBooks } from "../services/Query"
import Book from './Book';

const AllBooks = ({ bookDetail }) => {
    const { loading, error, data } = useQuery(getAllBooks);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <>
            {data.books.map(book => (
                <Book
                    key={book.id}
                    name={book.name}
                    id={book.id}
                    bookDetail={bookDetail}
                />
            ))}
        </>
    )
}

export default AllBooks
