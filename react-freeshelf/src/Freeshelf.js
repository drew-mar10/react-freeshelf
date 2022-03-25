import Book from "./components/Book"
import bookData from "./bookData"

const Freeshelf = () =>  {
    const books = bookData
    return (
    <>
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
                    index={book.idx}
                    />
            )}
        )}
    </>
)}


export default Freeshelf
