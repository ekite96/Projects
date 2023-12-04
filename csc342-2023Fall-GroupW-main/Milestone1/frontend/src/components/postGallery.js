import "../static/css/post-gallery.css"

const PostGallery = ({ posts }) => {
    const Post = ( { dish, vendor, poster } ) => {
        return (
            <div class="card">
                <h2 class="dish">{dish}</h2>
                <img class="attachment"></img>
                <h3 class="vendor">{vendor}</h3>
                <h4 class="poster">{poster}</h4>
            </div>
        )
    }

    return (
        <div class="gallery">
            {posts.map(p => <Post dish={p.dish} vendor={p.vendor} poster={p.poster}/>)}
        </div>
    )
}

export default PostGallery;