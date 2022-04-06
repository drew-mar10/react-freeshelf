import { useState } from 'react';
import "./bookCard.css";
import bookData from '../bookData';
import placeholder from "./placeholder.png"

const Book = ({ title, author, image, url, short, pub, pubDate, detail, key }) => {
    const [isExpanded, setExpanded] = useState(false)
    return (
        <div className="bookCard">
            <div className='bookHeader'>
                <div className='bookHeader2'>
                    <h2><i><strong>{title}</strong></i></h2>
                    <h4>{author}</h4>
                    <div className='shortDesc'>
                        <p>"{short}"</p>
                    </div>
                </div>
            </div>
            {isExpanded ? (
            <div>
                <button a href="something" class="button1" role="button" onClick={() =>setExpanded(!isExpanded)}>
                    Close Details
                </button>
                <ul>

                    <div className='bookDeets'>
                        <img onError={(event) => event.target.src = `${placeholder}`} src={image} alt="book cover" className="coverImage" />
                    <p><strong>URL: <a href={url}>{url}</a></strong></p>
                    <p>Published By: {pub || "Not available"}</p>
                    <p>Published Date: {pubDate || "Not available"}</p>
                    <p>Full description: {detail}</p>
                    <p>{key}</p>
                    </div>
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
