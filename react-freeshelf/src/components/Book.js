import { useState } from 'react';
import bookData from '../bookData';

const Book = ({ title, author, image, url, short, pub, pubDate, detail, key }) => {
    const [isExpanded, setExpanded] = useState(false)
    return (
        <div className="book">
            <h2><i>{title}</i></h2>
            <h4>{author}</h4>
            <h4>{short}</h4>
            
            {isExpanded ? (
            <div>
                <button a href="something" class="button1" onClick={() =>setExpanded(!isExpanded)}>
                    Close Details
                </button>
                <ul>

                    <>
                        <img src={image} alt="book cover" className="coverImage" />
                    <p>URL: <a href={url}>{url}</a></p>
                    <p>Published By: {pub || "Not available"}</p>
                    <p>Published Date: {pubDate || "Not available"}</p>
                    <p>Full description: {detail}</p>
                    <p>{key}</p>
                    </>
                </ul>
            </div>
        ) : (
            <button a href="something" class="button1" onClick={() =>setExpanded(!isExpanded)}>
                Book Details
            </button>
        )}
        </div>
    )
}

export default Book
