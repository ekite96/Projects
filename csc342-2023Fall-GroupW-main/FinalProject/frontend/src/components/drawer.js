import '../static/css/drawer.css';

const Drawer = ({ isOpen, close, children }) => {
    return (
        <div className={`drawer-overlay ${isOpen ? 'open' : ''}`} onClick={close}>
            <div className={`drawer ${isOpen ? 'open' : ''}`} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Drawer;
