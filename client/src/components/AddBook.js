import React, { useState } from 'react'
import { useQuery, useMutation } from "@apollo/client"
import { getAllAuthors, addingBook, getAllBooks } from "../services/Query"

const AddBook = () => {
    const [name, setName] = useState("")
    const [genre, setGenre] = useState("")
    const [author, setAuthor] = useState("")
    const [addBook] = useMutation(addingBook)
    const handleOnSubmit = (e) => {
        e.preventDefault()
        if (author === "" || name === "" || genre === "") {
            window.alert("Please fill all the fields")
            return
        }
        addBook({
            variables: { name, genre, authorId: author },
            refetchQueries: [{ query: getAllBooks }]
        })
        setName("")
        setGenre("")
        setAuthor("")
    }
    const { loading, error, data } = useQuery(getAllAuthors)
    if (loading) return <div>Loading.....</div>
    if (error) return <div>Error</div>

    return (
        <form onSubmit={handleOnSubmit}>
            <div className="form-group">
                <label htmlFor="name">Book Name</label>
                <input value={name} onChange={e => setName(e.target.value)} className="form-control" placeholder="Book Name" type="text" id="name" />
            </div>
            <div className="form-group">
                <label htmlFor="genre" id="genre">Book Genre</label>
                <input value={genre} onChange={e => setGenre(e.target.value)} className="form-control" placeholder="Book Genre" type="text" />
            </div>
            <div className="form-group">
                <label htmlFor="author">Author</label>
                <select value={author} onChange={e => setAuthor(e.target.value)} id="author" className="form-control">
                    <option>Select Author</option>
                    {data.authors.map(author => (
                        <option key={author.id} value={author.id}>{author.name}</option>
                    ))}
                </select>
            </div>
            <button type="submit" className="btn btn-danger">+</button>
        </form>
    )
}

export default AddBook
