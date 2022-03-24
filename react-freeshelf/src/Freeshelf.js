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
                    shortDesc={book.shortDescription}
                    coverUrl={book.coverImageUrl}
                    pub={book.publisher}
                    pubDate={book.publicationDate}
                    detailDesc={book.detailedDescription}
                    index={book.idx}
                    />
            )}
        )}
    </>
)}


export default Freeshelf
