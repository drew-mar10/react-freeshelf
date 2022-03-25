import './Stylesheet.css';
import Book from "./components/Book"
import bookData from "./bookData"

const Freeshelf = () =>  {
    const books = bookData
    return (
    <div className='page'>
        <h1>React Freeshelf</h1>
        <div className='bookshelf'>
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
    </div>
)}


export default Freeshelf
