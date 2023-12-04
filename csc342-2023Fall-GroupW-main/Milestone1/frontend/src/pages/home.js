import "../static/css/home.css"
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Fragment, useState, useEffect } from "react";

const Home = () => {
    const [currentPage, setCurrentPage] = useState("Trending");

    const Tab = ({ title, route }) => {
        return (
            <Link to={`/${route}`}
                class={`tab ${currentPage == title ? 'open' : ''}`}
                onClick={() => setCurrentPage(title)}>
                {title}
            </Link>
        );
    }

    const pages = [
        {
            title: "Trending",
            route: "trending"
        },
        {
            title: "Following",
            route: "following"
        },
        {
            title: "Nearby",
            route: "nearby"
        },
        {
            title: "Search",
            route: "search"
        }
    ]

    return (
        <div class="home-page">
            <div class="tab-control">
                {
                    pages.map((page, index) => (
                        <Fragment key={page.route}>
                            <Tab title={page.title} route={page.route}>{page.title}</Tab>
                            {index < pages.length - 1 && <div className="tab-separator" />}
                        </Fragment>
                    ))}
            </div>
            <div class="content">
                <Outlet />
            </div>
        </div>
    )
}

export default Home;
