import "../static/css/post-gallery.css"

const NoteGallery = ({ notes }) => {
    const Note = ( { key, restID, dish, rating, body } ) => {
        return (
            <div className="card">
                <h2 className="dish">{dish}</h2>
                <h3 className="vendor">{restID}</h3>
                <h5 className="rating">{rating}</h5>
                <p className="body">{body}</p>
            </div>
        )
    }

    return (
        <div className="gallery">
            {notes.map(n => <Note key={n.id} restID={n.restID} dish={n.dish} rating={n.rating} body={n.body}/>)}
        </div>
    )
}

export default NoteGallery;