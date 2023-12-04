import '../static/css/header.css'
import pretzelImage from '../static/images/pretzel.png'
import hamburgerMenu from '../static/images/hamburger-menu.png'

const Header = ({ menuClick }) => {
    return (
        <header>
            <div class="header">
                <img src={pretzelImage} class="logo-img"/>
                <h1 class="app-title">Food Folio</h1>
                <button class="hamburger-menu" onClick={menuClick}>
                    <img src={hamburgerMenu} />
                </button>
            </div>
            <div class="header-separator"></div>
        </header>
    )
};

export default Header;
