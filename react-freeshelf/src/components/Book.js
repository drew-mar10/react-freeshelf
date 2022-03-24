import { useState } from 'react'
import bookData from '../bookData'

const Book = ({ title, author }) => {
    const [expanded, setExpanded] = useState(false)
    return (
        <div className="book">
            <h2>{title}</h2>
            <h4>{author}</h4>
            {expanded ? (
            <div>
                <button onClick={() => setExpanded(false)}>Hide title</button>
                <ul>
                    {bookData.map((book) => (
                        <li>{book}</li>
                    ))}
                </ul>
            </div>
        ) : (
            <button onClick={() =>setExpanded(true)}>Book Details</button>
        )}
        </div>
    )
}

export default Book