import Drawer from "./drawer"
import '../static/css/sidebar-menu.css'
import homeImage from "../static/images/home.png"
import notesImage from "../static/images/notes.png"
import settingsImage from "../static/images/gear.png"
import { Link } from 'react-router-dom';

const SidebarMenu = ({ isOpen, close }) => {
    const MenuItem = ({ name, route, iconSrc }) => (
        <Link to={route} className="menu-item" onClick={close}>
            <img className="menu-item-img" src={iconSrc}/>
            <h2 className="menu-item-name">{name}</h2>
        </Link>
    );
    return (
        <Drawer className="sidebar" isOpen={isOpen} close={close}>
            <button className="close-button" onClick={close}>x</button>
            <h2 className="menu-title">Menu</h2>
            <MenuItem name="Home" route="/" iconSrc={homeImage}/>
            <MenuItem name="My Notes" route="/notes" iconSrc={notesImage}/>
            <MenuItem name="Settings" route="/settings" iconSrc={settingsImage}/>
        </Drawer>
    );
}

export default SidebarMenu;
