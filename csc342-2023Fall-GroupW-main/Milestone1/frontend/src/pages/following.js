import "../static/css/following.css"
import PostGallery from "../components/postGallery";

const Following = () => {
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
        <PostGallery posts={posts}/>
    );
}

export default Following;
