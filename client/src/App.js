import React, { useState } from 'react'
import AddBook from './components/AddBook'
import AllBooks from './components/AllBooks'
import BookDetails from './components/BookDetails'

const App = () => {
    const [bookId, setBookId] = useState("")
    const getBookDetail = (id) => {
        setBookId(id)
    }

    return (
        <div className="minHeight">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-12 d-flex flex-column">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="d-flex flex-wrap">
                                    <AllBooks
                                        bookDetail={getBookDetail}
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                {bookId && <BookDetails bookId={bookId} />}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-6 my-3">
                        <AddBook />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
