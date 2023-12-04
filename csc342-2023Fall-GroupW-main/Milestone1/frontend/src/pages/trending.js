import "../static/css/trending.css"
import PostGallery from "../components/postGallery";

const Trending = () => {
    const posts = [
        {
            dish: "pizza ",
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
        <PostGallery posts={posts}/>
    );
}

export default Trending;
