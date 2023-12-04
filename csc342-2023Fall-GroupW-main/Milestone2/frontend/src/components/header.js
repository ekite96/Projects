import '../static/css/header.css';
import pretzelImage from '../static/images/pretzel.png';
import hamburgerMenu from '../static/images/hamburger-menu.png';

const Header = ({ menuClick }) => {
    return (
        <header>
            <div className="header">
                <img src={pretzelImage} className="logo-img" />
                <h1 className="app-title">Food Folio</h1>
                <button className="hamburger-menu" onClick={menuClick}>
                    <img src={hamburgerMenu} />
                </button>
            </div>
            <div className="header-separator"></div>
        </header>
    );
};

export default Header;
