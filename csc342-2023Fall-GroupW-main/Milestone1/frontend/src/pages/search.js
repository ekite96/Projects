import PostGallery from "../components/postGallery";
import "../static/css/search.css"
import searchImage from "../static/images/search.png"

export const Search = () => {
    const posts = [
        {
            dish: "pizza",
            vendor: "papa john's",
            poster: "alex"
        },
        {
            dish: "pizza",
            vendor: "papa john's",
            poster: "alex"
        },
        {
            dish: "pizza",
            vendor: "papa john's",
            poster: "alex"
        },
        {
            dish: "pizza",
            vendor: "papa john's",
            poster: "alex"
        },
    ]
    return (
        <div class="search-page">
            <div class="search-box">
                <input type="text" class="search-input" placeholder="Search..." />
                <img src={searchImage} class="search-icon" />
            </div>
            <PostGallery posts={posts}/>
        </div>
    )
}

export default Search;
