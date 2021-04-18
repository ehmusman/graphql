import React from 'react'

const Book = ({ name, id, bookDetail }) => {
    const handleOnClick = (id) => {
        bookDetail(id)
    }
    return (
        <button onClick={() => handleOnClick(id)} id={id} className="btn btn-danger mx-3 my-3">
            {name}
        </button>

    )
}

export default Book
