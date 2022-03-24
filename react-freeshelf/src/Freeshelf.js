import bookData from "./bookData"

const Freeshelf = () =>  {
    return (
    <>
        <h1>React Freeshelf</h1>
            {bookData.map((book, idx) => {
                return <Book name={book} skills="react" key={idx} />
            })}

    </>
    )
}

// const Freeshelf = () => <h1>React Freeshelf</h1>

// mount the app in the DOM - need ReactDOM for this

const Book = ({ name, skills }) => {
    return (
        <div className="book">
            <h2>{name}</h2>
            <h4>{skills}</h4>
        </div>
    )
}

export default Freeshelf
