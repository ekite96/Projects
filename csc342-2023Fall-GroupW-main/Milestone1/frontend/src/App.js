import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, SidebarMenu } from "./components";
import { Home, Nearby, Notes, Search, Settings, Trending, Following } from "./pages";
import { useState } from 'react';

export default function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleHamburgerClick = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const closeDrawer = () => {
        setSidebarOpen(false);
    };

    // nested router documentation:
    // https://ui.dev/react-router-nested-routes
    return (
        <div className="App">
            <Router>
                <Header menuClick={handleHamburgerClick} />
                <Routes>
                    <Route path="/" element={<Home />}>
                        <Route index element={<Trending />} />
                        <Route path="trending" element={<Trending />} />
                        <Route path="following" element={<Following />} />
                        <Route path="nearby" element={<Nearby />} />
                        <Route path="search" element={<Search />} />
                    </Route>
                    <Route path="notes" element={<Notes />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="*" element={<h1>not found</h1>} />
                </Routes>
                <SidebarMenu isOpen={sidebarOpen} close={closeDrawer} />
            </Router>
        </div>
    );
}
