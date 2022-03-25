import { useState } from 'react'
import bookData from '../bookData'

const Book = ({ title, author, image, url, short, pub, pubdate, detail,  }) => {
    const [isExpanded, setExpanded] = useState(false)
    return (
        <div className="book">
            <h2><i>{title}</i></h2>
            <h4>{author}</h4>
            <h4>{short}</h4>
            
            {isExpanded ? (
            <div>
                <button onClick={() =>setExpanded(!isExpanded)}>
                    Close Details
                </button>
                <ul>
                    {bookData.map((book) => (
                    <>
                        <img src={image} alt="book cover" className="coverImage" />
                    <p>URL: <a href={url}>{url}</a></p>
                    <p>Published By: {pub || "Not available"}</p>
                    {/* <p>{pubDate}</p> NOT WORKING*/}
                    <p>Full description: {detail}</p>
                    </>
                    ))}
                </ul>
            </div>
        ) : (
            <button onClick={() =>setExpanded(!isExpanded)}>
                Book Details
            </button>
        )}
        </div>
    )
}

export default Book

// <p>URL: <a href={url}>{url}</a></p>
// <p>Publisher: {publisher || "Not available"}</p>
// <p>Publication date: {pubDate || "Not available"}</p>
// <p>Full description: {long}</p>