import Drawer from "./drawer"
import '../static/css/sidebar-menu.css'
import homeImage from "../static/images/home.png"
import notesImage from "../static/images/notes.png"
import { Link } from 'react-router-dom';
import api from '../static/js/APIClient';

const SidebarMenu = ({ isOpen, close }) => {
        const logout = async () => {
            api.logout();
          window.location.href = '/login';
        }
    const MenuItem = ({ name, route, iconSrc }) => (
        <Link to={route} className="menu-item" onClick={close}>
            <img className="menu-item-img" src={iconSrc}/>
            <h2 className="menu-item-name">{name}</h2>
        </Link>
    );
    return (
        <Drawer className="sidebar" isOpen={isOpen} close={close}>
            <button className="close-button" onClick={close}><div>x</div></button>
            <h2 className="menu-title">Menu</h2>
            <MenuItem name="Home" route="/" iconSrc={homeImage}/>
            <MenuItem name="My Notes" route="/notes" iconSrc={notesImage}/>
            <button className="logout" onClick={logout}>Logout  </button>
        </Drawer>
    );
}

export default SidebarMenu;
