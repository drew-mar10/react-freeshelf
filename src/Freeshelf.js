import React from 'react';
import "./components/bookCard.css";
import './Stylesheet.css';
import Book from "./components/Book";
import bookData from "./bookData";


const Freeshelf = () =>  {
    const books = bookData
    return (
    <div className='bookshelf'>
        <h1>React Freeshelf</h1>
            {books.map((book, idx) => {
                return(<Book 
                    title={book.title} 
                    author={book.author} 
                    url={book.url}
                    short={book.shortDescription}
                    image={book.coverImageUrl}
                    pub={book.publisher}
                    pubDate={book.publicationDate}
                    detail={book.detailedDescription}
                    key={idx}
                    />
            )}
        )}
    </div>
)}

export default Freeshelf
